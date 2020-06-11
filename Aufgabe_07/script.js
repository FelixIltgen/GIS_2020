"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    async function l(_url) {
        let rückgabe1 = await fetch(_url);
        let rückgabe2 = await rückgabe1.json();
        Aufgabe7.artikel = JSON.parse(JSON.stringify(rückgabe2));
    }
    Aufgabe7.l = l;
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=script.js.map