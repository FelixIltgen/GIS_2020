namespace Aufgabe8 {


    document.getElementById("derKnopf")?.addEventListener("click", buttonklick);

   

    async function verbindung(_url: RequestInfo): Promise<void> {
        console.log("dsf");
        let test: Response = await fetch(_url, { method: "get" });
        let test2: String = await test.text();
        console.log(test2);

    }

    function buttonklick(): void {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis2020felix.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        verbindung(url);
    }

}

