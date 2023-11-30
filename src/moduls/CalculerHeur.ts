import { rmSync } from "fs"

export function CalculerHeure(lune: number, terre: number, soleil: number): string{

    let resultat = lune + terre + soleil
    let heure = ""

    if (resultat <= 1) {
        heure = "mortin"        
    }
    if (resultat <= 2) {
        heure = "aprenoon"
    } 
    if(resultat <= 4) {
        heure = "nuight"
    }
    return resultat.toString()
}

export function sum(lune: number, terre: number, soleil: number) {

    let resultat = 0
    
    if (soleil === 1) {
        resultat = lune + soleil
    }
    else{

        resultat = lune + (terre * 2) + soleil

        if (terre === 2) {
            return resultat = 6
        }
        if (terre === 1 ) {
            resultat = resultat + 2 
        }
    }
    
    if (lune === 1) {
        resultat = resultat - 2
    }
        
    if (lune === 2) {
        resultat = resultat / 2
    }

    return resultat

}

// lune 1: -2
// lune 2: /2
// terre 1: +2
// terre 2: resultat = 6
// soleil 1: supprime le cadran terre
// soleil 2: double le cadran de la terre (sans le pouvoir)  