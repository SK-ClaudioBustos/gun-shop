import React, { useState } from "react";
import "../sass/ShopButton.scss";

function ShopButton(){

    return (
        <div className="shop-div bg-success"> 
            <i className="shop-icon bi bi-bag-fill"></i>
            <button className="shop-button" ></button>
        </div>
    );
}

export default ShopButton;