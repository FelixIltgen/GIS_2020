import * as Http from "http";
import * as Url from "url";

export namespace Aufgabe9 {

    console.log("Server starten");
    let port: number = Number(process.env.PORT);

    if (!port)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Servus");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {


        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        /*
               if (_request.url) {
                   let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
                   for (let key in url.query) {
                       _response.write(key + ":" + url.query[key] + " <br/>");
                   }
       
                   _response.write("$$$");
                   let urlJson: string = JSON.stringify(url.query);
       
                   _response.write(urlJson);
               }
       */
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            if (url.pathname == "/hbutton") {

                for (let key in url.query) {
                    //schreiben als html vertänlicher text
                    _response.write(key + ":" + url.query[key] + " <br/>");
                }
            } else if (url.pathname == "/jbutton") {
                let urlJson: string = JSON.stringify(url.query);
                _response.write(urlJson);
            }
        }
        _response.end();
    }

}