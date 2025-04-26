import React from "react";
import { useState } from "react";

export function getShoppingCart() {

    const products = [
        {
            id: 1,
            name: "Monstera Deliciosa",
            price: 20.99,
            quantity: 1,
        },
        {
            id: 2,
            name: "Anturium",
            price: 15.49,
            quantity: 4,
        },
        {
            id: 3,
            name: "Lirio",
            price: 5.99,
            quantity: 2,
        }
    ]

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000); // Simulando una llamada a la API con un retraso de 2 segundos
    })

}
