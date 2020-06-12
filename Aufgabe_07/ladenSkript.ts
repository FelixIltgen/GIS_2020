namespace Aufgabe7 {
    localStorage.clear();

    async function laden(_url: RequestInfo): Promise<void> {
        let rückgabe1: Response = await fetch(_url);
        let rückgabe2: JSON = await rückgabe1.json();
        artikel = JSON.parse(JSON.stringify(rückgabe2));
    }
    //Datenladen
    verzögern();
    async function verzögern(): Promise<void> {
        await laden("shopdaten.json");
        seiteladen();
    }
    // Seite laden
    function seiteladen(): void {
        let navigation: string[] = ["Natureller Sauerstoff", "Zum Inhalieren", "Mit Geschmack", "Mit Co<sub>2</sub>", "Alle"];

        for (let index: number = 0; index < navigation.length; index++) {
            let nav: HTMLAnchorElement = document.createElement("a");
            nav.innerHTML = navigation[index];
            document.getElementById("nav")?.appendChild(nav);
            nav.setAttribute("Navigation", index + "");
            nav.addEventListener("click", ausblenden);
        }
        //Artikel generieren
        for (let index: number = 0; index < artikel.length; index++) {

            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "inhalt" + index;

            switch (artikel[index].kategorie) {
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
            buy.addEventListener("click", datenSpeichern);
            buy.setAttribute("alt", index + "");
        }
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
    //Kategorien Ausblenden
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
    let counter: number = 0;
    function datenSpeichern(_event: Event): void {
        let speichern: string = (<HTMLDivElement>_event.target).getAttribute("alt")!;
        localStorage.setItem( counter + "", speichern);
        console.log(speichern);
        counter++;
    }

}
