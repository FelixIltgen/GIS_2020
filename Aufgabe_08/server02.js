"use strict";
var Aufgabe8;
(function (Aufgabe8) {
    document.getElementById("derKnopf")?.addEventListener("click", buttonklick);
    async function verbindung(_url) {
        console.log("dsf");
        let test = await fetch(_url, { method: "get" });
        let test2 = await test.text();
        console.log(test2);
    }
    function buttonklick() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis2020felix.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        verbindung(url);
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=server02.js.map