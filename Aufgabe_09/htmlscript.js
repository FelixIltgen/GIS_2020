"use strict";
var Aufgabe9;
(function (Aufgabe9) {
    document.getElementById("hButton")?.addEventListener("click", ausgabe);
    document.getElementById("jButton")?.addEventListener("click", ausgabe);
    function ausgabe(_event) {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis2020felix.herokuapp.com/" + _event.target.getAttribute("id");
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        //Wenn Button (Als HTML) gedrückt wird
        if (_event.target.getAttribute("id") == "hbutton") {
            htmlausgabe(url);
        }
        // Wenn Button (Als JSON) gedrückt wird
        else if (_event.target.getAttribute("id") == "jbutton") {
            consolausgabe(url);
        }
    }
    async function consolausgabe(_url) {
        let rückgabe = await fetch(_url);
        let rückgabe2 = await rückgabe.text();
        let inhalt = JSON.parse(rückgabe2);
        console.log(inhalt);
    }
    async function htmlausgabe(_url) {
        let rückgabe = await fetch(_url);
        let rückgabe2 = await rückgabe.text();
        document.getElementById("inhalt").innerHTML = rückgabe2;
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=htmlscript.js.map