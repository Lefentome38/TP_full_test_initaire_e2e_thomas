import { describe, expect, test } from 'vitest'
import { CalculerHeure, sum } from '../moduls/CalculerHeur';

describe("l'heure en Corodinsite Jupiterienne", () => {
    describe("test calcule", () => {
        describe("lune", () => {
            test("pouvoire 1", () => {
                expect(sum(1,1,1)).toEqual(3) //+2 terre -2 lune (1+1+1 +2) -2 = 3
            })
            test("pouvoire 2", () => {
                expect(sum(2,1,1)).toEqual(6) //+2 terre (2+1+1 +2) = 3
            })   
        })
        describe("terre", () => {
            test("pouvoire terre 1", () => {
                expect(sum(1,1,1)).toEqual(3); //+2 terre -2 lune (1+1+1 +2) -2 = 3
            });
            test("pouvoire terre 2", () => {
                expect(sum(1,2,1)).toEqual(6); // resultat=6 () + 6 = 6
            });
        })
        describe("soleil", () => {
            test("pouvoire 1", () => {
                expect(sum(1,1,1)).toEqual(0); // +2 terre -2 lune (1+1+1 +2) -2 = 3 !
            })
            test("pouvoire 2", () => {
                expect(sum(1,1,2)).toEqual(0); // +2 terre -2 lune (1+1+1 +2) -2 = 3 !
            })
        })
    })
});