"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe10 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe10;
(function (Aufgabe10) {
    let rückgabeZuChat;
    let user;
    let nachricht;
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
        user = mongoClient.db("Abgabe").collection("User");
        nachricht = mongoClient.db("Abgabe").collection("Nachrichten");
        console.log("Database connection: ", user != undefined);
    }
    function handleListen() {
        console.log("Servus");
    }
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (url.pathname == "/neuernutzer") {
                user.insertOne(url.query);
            }
            if (url.pathname == "/nutzeranmelden") {
                /*-------------------query Inhalt bearbeiten----------------*/
                let queryInhalt = "";
                for (let key in url.query) {
                    queryInhalt += (key + ":" + url.query[key] + "#");
                }
                let splitArray1 = queryInhalt.split("#");
                let splitArray2 = splitArray1[2];
                let splitArray3 = splitArray1[1];
                let passwort = splitArray2.split(":");
                let nachname = splitArray3.split(":");
                let pw = passwort[1];
                let nname = nachname[1];
                console.log(pw);
                console.log(nname);
                /*----------------------DB Inhalt-----------------------*/
                let dbInhalt = await user.find().toArray(); //db Inhalt laden
                let dbInhalt2 = JSON.stringify(dbInhalt); // In String umwandeln
                let rückgabeZuChat2 = "";
                console.log(dbInhalt2);
                for (let index = 0; index < dbInhalt.length; index++) {
                    if (dbInhalt2.includes(pw) && dbInhalt2.includes(nname)) {
                        rückgabeZuChat = "&&true&&";
                        rückgabeZuChat2 = JSON.stringify(rückgabeZuChat);
                        break;
                    }
                    else {
                        rückgabeZuChat = "&&false&&";
                        rückgabeZuChat2 = JSON.stringify(rückgabeZuChat);
                    }
                }
                console.log(rückgabeZuChat2);
                _response.write(rückgabeZuChat2);
            }
            if (url.pathname == "/neueNachricht") {
                let queryStringify = JSON.stringify(url.query);
                let queryArray = queryStringify.split("\"");
                let neueNachricht = { user: queryArray[1], nachricht: queryArray[2], chat: queryArray[3] };
                nachricht.insertOne(neueNachricht);
            }
            if (path == "/nachrichtenLaden") {
                let dbNachricht = await nachricht.find().toArray(); //db Inhalt laden
                let dbNachricht2 = JSON.stringify(dbNachricht);
                _response.write(dbNachricht2);
            }
            _response.end();
        }
    }
})(Aufgabe10 = exports.Aufgabe10 || (exports.Aufgabe10 = {}));
//# sourceMappingURL=server.js.map