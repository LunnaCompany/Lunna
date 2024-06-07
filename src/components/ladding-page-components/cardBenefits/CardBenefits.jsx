import React from "react";

import "./style.css";

const CardBenefits = ({ image, content, color }) => {
    return (
        <div className={"card-benefits " + color }>
            <img src={image} alt="" />
            <div>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default CardBenefits;
