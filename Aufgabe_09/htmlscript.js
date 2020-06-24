"use strict";
var Aufgabe8;
(function (Aufgabe8) {
    document.getElementById("HtmlKnopf")?.addEventListener("click", ausgabeHtml);
    document.getElementById("JasonKnopf")?.addEventListener("click", ausgabeJason);
    function send() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis2020felix.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        return (url);
    }
    async function ausgabeJason() {
        conAusgabe(await teiler(send()));
    }
    async function ausgabeHtml() {
        ausHtml(await teiler(send()));
    }
    function ausHtml(_arrayteiler) {
        document.getElementById("Inhalt").innerHTML = _arrayteiler[0];
    }
    function conAusgabe(_arrayteiler) {
        let ausgabe = JSON.parse(_arrayteiler[1]);
        console.log(ausgabe);
    }
    async function teiler(_url) {
        let response = await fetch(_url);
        let response2 = await response.text();
        let arrayrequest = response2.split("$$$");
        return arrayrequest;
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=htmlscript.js.map