namespace Aufgabe8 {

    document.getElementById("HtmlKnopf")?.addEventListener("click", ausgabeHtml);
    document.getElementById("JasonKnopf")?.addEventListener("click", ausgabeJason);

    function send(): string {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis2020felix.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        return (url);
    }


    async function ausgabeJason(): Promise<void> {
        conAusgabe(await teiler(send()));
    }

    async function ausgabeHtml(): Promise<void> {
        ausHtml(await teiler(send()));
    }

    function ausHtml(_arrayteiler: string[]): void {

        (<HTMLElement>document.getElementById("Inhalt")).innerHTML = _arrayteiler[0];

    }

    function conAusgabe(_arrayteiler: string[]): void {
        let ausgabe: string = JSON.parse(_arrayteiler[1]);
        console.log(ausgabe);
    }


    async function teiler(_url: RequestInfo): Promise<string[]> {
        let response: Response = await fetch(_url);
        let response2: string = await response.text();
        let arrayrequest: string[] = response2.split("$$$");
        return arrayrequest;
    }

}