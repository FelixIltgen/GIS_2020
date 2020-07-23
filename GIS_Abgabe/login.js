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
        document.getElementById("anmelden")?.reset();
        let anfragenAntwort = await fetch(url); //url versenden
        /*-----------Name in Local storage---------------*/
        let extraQuery = query.toString();
        console.log(extraQuery);
        let extraTeil1 = extraQuery.split("&");
        let extraTeil2 = extraTeil1[0].split("=");
        console.log(extraTeil2[1]);
        let userName = extraTeil2[1];
        localStorage.setItem("Username", userName);
        /*---------------Antwort des server verarbeiten----------------*/
        let antwort = await anfragenAntwort.text(); //aus url text machen
        let antwortarry = antwort.split("&&"); // text an && spliten 
        if (antwortarry[1] == "true") {
            window.location.href = "chat.html";
        }
        else {
            alert("Uppsss!! User ist nicht vorhanden");
        }
    }
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=login.js.map