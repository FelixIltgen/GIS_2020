namespace Aufgabe9 {
    document.getElementById("hButton")?.addEventListener("click", htmlButton);
    document.getElementById("jButton")?.addEventListener("click", jsonButton);

    function senden(): string {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://davidgis2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        return url;
    }

    async function jsonButton(): Promise<void> {
        AusgabeInConsole(await teiler(senden()));
    }
    function AusgabeInConsole(arrayteiler: string[]): void {
        let ausgabe: string = JSON.parse(arrayteiler[1]);
        console.log(ausgabe);
    }


    async function htmlButton(): Promise<void> {
        AusgabeInHtml( await teiler(senden()));
    }
    function AusgabeInHtml(arrayteiler: string[]): void {
        (<HTMLElement>document.getElementById("inhalt")).innerHTML  = arrayteiler[0];
    }

   
    async function teiler(_url: RequestInfo): Promise<string[]> {
        let rückgabe: Response = await fetch(_url);
        let rückgabe2: string = await rückgabe.text();
        let arrayrequest: string[] = rückgabe2.split("&&");
        return arrayrequest;
    }
}
//https://gis2020felix.herokuapp.com/
//https://davidgis2020.herokuapp.com/