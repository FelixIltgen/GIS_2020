namespace Aufgabe8 {

    document.getElementById("derKnopf")?.addEventListener("click", buttonklick);

    async function verbindung(_url: RequestInfo): Promise<void> {
        let rückgabe: Response = await fetch(_url, { method: "get" });
        let rückgabe2: String = await rückgabe.text();
        console.log(rückgabe2);

    }

    function buttonklick(): void {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis2020felix.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        verbindung(url);
    }

}

