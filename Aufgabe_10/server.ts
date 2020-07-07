import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace Aufgabe10 {

    let orders: Mongo.Collection;

    console.log("Server starten");
    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;

    let databaseURL: string = "mongodb+srv://FelixIltgen:Test123@felixiltgen.fpfuw.mongodb.net/Test?retryWrites=true&w=majority";

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
        orders = mongoClient.db("Name").collection("Collection");
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
            let jsonString: String = "";
            // tslint:disable-next-line: typedef
            orders.find().toArray(function (error: Mongo.MongoError, results: String[]) {

                if (error)
                    throw error;


                if (path == "/anzeigen") {
                    for (let i: number = 0; i < results.length; i++) {
                        jsonString += JSON.stringify(results[i]);
                        jsonString += "<br>";
                    }
                }

                if (path == "/hinzufügen") {
                    orders.insertOne(url.query);
                }

                _response.write(jsonString);
                _response.end();

            });
        }
    }
}