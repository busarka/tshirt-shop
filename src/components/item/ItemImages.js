import React from "react";

export default function ItemImages({selectedColorFullInfo}) {

    const renderImages = selectedColorFullInfo?.images.map((img, index) =>
        <img className="item-info-photo" src={img} alt="/" key={index}/>)

    return (
        <div className="item-info-photo-contanier">
            {renderImages}
        </div>
    );
}

