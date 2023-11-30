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
    let terre_plus = 0
    let lune_soustraction = 0
    let lune_division = 0

    if (terre === 1 ) {
        terre_plus = 2
    }else{
        resultat = 6
        return resultat
    }
    if (lune === 1) {
        lune_soustraction = -2
    }else{

    }
    
    resultat = lune + terre + soleil + terre_plus + lune_soustraction
    
    return resultat
}

// - le cadran de la lune :
//     - 1 : réduit le total de 2
//     - 2 : divise le total par 2
// - le cadran de la terre :
//     - 1 : ajoute 2 au total
//     - 2 : le resultat total est 6
// - le cadran du soleil :
//     - 1 : n'utilise pas le cadran de la terre
//     - 2 : double la valeur du cadran de la terre (pas le pouvoir)