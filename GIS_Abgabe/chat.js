"use strict";
var Abgabe;
(function (Abgabe) {
    let username = "Felix: ";
    let chatnummer;
    let nachricht = [];
    function chatgenerieren() {
        for (let index = 0; index < nachricht.length; index++) {
            let newDiv = document.createElement("div");
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
    function abSenden() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let usernachricht = query.toString();
        let nachrichtinhalt = usernachricht.split("=");
        let abc = { user: username, nachricht: nachrichtinhalt[1], chat: chatnummer };
        nachricht.push(abc);
        divLöschen();
        chatgenerieren();
    }
    function divLöschen() {
        for (let index = 0; index < nachricht.length; index++) {
            document.getElementById("nachrichten" + index)?.remove();
        }
    }
    /*---------------Chat Auswahl--------------*/
    document.getElementById("chatroom1")?.addEventListener("click", chatWechsel1);
    document.getElementById("chatroom2")?.addEventListener("click", chatWechsel2);
    function chatWechsel1() {
        chatnummer = 1;
        divLöschen();
        chatgenerieren();
    }
    function chatWechsel2() {
        chatnummer = 2;
        divLöschen();
        chatgenerieren();
    }
    /*------------Abmelden-------------------*/
    document.getElementById("abmelden")?.addEventListener("click", abmelden);
    function abmelden() {
        window.location.href = "login.html";
    }
    /*-----------------*/
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=chat.js.map