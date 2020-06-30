namespace Aufgabe9 {
    document.getElementById("hButton")?.addEventListener("click", ausgabe);
    document.getElementById("jButton")?.addEventListener("click", ausgabe);

    function ausgabe(_event: Event): void {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis2020felix.herokuapp.com/" + (<HTMLButtonElement>_event.target).getAttribute("id");
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        if ((<HTMLButtonElement>_event.target).getAttribute("id") == "hbutton") {
            htmlausgabe(url);
        }
        else if ((<HTMLButtonElement>_event.target).getAttribute("id") == "jbutton") {
            consolausgabe(url);
        }
    }
    async function htmlausgabe(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let response2: string = await response.text();
        (<HTMLElement>document.getElementById("anzeige")).innerHTML  = response2;

    }
    async function consolausgabe(_url: RequestInfo): Promise<void> {
        let rückgabe: Response = await fetch(_url);
        let rückgabe2: string = await rückgabe.text();
        let inhalt: string = JSON.parse(rückgabe2);
        console.log(inhalt);
    }
}
