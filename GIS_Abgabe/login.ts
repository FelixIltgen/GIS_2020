namespace Abgabe {

    /*------------------Input Wechsel------------------*/
    document.getElementById("zeigen1")?.addEventListener("click", zeigRegistartion);
    document.getElementById("zeigen2")?.addEventListener("click", zeigAnmeldung);

    function zeigRegistartion(): void {
        (<HTMLElement>document.getElementById("test2")).style.display = "block";
        (<HTMLElement>document.getElementById("test1")).style.display = "none";
    }
    function zeigAnmeldung(): void {
        (<HTMLElement>document.getElementById("test2")).style.display = "none";
        (<HTMLElement>document.getElementById("test1")).style.display = "block";
    }


    /*-----------------In DB schreiben--------------*/

    document.getElementById("registbutton")?.addEventListener("click", inDB);

    async function inDB(): Promise<void> {
        
        let formData: FormData = new FormData(document.forms[1]);
        //let url: string = "https://gis2020felix.herokuapp.com";
        let url: string = "http://localhost:8100";
        url += "/neuernutzer";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        console.log(url);
        (<HTMLFormElement>document.getElementById("registrieren"))?.reset();
        await fetch(url);
    }
    /*-------------------DB Abfragen---------------------*/

    document.getElementById("anmeldbutton")?.addEventListener("click", ausDB);

    async function ausDB(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        //let url: string = "https://gis2020felix.herokuapp.com";
        let url: string = "http://localhost:8100";
        url += "/nutzeranmelden";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        console.log(url);
        (<HTMLFormElement>document.getElementById("registrieren"))?.reset();
        //let antwort: Response = await fetch(url);
        //let antwort2: string = await antwort.text();
        
    }



}