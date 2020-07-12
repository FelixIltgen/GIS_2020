namespace Aufgabe10 {

    document.getElementById("senden")?.addEventListener("click", hinzufügen);
    document.getElementById("antwort")?.addEventListener("click", anzeigen);

    async function hinzufügen(): Promise<void> {
        
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis2020felix.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/hinzufuegen";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        
        (<HTMLFormElement>document.getElementById("data"))?.reset();
        await fetch(url);
    }

    async function anzeigen(): Promise<void> {
        
        let url: string = "https://gis2020felix.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/anzeigen";
        let rückgabe1: Response = await fetch(url);
        let rückgabe2: string = await rückgabe1.text(); 
        (<HTMLElement>document.getElementById("inhalt")).innerHTML = rückgabe2;
        
    }


    
}