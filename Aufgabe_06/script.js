"use strict";
var Aufgabe6;
(function (Aufgabe6) {
    //Shop1(Naturel)
    let alpen = { name: "Von den Alpen", img: "434039.png", preis: 19.99, beschreibung: "Direkt importiert aus der Schweiz.", kategorie: 1 };
    let bolivien = { name: "Aus Bolivien", img: "gas2.png", preis: 25.99, beschreibung: "Mit leichtem Gras geruch.", kategorie: 1 };
    let everest = { name: "Vom Mount Everest", img: "gas3.png", preis: 44.99, beschreibung: "Von ganz oben, sauberer gehts nicht.", kategorie: 1 };
    //Shop2(inhalierer)
    let klein = { name: "10 Liter", img: "inhalator3.png", preis: 5.99, beschreibung: "Um gesund durch <br> den Tag zu kommen.", kategorie: 2 };
    let mittel = { name: "30 Liter", img: "inhalator2.png", preis: 15.99, beschreibung: "Für den längeren Nutzen und für zwischen durch.", kategorie: 2 };
    let groß = { name: "60 Liter", img: "inhalator1.png", preis: 30.99, beschreibung: "Damit überlebt ihr 2 Tage im brennenden Haus.", kategorie: 2 };
    //Shop3(inhalierer)
    let banane = { name: "Banane", img: "banane.png", preis: 15.99, beschreibung: "Vollmundig im Geschmack <br> 100% natürlich.", kategorie: 3 };
    let kirsche = { name: "Kirsche", img: "Kirsche.png", preis: 17.99, beschreibung: "Fast wie Mon Chéri <br> 100% natürlich.", kategorie: 3 };
    let kiwi = { name: "Kiwi", img: "kiwi.png", preis: 19.99, beschreibung: "Schmeckt wie frisch gepflückt 100% natürlich.", kategorie: 3 };
    //Shop4(Mit Co2)
    let etwas = { name: "Mit 20 %", img: "gas1.png", preis: 20.99, beschreibung: "Mit ca. 20% Co<sub>2</sub>, für den gewissen Kick nach der Arbeit.", kategorie: 4 };
    let wenig = { name: "Mit 50 %", img: "gas2.png", preis: 35.99, beschreibung: "Mit ca. 50% Co<sub>2</sub>, nichts für schwache Nerven.", kategorie: 4 };
    let viel = { name: "Mit 80 %", img: "gas3.png", preis: 55.99, beschreibung: "Mit ca. 80% Co<sub>2</sub>, für richtige Feuerwehrmänner.", kategorie: 4 };
    //Array  Mit Co2
    let baumhaus = [etwas, wenig, viel, banane, kirsche, kiwi, klein, mittel, groß, alpen, bolivien, everest];
    let navigation = ["Natureller Sauerstoff", "Zum Inhalieren", "Mit Geschmack", "Mit Co<sub>2</sub>", "Alle"];
    for (let index = 0; index < navigation.length; index++) {
        let nav = document.createElement("a");
        nav.innerHTML = navigation[index];
        document.getElementById("nav")?.appendChild(nav);
        nav.setAttribute("Navigation", index + "");
        nav.addEventListener("click", ausblenden);
    }
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
    for (let index = 0; index < baumhaus.length; index++) {
        let newDiv = document.createElement("div");
        newDiv.id = "inhalt" + index;
        switch (baumhaus[index].kategorie) {
            case 1:
                document.getElementById("shop1")?.appendChild(newDiv);
                break;
            case 2:
                document.getElementById("shop2")?.appendChild(newDiv);
                break;
            case 3:
                document.getElementById("shop3")?.appendChild(newDiv);
                break;
            case 4:
                document.getElementById("shop4")?.appendChild(newDiv);
                break;
            default:
                break;
        }
        let name = document.createElement("h3");
        name.innerHTML = baumhaus[index].name;
        document.getElementById("inhalt" + index)?.appendChild(name);
        let imgElement = document.createElement("img");
        imgElement.src = baumhaus[index].img;
        document.getElementById("inhalt" + index)?.appendChild(imgElement);
        let geld = document.createElement("p");
        geld.innerHTML = baumhaus[index].preis + " Euro";
        geld.id = "test" + index;
        document.getElementById("inhalt" + index)?.appendChild(geld);
        let besch = document.createElement("p");
        besch.innerHTML = baumhaus[index].beschreibung;
        document.getElementById("inhalt" + index)?.appendChild(besch);
        let buy = document.createElement("a");
        buy.innerHTML = "kaufen";
        document.getElementById("inhalt" + index)?.appendChild(buy);
        buy.setAttribute("data-karl", baumhaus[index].preis + "");
        buy.addEventListener("click", test69);
    }
    //Warenkorb Counter
    let zaehler = 0;
    let newDiv = document.createElement("div");
    newDiv.id = "count";
    let zähler = document.createElement("p");
    zähler.id = "zahl";
    let summe = 0;
    function test69(_event) {
        zaehler++;
        if (zaehler == 1) {
            document.getElementById("header")?.appendChild(newDiv);
            zähler.innerHTML = zaehler + "";
            document.getElementById("count")?.appendChild(zähler);
        }
        if (zaehler > 1) {
            zähler.innerHTML = zaehler + "";
        }
        let irgendwas = _event.target;
        let irgendwas2 = irgendwas.dataset.karl;
        summe = summe + parseFloat(irgendwas2);
        console.log(summe + " Euro");
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=script.js.map