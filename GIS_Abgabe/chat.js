"use strict";
var Abgabe;
(function (Abgabe) {
    let username = localStorage.getItem("Username");
    let chatnummer;
    let newDiv = document.createElement("div");
    newDiv.id = "profilll";
    newDiv.innerHTML = "Willkommen: " + username;
    document.getElementById("nav")?.appendChild(newDiv);
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
    async function abSenden() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis2020felix.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/neueNachricht";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let usernachricht = query.toString();
        url = url + "?";
        console.log("url:" + url);
        document.getElementById("registrieren")?.reset();
        let nachrichtinhalt = usernachricht.split("=");
        let abc = { user: username, nachricht: nachrichtinhalt[1], chat: chatnummer };
        //let abcString: string = JSON.stringify(abc); 
        console.log("abc" + abc);
        url = url + abc.user + "\"" + abc.nachricht + "\"" + abc.chat;
        console.log(url);
        await fetch(url);
        await nachrichtenLaden();
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
    async function chatWechsel1() {
        if (localStorage.getItem("Username") != null) {
            chatnummer = 1;
            await nachrichtenLaden();
            divLöschen();
            chatgenerieren();
        }
        else {
            alert("sooooooooooooooo nicht");
        }
    }
    async function chatWechsel2() {
        if (localStorage.getItem("Username") != null) {
            chatnummer = 2;
            await nachrichtenLaden();
            divLöschen();
            chatgenerieren();
        }
        else {
            alert("sooooooooooooooo nicht");
        }
    }
    /*------------Abmelden-------------------*/
    document.getElementById("abmelden")?.addEventListener("click", abmelden);
    function abmelden() {
        localStorage.clear();
        window.location.href = "login.html";
    }
    /*--------asdadsd---------*/
    async function nachrichtenLaden() {
        let url = "https://gis2020felix.herokuapp.com";
        //let url: string = "http://localhost:8100";
        url += "/nachrichtenLaden";
        let dbNachrichten = await fetch(url);
        let dbNachrichten2 = await dbNachrichten.text();
        console.log("dbNachricht2" + dbNachrichten2);
        nachricht = JSON.parse(dbNachrichten2);
    }
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=chat.js.map