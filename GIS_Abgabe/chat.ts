namespace Abgabe {
    /*--------------Nachrichten Generieren-----*/
    interface Nachrichten {
        user: string;
        nachricht: string;
        chat: number;
    }
    while (window.open) {
        location.reload();


        let username: string = localStorage.getItem("Username")!;
        let chatnummer: number;

        let newDiv: HTMLDivElement = document.createElement("div");
        newDiv.id = "profilll";
        newDiv.innerHTML = "Willkommen: " + username;
        document.getElementById("nav")?.appendChild(newDiv);

        let nachricht: Nachrichten[] = [];

        function chatgenerieren(): void {

            for (let index: number = 0; index < nachricht.length; index++) {
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.className = "nachrichten";
                newDiv.id = "nachrichten" + index;
                newDiv.innerHTML = nachricht[index].user + " " + nachricht[index].nachricht;

                if (nachricht[index].chat == chatnummer) {
                    document.getElementById("chat")?.appendChild(newDiv);
                }
            }


        }


        /*----------Nachrichten schreiben----------*/

        document.getElementById("senden")?.addEventListener("click", abSenden);

        async function abSenden(): Promise<void> {


            let formData: FormData = new FormData(document.forms[0]);
            let url: string = "https://gis2020felix.herokuapp.com";
            //let url: string = "http://localhost:8100";
            url += "/neueNachricht";
            // tslint:disable-next-line: no-any
            let query: URLSearchParams = new URLSearchParams(<any>formData);
            let usernachricht: string = query.toString();
            url = url + "?";
            console.log(url);
            (<HTMLFormElement>document.getElementById("registrieren"))?.reset();


            let nachrichtinhalt: string[] = usernachricht.split("=");
            let abc: Nachrichten = { user: username, nachricht: nachrichtinhalt[1], chat: chatnummer };
            //let abcString: string = JSON.stringify(abc); 
            console.log(abc);
            url = url + abc.user + "\"" + abc.nachricht + "\"" + abc.chat;
            console.log(url);

            await fetch(url);
            await nachrichtenLaden();

            divLöschen();
            chatgenerieren();


        }
        function divLöschen(): void {
            for (let index: number = 0; index < nachricht.length; index++) {
                document.getElementById("nachrichten" + index)?.remove();

            }
        }

        /*---------------Chat Auswahl--------------*/
        document.getElementById("chatroom1")?.addEventListener("click", chatWechsel1);
        document.getElementById("chatroom2")?.addEventListener("click", chatWechsel2);

        async function chatWechsel1(): Promise<void> {
            if (localStorage.getItem("Username") != null) {
                chatnummer = 1;
                await nachrichtenLaden();
                divLöschen();
                chatgenerieren();
            } else {
                alert("so nichttttt");
            }
        }
        async function chatWechsel2(): Promise<void> {

            if (localStorage.getItem("Username") != null) {
                chatnummer = 2;
                await nachrichtenLaden();
                divLöschen();
                chatgenerieren();
            } else {
                alert("sooooooooooooooo nicht");
            }
        }
        /*------------Abmelden-------------------*/
        document.getElementById("abmelden")?.addEventListener("click", abmelden);

        function abmelden(): void {
            localStorage.clear();
            window.location.href = "login.html";
        }
        /*--------asdadsd---------*/
        async function nachrichtenLaden(): Promise<void> {

            let url: string = "https://gis2020felix.herokuapp.com";
            //let url: string = "http://localhost:8100";
            url += "/nachrichtenLaden";
            let dbNachrichten: Response = await fetch(url);
            let dbNachrichten2: string = await dbNachrichten.text();
            nachricht = JSON.parse(dbNachrichten2);
        }






    }
}