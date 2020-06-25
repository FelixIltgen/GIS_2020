namespace Aufgabe9 {
    document.getElementById("hButton")?.addEventListener("click", htmlButton);
    document.getElementById("jButton")?.addEventListener("click", jsonButton);

    function senden(): string {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis2020felix.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        return url;
    }

    async function jsonButton(): Promise<void> {
        AusgabeInConsole(await teiler(senden()));
    }

    async function htmlButton(): Promise<void> {
        AusgabeInHtml( await teiler(senden()));
    }


    function AusgabeInHtml(_arraysplit: string[]): void {

        (<HTMLElement>document.getElementById("inhalt")).innerHTML  = _arraysplit[0];

    }

    function AusgabeInConsole(_arraysplit: string[]): void {
        let ausgabe: string = JSON.parse(_arraysplit[1]);
        console.log(ausgabe);
    }

    async function teiler(_url: RequestInfo): Promise<string[]> {
        let response: Response = await fetch(_url);
        let response2: string = await response.text();
        let arrayrequest: string[] = response2.split("$$$");
        return arrayrequest;
    }
}
https://gis2020felix.herokuapp.com/