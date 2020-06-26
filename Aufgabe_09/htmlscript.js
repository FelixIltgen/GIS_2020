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
    function AusgabeInConsole(arrayteiler) {
        let ausgabe = JSON.parse(arrayteiler[1]);
        console.log(ausgabe);
    }
    async function htmlButton() {
        AusgabeInHtml(await teiler(senden()));
    }
    function AusgabeInHtml(arrayteiler) {
        document.getElementById("inhalt").innerHTML = arrayteiler[0];
    }
    async function teiler(_url) {
        let rückgabe = await fetch(_url);
        let rückgabe2 = await rückgabe.text();
        let arrayrequest = rückgabe2.split("$$$");
        return arrayrequest;
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=htmlscript.js.map