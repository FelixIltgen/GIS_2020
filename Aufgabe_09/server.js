"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe9 = void 0;
const Http = require("http");
const Url = require("url");
var Aufgabe9;
(function (Aufgabe9) {
    console.log("Server starten");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Servus");
    }
    function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/hbutton") {
                for (let key in url.query) {
                    _response.write(key + ":" + url.query[key] + " <br/>");
                }
            }
            else if (url.pathname == "/jbutton") {
                let urlJson = JSON.stringify(url.query);
                _response.write(urlJson);
            }
        }
        _response.end();
    }
})(Aufgabe9 = exports.Aufgabe9 || (exports.Aufgabe9 = {}));
//# sourceMappingURL=server.js.map