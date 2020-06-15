"use strict";
var Aufgabe5;
(function (Aufgabe5) {
    //Shop1(Naturel)
    let alpen = { name: "Von den Alpen", img: "434039.png", preis: "19,99 Euro", beschreibung: "Direkt importiert aus der Schweiz." };
    let bolivien = { name: "Aus Bolivien", img: "gas2.png", preis: "25,99 Euro", beschreibung: "Mit leichtem Gras geruch." };
    let everest = { name: "Vom Mount Everest", img: "gas3.png", preis: "44,99 Euro", beschreibung: "Von ganz oben, sauberer gehts nicht." };
    //Array Naturel
    let naturel = [alpen, bolivien, everest];
    //Shop2(inhalierer)
    let klein = { name: "10 Liter", img: "inhalator3.png", preis: "5,99 Euro", beschreibung: "Um gesund durch <br> den Tag zu kommen." };
    let mittel = { name: "30 Liter", img: "inhalator2.png", preis: "15,99 Euro", beschreibung: "Für den längeren Nutzen und für zwischen durch." };
    let groß = { name: "60 Liter", img: "inhalator1.png", preis: "30,99 Euro", beschreibung: "Damit überlebt ihr 2 Tage im brennenden Haus." };
    // Array Inhalier
    let inhalier = [klein, mittel, groß];
    //Shop3(inhalierer)
    let banane = { name: "Banane", img: "banane.png", preis: "15,99 Euro", beschreibung: "Vollmundig im Geschmack <br> 100% natürlich." };
    let kirsche = { name: "Kirsche", img: "Kirsche.png", preis: "17,99 Euro", beschreibung: "Fast wie Mon Chéri <br> 100% natürlich." };
    let kiwi = { name: "Kiwi", img: "kiwi.png", preis: "19,99 Euro", beschreibung: "Schmeckt wie frisch gepflückt 100% natürlich." };
    //Array MitGeschmack
    let mitGeschmack = [banane, kirsche, kiwi];
    //Shop4(Mit Co2)
    let etwas = { name: "Mit 20 %", img: "gas1.png", preis: "20,99 Euro", beschreibung: "Mit ca. 20% Co<sub>2</sub>, für den gewissen Kick nach der Arbeit." };
    let wenig = { name: "Mit 50 %", img: "gas2.png", preis: "35,99 Euro", beschreibung: "Mit ca. 50% Co<sub>2</sub>, nichts für schwache Nerven." };
    let viel = { name: "Mit 80 %", img: "gas3.png", preis: "55,99 Euro", beschreibung: "Mit ca. 80% Co<sub>2</sub>, für richtige Feuerwehrmänner." };
    //Array  Mit Co2
    let mitCo2 = [etwas, wenig, viel];
    //Natur
    for (let index = 0; index < naturel.length; index++) {
        let newDiv = document.createElement("div");
        newDiv.id = "inhalt" + index;
        document.getElementById("shop1")?.appendChild(newDiv);
        let nombre = document.createElement("h3");
        nombre.innerHTML = naturel[index].name;
        document.getElementById("inhalt" + index)?.appendChild(nombre);
        let imgElement = document.createElement("img");
        imgElement.src = naturel[index].img;
        document.getElementById("inhalt" + index)?.appendChild(imgElement);
        let geld = document.createElement("p");
        geld.innerHTML = naturel[index].preis;
        geld.id = "test" + index;
        document.getElementById("inhalt" + index)?.appendChild(geld);
        let besch = document.createElement("p");
        besch.innerHTML = naturel[index].beschreibung;
        document.getElementById("inhalt" + index)?.appendChild(besch);
        let buy = document.createElement("a");
        buy.innerHTML = "kaufen";
        document.getElementById("inhalt" + index)?.appendChild(buy);
    }
    //Inhalierer
    for (let index = 0; index < inhalier.length; index++) {
        let newDiv = document.createElement("div");
        newDiv.id = "inhalt2" + index;
        document.getElementById("shop2")?.appendChild(newDiv);
        let nombre = document.createElement("h3");
        nombre.innerHTML = inhalier[index].name;
        document.getElementById("inhalt2" + index)?.appendChild(nombre);
        let imgElement = document.createElement("img");
        imgElement.src = inhalier[index].img;
        document.getElementById("inhalt2" + index)?.appendChild(imgElement);
        let geld = document.createElement("p");
        geld.innerHTML = inhalier[index].preis;
        geld.id = "test" + index;
        document.getElementById("inhalt2" + index)?.appendChild(geld);
        let besch = document.createElement("p");
        besch.innerHTML = inhalier[index].beschreibung;
        document.getElementById("inhalt2" + index)?.appendChild(besch);
        let buy = document.createElement("a");
        buy.innerHTML = "kaufen";
        document.getElementById("inhalt2" + index)?.appendChild(buy);
    }
    //Mit Geschmack
    for (let index = 0; index < mitGeschmack.length; index++) {
        let newDiv = document.createElement("div");
        newDiv.id = "inhalt3" + index;
        document.getElementById("shop3")?.appendChild(newDiv);
        let nombre = document.createElement("h3");
        nombre.innerHTML = mitGeschmack[index].name;
        document.getElementById("inhalt3" + index)?.appendChild(nombre);
        let imgElement = document.createElement("img");
        imgElement.src = mitGeschmack[index].img;
        document.getElementById("inhalt3" + index)?.appendChild(imgElement);
        let geld = document.createElement("p");
        geld.innerHTML = mitGeschmack[index].preis;
        geld.id = "test" + index;
        document.getElementById("inhalt3" + index)?.appendChild(geld);
        let besch = document.createElement("p");
        besch.innerHTML = mitGeschmack[index].beschreibung;
        document.getElementById("inhalt3" + index)?.appendChild(besch);
        let buy = document.createElement("a");
        buy.innerHTML = "kaufen";
        document.getElementById("inhalt3" + index)?.appendChild(buy);
    }
    //Mit CO2
    for (let index = 0; index < mitCo2.length; index++) {
        let newDiv = document.createElement("div");
        newDiv.id = "inhalt4" + index;
        document.getElementById("shop4")?.appendChild(newDiv);
        let nombre = document.createElement("h3");
        nombre.innerHTML = mitCo2[index].name;
        document.getElementById("inhalt4" + index)?.appendChild(nombre);
        let imgElement = document.createElement("img");
        imgElement.src = mitCo2[index].img;
        document.getElementById("inhalt4" + index)?.appendChild(imgElement);
        let geld = document.createElement("p");
        geld.innerHTML = mitCo2[index].preis;
        geld.id = "test" + index;
        document.getElementById("inhalt4" + index)?.appendChild(geld);
        let besch = document.createElement("p");
        besch.innerHTML = mitCo2[index].beschreibung;
        document.getElementById("inhalt4" + index)?.appendChild(besch);
        let buy = document.createElement("a");
        buy.innerHTML = "kaufen";
        document.getElementById("inhalt4" + index)?.appendChild(buy);
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=script.js.map