import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace Aufgabe10 {

    let orders: Mongo.Collection;

    console.log("Server starten");
    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;

    let databaseURL: string = "mongodb+srv://FelixIltgen:Test123@felixiltgen.fpfuw.mongodb.net/Aufgabe11?retryWrites=true&w=majority";
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
        orders = mongoClient.db("Aufgabe11").collection("User");
        console.log("Database connection: ", orders != undefined);
    }

    function handleListen(): void {
        console.log("Servus");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: String | null = url.pathname;
            let jString: String = "";
            // tslint:disable-next-line: typedef
            orders.find().toArray(function (error: Mongo.MongoError, info: String[]) {

                if (error)
                    throw error;


                if (path == "/anzeigen") {
                    
                    for (let i: number = 0; i < info.length; i++) {
                        
                        jString += JSON.stringify(info[i]);
                        jString += "<br>";
                        
                    }
                }

                if (path == "/hinzufuegen") {
                    orders.insertOne(url.query);
                }

                _response.write(jString);
                _response.end();

            });
        }
    }
}