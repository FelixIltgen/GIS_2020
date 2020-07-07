import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe11 {

    let orders: Mongo.Collection;
    
    
    console.log("Starting server"); 
    //Port wird als Variable typ number gespeichert.
    let port: number = Number(process.env.PORT);

    if (!port)
    port = 8100;

    //let databaseURL: string = "mongodb://localhost:27017";
    let databaseURL: string = "mongodb+srv://FelixIltgen:Test123@felixiltgen.fpfuw.mongodb.net/Aufgabe11?retryWrites=true&w=majority";

    startServer(port);
    connectToDatabase(databaseURL);

    function startServer(_port: number | string): void {
        //Server wird als Variable typ Http.Server gespeichert.
        let server: Http.Server = Http.createServer();
        //Handler werden dem Server als Listener hinzugefügt.
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        //Server hört den Port ab.
        server.listen(_port);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("DatabaseA11").collection("CollectionA11");
        console.log("Database connection: ", orders != undefined);
    }

    //Konsole gibt beim Aufruf "Listening" aus.
    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        //Konsole gibt beim Aufruf "I hear voices!" aus.
        console.log("I hear voices!");

        //Parameter werden für die Response festgelegt.
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let urlQuery: Url.UrlWithParsedQuery  = Url.parse(_request.url, true);
            let path: String | null = urlQuery.pathname;
            let jsonString: String = "";
            // tslint:disable-next-line: typedef
            orders.find().toArray( function(error: Mongo.MongoError, results: String[]) {
            if (error) { throw error; }
            
            if (path == "/show") {
                for (let i: number = 0; i < results.length; i++) {
                    jsonString += JSON.stringify(results[i]);
                    jsonString += "<br>";
                }
            }

            if (path == "/add") {
                orders.insertOne(urlQuery.query);
            }

            _response.write(jsonString);
            _response.end();
            });
        }
    }
}