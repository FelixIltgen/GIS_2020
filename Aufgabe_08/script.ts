import * as Http from "http";

export namespace A08Server {
    //Consolen Ausgabe "Starting server"
  console.log("Starting server");
  //Variable port bekommt Port als number zugewiesen.
  let port: number = Number(process.env.PORT);
  //Bei keinem Port wird Port 8100 zugewiesen
  if (!port)
    port = 8100;
    //Server wird erstellt 
  let server: Http.Server = Http.createServer();
  // Handler werden dem Server in vorm von Listener hinzugefügt 
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  // Server hört Port ab Port
  server.listen(port);

  function handleListen(): void {
      //Console log "Listening"
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
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
}