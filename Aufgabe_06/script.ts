namespace Aufgabe6 {
    interface Artikel {

        name: string;
        img: string;
        preis: number;
        beschreibung: string;
        kategorie: number;
    }

    //Shop1(Naturel)
    let alpen: Artikel = { name: "Von den Alpen", img: "434039.png", preis: 19.99, beschreibung: "Direkt importiert aus der Schweiz.", kategorie: 1 };
    let bolivien: Artikel = { name: "Aus Bolivien", img: "gas2.png", preis: 25.99, beschreibung: "Mit leichtem Gras geruch.", kategorie: 1 };
    let everest: Artikel = { name: "Vom Mount Everest", img: "gas3.png", preis: 44.99, beschreibung: "Von ganz oben, sauberer gehts nicht.", kategorie: 1 };

    //Shop2(inhalierer)

    let klein: Artikel = { name: "10 Liter", img: "inhalator3.png", preis: 5.99, beschreibung: "Um gesund durch <br> den Tag zu kommen.", kategorie: 2 };
    let mittel: Artikel = { name: "30 Liter", img: "inhalator2.png", preis: 15.99, beschreibung: "Für den längeren Nutzen und für zwischen durch.", kategorie: 2 };
    let groß: Artikel = { name: "60 Liter", img: "inhalator1.png", preis: 30.99, beschreibung: "Damit überlebt ihr 2 Tage im brennenden Haus.", kategorie: 2 };

    //Shop3(inhalierer)
    let banane: Artikel = { name: "Banane", img: "banane.png", preis: 15.99, beschreibung: "Vollmundig im Geschmack <br> 100% natürlich.", kategorie: 3 };
    let kirsche: Artikel = { name: "Kirsche", img: "Kirsche.png", preis: 17.99, beschreibung: "Fast wie Mon Chéri <br> 100% natürlich.", kategorie: 3 };
    let kiwi: Artikel = { name: "Kiwi", img: "kiwi.png", preis: 19.99, beschreibung: "Schmeckt wie frisch gepflückt 100% natürlich.", kategorie: 3 };

    //Shop4(Mit Co2)

    let etwas: Artikel = { name: "Mit 20 %", img: "gas1.png", preis: 20.99, beschreibung: "Mit ca. 20% Co<sub>2</sub>, für den gewissen Kick nach der Arbeit.", kategorie: 4 };
    let wenig: Artikel = { name: "Mit 50 %", img: "gas2.png", preis: 35.99, beschreibung: "Mit ca. 50% Co<sub>2</sub>, nichts für schwache Nerven.", kategorie: 4 };
    let viel: Artikel = { name: "Mit 80 %", img: "gas3.png", preis: 55.99, beschreibung: "Mit ca. 80% Co<sub>2</sub>, für richtige Feuerwehrmänner.", kategorie: 4 };

    //Array  Mit Co2
    let artikel: Artikel[] = [etwas, wenig, viel, banane, kirsche, kiwi, klein, mittel, groß, alpen, bolivien, everest];
    let navigation: string[] = ["Natureller Sauerstoff", "Zum Inhalieren", "Mit Geschmack", "Mit Co<sub>2</sub>", "Alle"];

    for (let index: number = 0; index < navigation.length; index++) {
        let nav: HTMLAnchorElement = document.createElement("a");
        nav.innerHTML = navigation[index];
        document.getElementById("nav")?.appendChild(nav);
        nav.setAttribute("Navigation", index + "");
        nav.addEventListener("click", ausblenden);
    }

    function ausblenden(_event: Event): void {

        switch ((<HTMLDivElement>_event.target).getAttribute("Navigation")) {
            case "0":
                (<HTMLElement>document.getElementById("ü2")).style.display = "none";
                (<HTMLElement>document.getElementById("ü3")).style.display = "none";
                (<HTMLElement>document.getElementById("ü4")).style.display = "none";
                (<HTMLElement>document.getElementById("ü1")).style.display = "block";
                (<HTMLDivElement>document.getElementById("shop2")).style.display = "none";
                (<HTMLDivElement>document.getElementById("shop3")).style.display = "none";
                (<HTMLDivElement>document.getElementById("shop4")).style.display = "none";
                (<HTMLDivElement>document.getElementById("shop1")).style.display = "flex";

                break;
            case "1":
                (<HTMLElement>document.getElementById("ü1")).style.display = "none";
                (<HTMLElement>document.getElementById("ü3")).style.display = "none";
                (<HTMLElement>document.getElementById("ü4")).style.display = "none";
                (<HTMLElement>document.getElementById("ü2")).style.display = "block";
                (<HTMLDivElement>document.getElementById("shop1")).style.display = "none";
                (<HTMLDivElement>document.getElementById("shop3")).style.display = "none";
                (<HTMLDivElement>document.getElementById("shop4")).style.display = "none";
                (<HTMLDivElement>document.getElementById("shop2")).style.display = "flex";

                break;
            case "2":
                (<HTMLElement>document.getElementById("ü1")).style.display = "none";
                (<HTMLElement>document.getElementById("ü2")).style.display = "none";
                (<HTMLElement>document.getElementById("ü4")).style.display = "none";
                (<HTMLElement>document.getElementById("ü3")).style.display = "block";
                (<HTMLDivElement>document.getElementById("shop1")).style.display = "none";
                (<HTMLDivElement>document.getElementById("shop2")).style.display = "none";
                (<HTMLDivElement>document.getElementById("shop4")).style.display = "none";
                (<HTMLDivElement>document.getElementById("shop3")).style.display = "flex";

                break;
            case "3":
                (<HTMLElement>document.getElementById("ü1")).style.display = "none";
                (<HTMLElement>document.getElementById("ü3")).style.display = "none";
                (<HTMLElement>document.getElementById("ü2")).style.display = "none";
                (<HTMLElement>document.getElementById("ü4")).style.display = "block";
                (<HTMLDivElement>document.getElementById("shop1")).style.display = "none";
                (<HTMLDivElement>document.getElementById("shop3")).style.display = "none";
                (<HTMLDivElement>document.getElementById("shop2")).style.display = "none";
                (<HTMLDivElement>document.getElementById("shop4")).style.display = "flex";
                break;
            case "4":

                (<HTMLElement>document.getElementById("ü1")).style.display = "block";
                (<HTMLElement>document.getElementById("ü3")).style.display = "block";
                (<HTMLElement>document.getElementById("ü4")).style.display = "block";
                (<HTMLElement>document.getElementById("ü2")).style.display = "block";
                (<HTMLDivElement>document.getElementById("shop1")).style.display = "flex";
                (<HTMLDivElement>document.getElementById("shop3")).style.display = "flex";
                (<HTMLDivElement>document.getElementById("shop4")).style.display = "flex";
                (<HTMLDivElement>document.getElementById("shop2")).style.display = "flex";
                break;

            default:
                break;
        }
    }


    for (let index: number = 0; index < artikel.length; index++) {

        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "inhalt" + index;

        switch (artikel[index].kategorie) {
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

        let name: HTMLParagraphElement = document.createElement("h3");
        name.innerHTML = artikel[index].name;
        document.getElementById("inhalt" + index)?.appendChild(name);

        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = artikel[index].img;
        document.getElementById("inhalt" + index)?.appendChild(imgElement);

        let geld: HTMLParagraphElement = document.createElement("p");
        geld.innerHTML = artikel[index].preis + " Euro";
        geld.id = "test" + index;
        document.getElementById("inhalt" + index)?.appendChild(geld);


        let besch: HTMLParagraphElement = document.createElement("p");
        besch.innerHTML = artikel[index].beschreibung;
        document.getElementById("inhalt" + index)?.appendChild(besch);

        let buy: HTMLAnchorElement = document.createElement("a");
        buy.innerHTML = "kaufen";
        document.getElementById("inhalt" + index)?.appendChild(buy);
        buy.setAttribute("data-preistag", artikel[index].preis + "");
        buy.addEventListener("click", clickEvent);
    }


    //Warenkorb Counter
    let zaehler: number = 0;
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "count";
    let zähler: HTMLParagraphElement = document.createElement("p");
    zähler.id = "zahl";
    let summe: number = 0;

    function clickEvent(_event: Event): void {
        zaehler++;
        if (zaehler == 1) {

            document.getElementById("header")?.appendChild(newDiv);
            zähler.innerHTML = zaehler + "";
            document.getElementById("count")?.appendChild(zähler);
        }
        if (zaehler > 1) {
            zähler.innerHTML = zaehler + "";
        }
        let aElement: HTMLAnchorElement = _event.target as HTMLAnchorElement;
        let stringElement: string = aElement.dataset.preistag as string;
        summe = summe + parseFloat(stringElement);
        console.log(summe + " Euro");

    }
} 