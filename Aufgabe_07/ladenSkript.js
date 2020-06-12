"use strict";
var Aufgabe7;
(function (Aufgabe7) {
    async function laden(_url) {
        let rückgabe1 = await fetch(_url);
        let rückgabe2 = await rückgabe1.json();
        Aufgabe7.artikel = JSON.parse(JSON.stringify(rückgabe2));
    }
    //Datenladen
    verzögern();
    async function verzögern() {
        await laden("shopdaten.json");
        seiteladen();
    }
    // Seite laden
    function seiteladen() {
        let navigation = ["Natureller Sauerstoff", "Zum Inhalieren", "Mit Geschmack", "Mit Co<sub>2</sub>", "Alle"];
        for (let index = 0; index < navigation.length; index++) {
            let nav = document.createElement("a");
            nav.innerHTML = navigation[index];
            document.getElementById("nav")?.appendChild(nav);
            nav.setAttribute("Navigation", index + "");
            nav.addEventListener("click", ausblenden);
        }
        //Artikel generieren
        for (let index = 0; index < Aufgabe7.artikel.length; index++) {
            let newDiv = document.createElement("div");
            newDiv.id = "inhalt" + index;
            switch (Aufgabe7.artikel[index].kategorie) {
                case "natur":
                    document.getElementById("shop1")?.appendChild(newDiv);
                    break;
                case "inhalier":
                    document.getElementById("shop2")?.appendChild(newDiv);
                    break;
                case "frucht":
                    document.getElementById("shop3")?.appendChild(newDiv);
                    break;
                case "co2":
                    document.getElementById("shop4")?.appendChild(newDiv);
                    break;
                default:
                    break;
            }
            let name = document.createElement("h3");
            name.innerHTML = Aufgabe7.artikel[index].name;
            document.getElementById("inhalt" + index)?.appendChild(name);
            let imgElement = document.createElement("img");
            imgElement.src = Aufgabe7.artikel[index].img;
            document.getElementById("inhalt" + index)?.appendChild(imgElement);
            let geld = document.createElement("p");
            geld.innerHTML = Aufgabe7.artikel[index].preis + " Euro";
            geld.id = "test" + index;
            document.getElementById("inhalt" + index)?.appendChild(geld);
            let besch = document.createElement("p");
            besch.innerHTML = Aufgabe7.artikel[index].beschreibung;
            document.getElementById("inhalt" + index)?.appendChild(besch);
            let buy = document.createElement("a");
            buy.innerHTML = "kaufen";
            document.getElementById("inhalt" + index)?.appendChild(buy);
            buy.setAttribute("data-preistag", Aufgabe7.artikel[index].preis + "");
            buy.addEventListener("click", clickEvent);
            buy.addEventListener("click", datenSpeichern);
        }
    }
    //Warenkorb Counter
    let zaehler = 0;
    let newDiv = document.createElement("div");
    newDiv.id = "count";
    let zähler = document.createElement("p");
    zähler.id = "zahl";
    let summe = 0;
    function clickEvent(_event) {
        zaehler++;
        if (zaehler == 1) {
            document.getElementById("header")?.appendChild(newDiv);
            zähler.innerHTML = zaehler + "";
            document.getElementById("count")?.appendChild(zähler);
        }
        if (zaehler > 1) {
            zähler.innerHTML = zaehler + "";
        }
        let aElement = _event.target;
        let stringElement = aElement.dataset.preistag;
        summe = summe + parseFloat(stringElement);
        console.log(summe + " Euro");
    }
    //Kategorien Ausblenden
    function ausblenden(_event) {
        switch (_event.target.getAttribute("Navigation")) {
            case "0":
                document.getElementById("ü2").style.display = "none";
                document.getElementById("ü3").style.display = "none";
                document.getElementById("ü4").style.display = "none";
                document.getElementById("ü1").style.display = "block";
                document.getElementById("shop2").style.display = "none";
                document.getElementById("shop3").style.display = "none";
                document.getElementById("shop4").style.display = "none";
                document.getElementById("shop1").style.display = "flex";
                break;
            case "1":
                document.getElementById("ü1").style.display = "none";
                document.getElementById("ü3").style.display = "none";
                document.getElementById("ü4").style.display = "none";
                document.getElementById("ü2").style.display = "block";
                document.getElementById("shop1").style.display = "none";
                document.getElementById("shop3").style.display = "none";
                document.getElementById("shop4").style.display = "none";
                document.getElementById("shop2").style.display = "flex";
                break;
            case "2":
                document.getElementById("ü1").style.display = "none";
                document.getElementById("ü2").style.display = "none";
                document.getElementById("ü4").style.display = "none";
                document.getElementById("ü3").style.display = "block";
                document.getElementById("shop1").style.display = "none";
                document.getElementById("shop2").style.display = "none";
                document.getElementById("shop4").style.display = "none";
                document.getElementById("shop3").style.display = "flex";
                break;
            case "3":
                document.getElementById("ü1").style.display = "none";
                document.getElementById("ü3").style.display = "none";
                document.getElementById("ü2").style.display = "none";
                document.getElementById("ü4").style.display = "block";
                document.getElementById("shop1").style.display = "none";
                document.getElementById("shop3").style.display = "none";
                document.getElementById("shop2").style.display = "none";
                document.getElementById("shop4").style.display = "flex";
                break;
            case "4":
                document.getElementById("ü1").style.display = "block";
                document.getElementById("ü3").style.display = "block";
                document.getElementById("ü4").style.display = "block";
                document.getElementById("ü2").style.display = "block";
                document.getElementById("shop1").style.display = "flex";
                document.getElementById("shop3").style.display = "flex";
                document.getElementById("shop4").style.display = "flex";
                document.getElementById("shop2").style.display = "flex";
                break;
            default:
                break;
        }
    }
    function datenSpeichern(_event) {
        localStorage.setItem("kategorie", "test");
        localStorage.setItem("kategorie1", "sssoooo");
        console.log(localStorage.getItem("kategorie1"));
    }
    console.log(localStorage.getItem("kategorie"));
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=ladenSkript.js.map