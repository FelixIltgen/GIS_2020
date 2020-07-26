namespace Abgabe {

    interface Nachrichten {
        user: string;
        nachricht: string;
        chat: number;
    }
//Username in Div anzeigen
    let userName: string = localStorage.getItem("Username")!;
    let chatNummer: number;

    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "profilll";
    newDiv.innerHTML = "Willkommen: " + userName;
    document.getElementById("nav")?.appendChild(newDiv);

//Chat Generieren
    let nachricht: Nachrichten[] = [];

    function chatGenerieren(): void {

        for (let index: number = 0; index < nachricht.length; index++) {
            let newDiv: HTMLDivElement = document.createElement("div");
            newDiv.className = "nachrichten";
            newDiv.id = "nachrichten" + index;
            newDiv.innerHTML = nachricht[index].user + " " + nachricht[index].nachricht;

            if (nachricht[index].chat == chatNummer) {
                document.getElementById("chat")?.appendChild(newDiv);
            }
        }
    }


//Nachrichten Schreiben 
    document.getElementById("senden")?.addEventListener("click", abSenden);

    async function abSenden(): Promise<void> {


        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis2020felix.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/neueNachricht";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let userNachricht: string = query.toString();
        url = url + "?";
        (<HTMLFormElement>document.getElementById("registrieren"))?.reset();


        let nachrichtInhalt: string[] = userNachricht.split("=");
        let abc: Nachrichten = { user: userName, nachricht: nachrichtInhalt[1], chat: chatNummer };
        //let abcString: string = JSON.stringify(abc); 
        url = url + abc.user + "\"" + abc.nachricht + "\"" + abc.chat;

        await fetch(url);
        await nachrichtenLaden();
        
        divLöschen();
        chatGenerieren();
    }
//Nachrichten Div löschen
    function divLöschen(): void {
        for (let index: number = 0; index < nachricht.length; index++) {
            document.getElementById("nachrichten" + index)?.remove();
        }
    }
 //Wechsel zwischen Chats 
    document.getElementById("chatroom1")?.addEventListener("click", chatWechsel1);
    document.getElementById("chatroom2")?.addEventListener("click", chatWechsel2);

    async function chatWechsel1(): Promise<void> {
        if (localStorage.getItem("Username") != null) {
            chatNummer = 1;
            await nachrichtenLaden();
            divLöschen();
            chatGenerieren();
        } else {
            alert("sooooooooooooooo nicht");
        }
    }
    async function chatWechsel2(): Promise<void> {

        if (localStorage.getItem("Username") != null) {
            chatNummer = 2;
            await nachrichtenLaden();
            divLöschen();
            chatGenerieren();
        } else {
            alert("sooooooooooooooo nicht");
        }
    }
//Abmelden
    document.getElementById("abmelden")?.addEventListener("click", abmelden);

    function abmelden(): void {
        localStorage.clear();
        window.location.href = "login.html";
    }
//nachrichten aus DB laden
    async function nachrichtenLaden(): Promise<void> {

        let url: string = "https://gis2020felix.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/nachrichtenLaden";
        let dbNachrichten: Response = await fetch(url);
        let dbNachrichten2: string = await dbNachrichten.text();
        nachricht = JSON.parse(dbNachrichten2);
    }
}