namespace Abgabe {

//Wechsel zwischen Login / Registrieren
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


 //Daten in DB schreiben

    document.getElementById("registbutton")?.addEventListener("click", inDB);

    async function inDB(): Promise<void> {

        let formData: FormData = new FormData(document.forms[1]);
        let url: string = "https://gis2020felix.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/neuernutzer";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();

        (<HTMLFormElement>document.getElementById("registrieren"))?.reset();
        await fetch(url);
    }
//Daten aus der DB abfragen

    document.getElementById("anmeldbutton")?.addEventListener("click", ausDB);

    async function ausDB(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis2020felix.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/nutzeranmelden";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        (<HTMLFormElement>document.getElementById("anmelden"))?.reset();
        let anfragenAntwort: Response = await fetch(url);

//LocalStorage füllen
        let extraQuery: string = query.toString();
        console.log(extraQuery);
        let extraTeil1: string[] = extraQuery.split("&");
        let extraTeil2: string[] = extraTeil1[0].split("=");
        console.log(extraTeil2[1]);
        let userName: string = extraTeil2[1]; 
        localStorage.setItem("Username", userName);

 //Antwort vom Server verarbeiten
        let antwort: string = await anfragenAntwort.text(); 
        let antwortarry: string[] = antwort.split("&&");  
        
        if (antwortarry[1] == "true") {
            window.location.href = "chat.html";
        } else {
            alert("Uppsss!! User ist nicht vorhanden");
        }
    }




}