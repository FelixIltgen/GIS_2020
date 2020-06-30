namespace Aufgabe9 {
    document.getElementById("hButton")?.addEventListener("click", ausgabe);
    document.getElementById("jButton")?.addEventListener("click", ausgabe);

    function ausgabe(_event: Event): void {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis2020felix.herokuapp.com/" + (<HTMLButtonElement>_event.target).getAttribute("id");
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        //Wenn Button (Als HTML) gedrückt wird
        if ((<HTMLButtonElement>_event.target).getAttribute("id") == "hbutton") {
            htmlausgabe(url);
        }
        // Wenn Button (Als JSON) gedrückt wird
        else if ((<HTMLButtonElement>_event.target).getAttribute("id") == "jbutton") {
            consolausgabe(url);
        }
    }
    
    async function consolausgabe(_url: RequestInfo): Promise<void> {
        let rückgabe: Response = await fetch(_url);
        let rückgabe2: string = await rückgabe.text();
        let inhalt: string = JSON.parse(rückgabe2);
        console.log(inhalt);
    }
    
    async function htmlausgabe(_url: RequestInfo): Promise<void> {
        let rückgabe: Response = await fetch(_url);
        let rückgabe2: string = await rückgabe.text();
        (<HTMLElement>document.getElementById("inhalt")).innerHTML  = rückgabe2;

    }
   
}
