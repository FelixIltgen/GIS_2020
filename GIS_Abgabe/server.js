"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe10 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe10;
(function (Aufgabe10) {
    let orders;
    console.log("Server starten");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseURL = "mongodb+srv://FelixIltgen:Test123@felixiltgen.fpfuw.mongodb.net/Abgabe?retryWrites=true&w=majority";
    //let databaseURL: string = "mongodb://localhost:27017";
    startserver(port);
    connectToDatabase(databaseURL);
    function startserver(_port) {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Abgabe").collection("User");
        console.log("Database connection: ", orders != undefined);
    }
    function handleListen() {
        console.log("Servus");
    }
    function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            let jString = "";
            // tslint:disable-next-line: typedef
            orders.find().toArray(function (error, info) {
                if (error)
                    throw error;
                if (path == "/neuernutzer") {
                    orders.insertOne(url.query);
                }
                if (path == "/anzeigen") {
                    for (let i = 0; i < info.length; i++) {
                        jString += JSON.stringify(info[i]);
                        jString += "<br>";
                    }
                }
                _response.write(jString);
                _response.end();
            });
        }
    }
})(Aufgabe10 = exports.Aufgabe10 || (exports.Aufgabe10 = {}));
//# sourceMappingURL=server.js.map