"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe11 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe11;
(function (Aufgabe11) {
    let orders;
    console.log("Starting server");
    //Port wird als Variable typ number gespeichert.
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    //let databaseURL: string = "mongodb://localhost:27017";
    let databaseURL = "mongodb+srv://FelixIltgen:Test123@felixiltgen.fpfuw.mongodb.net/Aufgabe11?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseURL);
    function startServer(_port) {
        //Server wird als Variable typ Http.Server gespeichert.
        let server = Http.createServer();
        //Handler werden dem Server als Listener hinzugefügt.
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        //Server hört den Port ab.
        server.listen(_port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("DatabaseA11").collection("CollectionA11");
        console.log("Database connection: ", orders != undefined);
    }
    //Konsole gibt beim Aufruf "Listening" aus.
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //Konsole gibt beim Aufruf "I hear voices!" aus.
        console.log("I hear voices!");
        //Parameter werden für die Response festgelegt.
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let urlQuery = Url.parse(_request.url, true);
            let path = urlQuery.pathname;
            let jsonString = "";
            // tslint:disable-next-line: typedef
            orders.find().toArray(function (error, results) {
                if (error) {
                    throw error;
                }
                if (path == "/show") {
                    for (let i = 0; i < results.length; i++) {
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
})(Aufgabe11 = exports.Aufgabe11 || (exports.Aufgabe11 = {}));
//# sourceMappingURL=server.js.map