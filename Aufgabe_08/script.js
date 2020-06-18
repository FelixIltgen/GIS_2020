"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    //Consolen Ausgabe "Starting server"
    console.log("Starting server");
    //Variable port bekommt Port als number zugewiesen.
    let port = Number(process.env.PORT);
    //Bei keinem Port wird Port 8100 zugewiesen
    if (!port)
        port = 8100;
    //Server wird erstellt 
    let server = Http.createServer();
    // Handler werden dem Server in vorm von Listener hinzugefügt 
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    // Server hört Port ab Port
    server.listen(port);
    function handleListen() {
        //Console log "Listening"
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        // Kosnsolen Ausgabe bei Aufruf 
        console.log("I hear voices!");
        // Response Parameter werden festgelegt
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // Response wird geschrieben/ erstellt
        _response.write(_request.url);
        // Response wird auf Konsole ausgegben.
        console.log(_request.url);
        // ende der Response 
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=script.js.map