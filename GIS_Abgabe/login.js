"use strict";
var Abgabe;
(function (Abgabe) {
    /*------------------Input Wechsel------------------*/
    document.getElementById("zeigen1")?.addEventListener("click", zeigRegistartion);
    document.getElementById("zeigen2")?.addEventListener("click", zeigAnmeldung);
    function zeigRegistartion() {
        document.getElementById("test2").style.display = "block";
        document.getElementById("test1").style.display = "none";
    }
    function zeigAnmeldung() {
        document.getElementById("test2").style.display = "none";
        document.getElementById("test1").style.display = "block";
    }
    /*-----------------In DB schreiben--------------*/
    document.getElementById("registbutton")?.addEventListener("click", inDB);
    async function inDB() {
        let formData = new FormData(document.forms[1]);
        let url = "https://gis2020felix.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/neuernutzer";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log(url);
        document.getElementById("registrieren")?.reset();
        await fetch(url);
    }
    /*-------------------DB Abfragen---------------------*/
    document.getElementById("anmeldbutton")?.addEventListener("click", ausDB);
    async function ausDB() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis2020felix.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/nutzeranmelden";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log(url);
        document.getElementById("registrieren")?.reset();
        //let antwort: Response = await fetch(url);
        //let antwort2: string = await antwort.text();
    }
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=login.js.map