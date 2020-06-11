namespace Aufgabe7 {
    export interface Artikel {

        name: string;
        img: string;
        preis: number;
        beschreibung: string;
        kategorie: string;
    }

    export let artikel: Artikel[];
    
    export async function laden(_url: RequestInfo): Promise<void> {
        let rückgabe1: Response = await fetch(_url);
        let rückgabe2: JSON = await rückgabe1.json();
        artikel = JSON.parse(JSON.stringify(rückgabe2)); 
    }
    
}