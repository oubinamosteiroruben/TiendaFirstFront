import React, { useState, useEffect, useRef } from "react";
import './shoppingCartContainer.css';
import { classNames } from "primereact/utils";
import { getShoppingCart } from "../../services/shoppingCartServices";

export default function ShoppingCartContainer() {
    const [visible, setVisible] = useState(false);
    const [products, setProducts] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        getShoppingCart().then((response) => {
            console.log(response);
            setProducts(response);
        }).catch((error) => {
            console.log(error);
            setProducts([]);
        });
    };

    const removeProduct = (product) => {
        // Lógica para remover producto del carrito
        console.log("Removing product:", product);
    };

    // Cerrar el carrito al hacer clic fuera del componente cuando esté visible
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setVisible(false);
            }
        };

        if (visible) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [visible]);

    return (
        <div ref={containerRef} className={classNames("shopping-cart-container", { "opened": visible })}>
            <button className="open-button" onClick={() => setVisible(true)}>
                <i className="pi pi-shopping-cart"></i>
            </button>
            <div className="shopping-cart-content">
                <button className="close-button" onClick={() => setVisible(false)}>
                    <i className="pi pi-chevron-left"></i>
                </button>
                <h2>Carrito</h2>
                <div className="cart-items">
                    {
                        products && products.map((product, index) => (
                            <div key={index} className="cart-item">
                                <div className="item-details">
                                    <span className="item-label">{product.name} x {product.quantity}</span>
                                    <span className="item-price">
                                        {product.price}€ por unidad 
                                        <button onClick={() => removeProduct(product)} className="remove-button">
                                            <i className="pi pi-trash"> </i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="cart-total">
                    <button className="checkout-button">
                        Pagar {products ? products.reduce((tot, val) => tot + (val.price * val.quantity), 0) : 0}€
                    </button>
                </div>
            </div>
        </div>
    );
}