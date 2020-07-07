"use strict";
var Aufgabe10;
(function (Aufgabe10) {
    document.getElementById("senden")?.addEventListener("click", versenden);
    document.getElementById("antwort")?.addEventListener("click", anzeigen);
    async function versenden() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis2020felix.herokuapp.com/";
        url += "/hinzufügen";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        document.getElementById("data")?.reset();
        await fetch(url);
    }
    async function anzeigen() {
        let url = "https://gis2020felix.herokuapp.com/";
        url += "/anzeigen";
        let response = await fetch(url);
        let response2 = await response.text();
        document.getElementById("inhalt").innerHTML = response2;
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=script.js.map