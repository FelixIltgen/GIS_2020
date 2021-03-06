import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe10 {

    interface Nachrichten {
        user: string;
        nachricht: string;
        chat: string;
    }

    let rückgabeZuChat: string;
    let user: Mongo.Collection;
    let nachricht: Mongo.Collection;

    console.log("Server starten");
    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;

    let databaseURL: string = "mongodb+srv://FelixIltgen:Test123@felixiltgen.fpfuw.mongodb.net/Abgabe?retryWrites=true&w=majority";
    //let databaseURL: string = "mongodb://localhost:27017";

    startserver(port);
    connectToDatabase(databaseURL);

    function startserver(_port: number | string): void {

        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);

    }
    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        user = mongoClient.db("Abgabe").collection("User");
        nachricht = mongoClient.db("Abgabe").collection("Nachrichten");
        console.log("Database connection: ", user != undefined);
    }

    function handleListen(): void {
        console.log("Servus");
    }
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: String | null = url.pathname;

// Nutzer in DB
            if (url.pathname == "/neuernutzer") {
                user.insertOne(url.query);
            }

//Nutzer anmelden
            if (url.pathname == "/nutzeranmelden") {

                let queryInhalt: String = "";

                for (let key in url.query) {
                    queryInhalt += (key + ":" + url.query[key] + "#");
                }
                let splitArray1: string[] = queryInhalt.split("#");

//Querry splitten
                let splitArray2: string = splitArray1[2];
                let splitArray3: string = splitArray1[1];
                let passwort: string[] = splitArray2.split(":");
                let nachName: string[] = splitArray3.split(":");
                let pw: string = passwort[1]; 
                let nName: string = nachName[1];

//DB Inhalt laden & vergleichen 
                let dbInhalt: string[] = await user.find().toArray(); 
                let dbInhalt2: string = JSON.stringify(dbInhalt); 
                let rückgabeZuChat2: String = "";
                for (let index: number = 0; index < dbInhalt.length; index++) {

                    if (dbInhalt2.includes(pw) &&  dbInhalt2.includes(nName)) {
                    
                        rückgabeZuChat = "&&true&&";
                        rückgabeZuChat2 = JSON.stringify(rückgabeZuChat);
                        break;    
                    } else {
                        rückgabeZuChat = "&&false&&";
                        rückgabeZuChat2 = JSON.stringify(rückgabeZuChat);
                    }
                }
                _response.write(rückgabeZuChat2);
            }
//Wenn neue Nachricht
            if (url.pathname == "/neueNachricht") {
        
                let queryStringify: string = JSON.stringify(url.query);
                let queryArray: string[] = queryStringify.split("\"");
                let neueNachricht: Nachrichten = { user: queryArray[1], nachricht: queryArray[2], chat: queryArray[3] };
                nachricht.insertOne(neueNachricht);
            }
//Nachrichten Laden
            if (path == "/nachrichtenLaden") {
                let dbNachricht: string[] = await nachricht.find().toArray(); //db Inhalt laden
                let dbNachricht2: string = JSON.stringify(dbNachricht);
                _response.write(dbNachricht2);
            }
            _response.end();
        }
    }
}