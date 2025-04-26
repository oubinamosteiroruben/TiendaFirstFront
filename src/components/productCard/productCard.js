import React from "react";
import './productCard.css';


export default function ProductCard({ product }) {

    if (!product) {
        return null; // or some fallback UI
    }


    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                {/* <p className="product-description">{product.description}</p> */}
            </div>
            <span className="product-price">${product.price}</span>
        </div>
    )
}