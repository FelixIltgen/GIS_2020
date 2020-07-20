namespace Abgabe {
    /*--------------Nachrichten Generieren-----*/
    interface Nachrichten {
        user: string;
        nachricht: string;
        chat: number;
    }
    let username: string = "Felix: ";
    let chatnummer: number;

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

    function abSenden(): void {

        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let usernachricht: string = query.toString();
        let nachrichtinhalt: string[] = usernachricht.split("=");
        let abc: Nachrichten = { user: username, nachricht: nachrichtinhalt[1], chat: chatnummer };
        nachricht.push(abc);
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

    function chatWechsel1(): void {
        
        chatnummer = 1;
        divLöschen();
        chatgenerieren();
    }
    function chatWechsel2(): void {

        chatnummer = 2;
        divLöschen();
        chatgenerieren();
    }
    /*------------Abmelden-------------------*/
    document.getElementById("abmelden")?.addEventListener("click", abmelden);

    function abmelden(): void {
        window.location.href = "login.html";   
    }
    /*-----------------*/







}