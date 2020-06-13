"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    async function laden(_url) {
        let rückgabe1 = await fetch(_url);
        let rückgabe2 = await rückgabe1.json();
        Aufgabe7.artikel = JSON.parse(JSON.stringify(rückgabe2));
    }
    verzögern();
    async function verzögern() {
        await laden("shopdaten.json");
        seiteladenWare();
    }
    function seiteladenWare() {
        let summe = 0;
        let allesLösch = document.createElement("a");
        let anzeigeWert = document.createElement("p");
        for (let index = 0; index < localStorage.length; index++) {
            //console.log(localStorage.getItem(index + "")!);
            let newDiv = document.createElement("div");
            newDiv.id = "inhalt" + index;
            document.getElementById("korb")?.appendChild(newDiv);
            let name = document.createElement("h3");
            name.innerHTML = Aufgabe7.artikel[parseInt(localStorage.getItem(index + ""))].name;
            document.getElementById("inhalt" + index)?.appendChild(name);
            let imgElement = document.createElement("img");
            imgElement.src = Aufgabe7.artikel[parseInt(localStorage.getItem(index + ""))].img;
            document.getElementById("inhalt" + index)?.appendChild(imgElement);
            let geld = document.createElement("p");
            geld.innerHTML = Aufgabe7.artikel[parseInt(localStorage.getItem(index + ""))].preis + " Euro";
            geld.id = "test" + index;
            document.getElementById("inhalt" + index)?.appendChild(geld);
            let besch = document.createElement("p");
            besch.innerHTML = Aufgabe7.artikel[parseInt(localStorage.getItem(index + ""))].beschreibung;
            document.getElementById("inhalt" + index)?.appendChild(besch);
            let löschen = document.createElement("a");
            löschen.innerHTML = "löschen";
            document.getElementById("inhalt" + index)?.appendChild(löschen);
            löschen.setAttribute("data-preistag", Aufgabe7.artikel[parseInt(localStorage.getItem(index + ""))].preis + "");
            löschen.addEventListener("click", produktlöschen);
            löschen.setAttribute("lösch", index + "");
        }
        function produktlöschen(_event) {
            let löschen = _event.target.getAttribute("lösch");
            localStorage.removeItem(löschen);
            document.getElementById("inhalt" + löschen).remove();
            summe = 0;
            anzeigeWert.innerHTML = "Der Gesamtwert beträgt: " + preisGenerieren() + " Euro";
        }
        if (localStorage.length >= 1) {
            allesLösch.innerHTML = "Alles Löschen";
            allesLösch.id = "allesButton";
            document.getElementById("secHeader")?.appendChild(allesLösch);
            allesLösch.addEventListener("click", alleProdukteLöschen);
            anzeigeWert.innerHTML = "Der Gesamtwert beträgt: " + preisGenerieren() + " Euro";
            anzeigeWert.id = "wertAnzeige";
            document.getElementById("secHeader")?.appendChild(anzeigeWert);
        }
        function alleProdukteLöschen(_event) {
            for (let index = 0; index < localStorage.length; index++) {
                let löschen = _event.target.getAttribute("lösch");
                console.log(löschen);
                document.getElementById("inhalt" + index).remove();
            }
            localStorage.clear();
            summe = 0;
            anzeigeWert.innerHTML = "Der Gesamtwert beträgt: " + summe + " Euro";
        }
        function preisGenerieren() {
            for (let index = 0; index < localStorage.length; index++) {
                summe += Aufgabe7.artikel[parseInt(localStorage.getItem(index + ""))].preis;
            }
            console.log(summe);
            return summe;
        }
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=warenkorbskript.js.map