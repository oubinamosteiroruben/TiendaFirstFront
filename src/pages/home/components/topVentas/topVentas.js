import React, { useEffect } from "react";
import './topVentas.css';
import { Slider } from 'primereact/slider';
import { useState } from "react";
import { getTopProducts } from "../../../../services/homeServices";
import { ProgressSpinner } from "primereact/progressspinner";
import ProductCard from "../../../../components/productCard/productCard";

export default function TopVentas() {

    const [productsByRow, setProductsByRow] = useState(4);
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setIsLoading(true);
        getTopProducts().then((response) => {
            console.log(response);
            setProducts(response);
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
            setProducts([]);
            setIsLoading(false);
        });
    }

    return (
        <div className="top-ventas">
            <div className="top-ventas-header">
                <div className="slider-container"><Slider value={productsByRow} min={2} max={8} onChange={(e) => setProductsByRow(e.value)} 
                // step={2} 
                />   </div> 
                <span className="slider-label">Productos por fila: {productsByRow}</span>
            </div>
             
            <div className="top-ventas-content">
                {
                    isLoading ? (
                        <div className="loading-container">
                            <ProgressSpinner />
                        </div>
                    ) : (
                        <div className="products-grid" style={{ gridTemplateColumns: `repeat(${productsByRow}, 1fr)` }}>
                            {
                                products && products.map((product, index) => (
                                    <ProductCard key={index} product={product} />
                                ))
                            }
                        </div>
                    )
                }
                
            </div>
        </div>
    );
}