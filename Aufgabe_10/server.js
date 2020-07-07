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
    let databaseURL = "mongodb+srv://FelixIltgen:Test123@felixiltgen.fpfuw.mongodb.net/Aufgabe11?retryWrites=true&w=majority";
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
        orders = mongoClient.db("Aufgabe11").collection("User");
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
            let jsonString = "";
            // tslint:disable-next-line: typedef
            orders.find().toArray(function (error, info) {
                if (error)
                    throw error;
                if (path == "/anzeigen") {
                    console.log("sdfsdf");
                    for (let i = 0; i < info.length; i++) {
                        jsonString += JSON.stringify(info[i]);
                        jsonString += "<br>";
                    }
                }
                if (path == "/hinzufügen") {
                    console.log("spast");
                    orders.insertOne(url.query);
                }
                _response.write(jsonString);
                _response.end();
            });
        }
    }
})(Aufgabe10 = exports.Aufgabe10 || (exports.Aufgabe10 = {}));
//# sourceMappingURL=server.js.map