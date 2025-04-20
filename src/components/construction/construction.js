import React from "react";
import constructionImage from "../../assets/images/construction.jpg";

function Construction() {
    return (
        <div className="construction">
            <p>En construcción</p>
            <img src={constructionImage} alt="En construcción" />
        </div>
    );
}

export default Construction;