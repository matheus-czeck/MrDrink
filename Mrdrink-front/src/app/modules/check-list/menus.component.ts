import { Injectable } from "@angular/core"

@Injectable({
    providedIn:"root"
})

export class Menus {
    menu: { [key: string]: string[] } = {

        classico: [
            "Caipirinha", "Gin Tônica", "Gin Tropical",
            "Melancia Fresh", "Sex on the beach", "Lagoa Azul",
            "Soda italiana"
        ],
        especial: [
            "Caipirinha", "Gin Tônica", "Gin Tropical",
            "Sex on the beach", "Moscow Mule", "Mojito",
            "Pina colada", "Soda italiana"
        ],
        premium: [
            "Caipirinha", "Gin Tônica", "Gin Tropical",
            "Pink Tonic", "Moscow Mule", "Clericot", 
            "Aperol Spritz", "Pina colada", "Soda italiana"
        ],
        premiumGold: [
             "Caipirinha", "Gin Tônica", "Gin Tropical",
             "Gin Twinings", "Moscow Mule", "Jack'n coke",
             "Negroni", "Daikiri", "Soda italiana"
        ]

    }
    investimento: {[key: string]: string[]}={
        medio:[
            "Vodka Smirnoff", "Gin Gordon's",
            "Xarope Kaly", "Run Bacardí"
        ], 
        master: [
            "Vodka Absolut"," Gin Beefeater",
            "Xarope Monin", "Run Havana"
        ]

    }
    

}