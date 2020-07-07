namespace Aufgabe10 {

    document.getElementById("senden")?.addEventListener("click", hinzufügen);
    document.getElementById("antwort")?.addEventListener("click", anzeigen);

    async function hinzufügen(): Promise<void> {
        console.log("sdfsdf");
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis2020felix.herokuapp.com";
        url += "/hinzufügen";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        (<HTMLFormElement>document.getElementById("data"))?.reset();
        await fetch(url);
    }

    async function anzeigen(): Promise<void> {
        console.log("sdfsdf");
        let url: string = "https://gis2020felix.herokuapp.com";
        url += "/anzeigen";
        let response: Response = await fetch(url,{method: "get"});
        let response2: string = await response.text(); 
        (<HTMLElement>document.getElementById("inhalt")).innerHTML = response2;
        
    }




}