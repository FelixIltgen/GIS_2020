"use strict";
var Aufgabe9;
(function (Aufgabe9) {
    document.getElementById("hButton")?.addEventListener("click", htmlButton);
    document.getElementById("jButton")?.addEventListener("click", jsonButton);
    function senden() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis2020felix.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        return url;
    }
    async function jsonButton() {
        AusgabeInConsole(await teiler(senden()));
    }
    async function htmlButton() {
        AusgabeInHtml(await teiler(senden()));
    }
    function AusgabeInHtml(_arraysplit) {
        document.getElementById("inhalt").innerHTML = _arraysplit[0];
    }
    function AusgabeInConsole(_arraysplit) {
        let ausgabe = JSON.parse(_arraysplit[1]);
        console.log(ausgabe);
    }
    async function teiler(_url) {
        let response = await fetch(_url);
        let response2 = await response.text();
        let arrayrequest = response2.split("$$$");
        return arrayrequest;
    }
})(Aufgabe9 || (Aufgabe9 = {}));
https: ; //gis2020felix.herokuapp.com/
//# sourceMappingURL=htmlscript.js.map