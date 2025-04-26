import React from "react";
import './horizontalSelector.css';
import { classNames } from "primereact/utils";

export default function HorizontalSelector({ options = [], selectedOption }) {
    return (
        <div className="horizontal-selector">
            {options.map((option, index) => (
                <button key={index} className={classNames("option", {"selected": selectedOption === index})} onClick={option.onClick}>
                    <span>{option.label}</span>
                </button>
            ))}
        </div>
    );
}