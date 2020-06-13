namespace Aufgabe7 {

    async function laden(_url: RequestInfo): Promise<void> {
        let rückgabe1: Response = await fetch(_url);
        let rückgabe2: JSON = await rückgabe1.json();
        artikel = JSON.parse(JSON.stringify(rückgabe2));
    }

    verzögern();
    async function verzögern(): Promise<void> {
        await laden("shopdaten.json");
        seiteladenWare();
    }
    function seiteladenWare(): void {
        let summe: number = 0;
        let allesLösch: HTMLAnchorElement = document.createElement("a");
        let anzeigeWert: HTMLParagraphElement = document.createElement("p");

        for (let index: number = 0; index < localStorage.length; index++) {
            //console.log(localStorage.getItem(index + "")!);

            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.id = "inhalt" + index;
            document.getElementById("korb")?.appendChild(newDiv);

            let name: HTMLParagraphElement = document.createElement("h3");
            name.innerHTML = artikel[parseInt(localStorage.getItem(index + "")!)].name;
            document.getElementById("inhalt" + index)?.appendChild(name);

            let imgElement: HTMLImageElement = document.createElement("img");
            imgElement.src = artikel[parseInt(localStorage.getItem(index + "")!)].img;
            document.getElementById("inhalt" + index)?.appendChild(imgElement);

            let geld: HTMLParagraphElement = document.createElement("p");
            geld.innerHTML = artikel[parseInt(localStorage.getItem(index + "")!)].preis + " Euro";
            geld.id = "test" + index;
            document.getElementById("inhalt" + index)?.appendChild(geld);


            let besch: HTMLParagraphElement = document.createElement("p");
            besch.innerHTML = artikel[parseInt(localStorage.getItem(index + "")!)].beschreibung;
            document.getElementById("inhalt" + index)?.appendChild(besch);

            let löschen: HTMLAnchorElement = document.createElement("a");
            löschen.innerHTML = "löschen";
            document.getElementById("inhalt" + index)?.appendChild(löschen);
            löschen.setAttribute("data-preistag", artikel[parseInt(localStorage.getItem(index + "")!)].preis + "");
            löschen.addEventListener("click", produktlöschen);
            löschen.setAttribute("lösch", index + "");
        }

        function produktlöschen(_event: Event): void {
            let löschen: string = (<HTMLAnchorElement>_event.target).getAttribute("lösch")!;
            localStorage.removeItem(löschen);
            (<HTMLDivElement>document.getElementById("inhalt" + löschen)).remove();
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

        function alleProdukteLöschen(_event: Event): void {
           
            for (let index: number = 0; index < localStorage.length; index++) {
          
                let löschen: string = (<HTMLAnchorElement>_event.target).getAttribute("lösch")!;
              
                
                console.log(löschen);
                (<HTMLDivElement>document.getElementById("inhalt" + index)).remove();
            }
            localStorage.clear();
            summe = 0;
            anzeigeWert.innerHTML = "Der Gesamtwert beträgt: " + summe + " Euro";
        }
        
        function preisGenerieren(): number {
            for (let index: number = 0; index < localStorage.length; index++) {
                summe += artikel[parseInt(localStorage.getItem(index + "")!)].preis;   
            }
            console.log(summe);
            return summe;
        }   
    }
}