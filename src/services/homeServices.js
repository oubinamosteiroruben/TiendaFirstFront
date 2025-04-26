import imgMonstera from "../assets/images/monstera.jpg";
import imgAnturium from "../assets/images/anturio.jpg";
import imgLirio from "../assets/images/lirio.jpg";
import imgColeum from "../assets/images/coleum.jpg";

export function getTopProducts() {

    const products = [
        {
            id: 1,
            name: "Monstera Deliciosa",
            price: 20.99,
            image: imgMonstera,
            description: "Una hermosa planta de interior para decorar tu hogar.",
        },
        {
            id: 2,
            name: "Anturium",
            price: 15.49,
            image: imgAnturium,
            description: "Aire filtrado.",
        },
        {
            id: 3,
            name: "Lirio",
            price: 5.99,
            image: imgLirio,
            description: "Olor agradable y colorido.",
        },
        {
            id: 4,
            name: "Coleum",
            price: 12.99,
            image: imgColeum,
            description: "Amante de la luz.",
        },
    ]

    

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000); // Simulando una llamada a la API con un retraso de 2 segundos
    })
}