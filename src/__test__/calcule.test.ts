import { describe, expect, test } from 'vitest'
import { CalculerHeure, sum } from '../moduls/CalculerHeur';

describe("l'heure en Corodinsite Jupiterienne", () => {

    describe("test calcule", () => {
        // lune 1: -2
        // lune 2: /2
        // terre 1: +2
        // terre 2: resultat = 6
        // soleil 1: supprime le cadran terre
        // soleil 2: double le cadran de la terre (sans le pouvoir)  
        test("l-t-s", () => {
            expect("ok").toEqual("ok"); 
        })
        test("1-1-1", () => {
            expect(sum(1,1,1)).toEqual(0) // -2 lune,  (sup la terre) soleil, = (1+1) -2 = 0
        })
        test("1-1-2", () => {
            expect(sum(1,1,2)).toEqual(5); // -2 lune, (+1 terre,*2) = 2 soleil, (1+2+2 +2) -2 = 5 !
        })
        test("1-2-2", () => {
            expect(sum(1,2,2)).toEqual(6) // resultat = 6 terre, () = 6
        })   
        test("2-2-2", () => {
            expect(sum(2,2,2)).toEqual(6) // esultat = 6 terre, () = 6
        })  
        test("2-2-1", () => {
            expect(sum(2,2,1)).toEqual(1.5) // /2 lune, (sup terre) soleil, (2+1) /2 = 1.5
        })  
        test("2-1-1", () => {
            expect(sum(2,1,1)).toEqual(1.5) // /2 lune, (sup la terre) soleil = (2+1) /2 = 1.5
        }) 
        test("2-1-2", () => {
            expect(sum(2,1,2)).toEqual(4) // /2 lune, +2 terre, (double terre) soleil = (2+(1*2)+2 +2) /2 = 4
        }) 
        test("1-2-1", () => {
            expect(sum(1,2,1)).toEqual(0) // -2 lune, (sup terre) soleil = (1+1) = 0
        }) 



        // test("pouvoire 2", () => {
        //     expect(sum(2,1,1)).toEqual(1.5) // /2 lune  (sup la terre) soleil = (2+1) / 2 = 1.5
        // })           
        // test("pouvoire terre 1", () => {
        //     expect(sum(1,1,1)).toEqual(0); // -2 lune (sup la terre) (1+1) -2 = 0
        // });
        // test("pouvoire terre 2", () => {
        //     expect(sum(1,2,1)).toEqual(6); // 
        // });        

    })
});

// lune 1: -2
// lune 2: /2
// terre 1: +2
// terre 2: resultat = 6
// soleil 1: supprime le cadran terre
// soleil 2: double le cadran de la terre (sans le pouvoir)  