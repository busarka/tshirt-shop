import React from "react";

export default function Price({selectedColorFullInfo}) {

    const renderPrice = selectedColorFullInfo?.price

    return (
        <p>{renderPrice}</p>
    );
}


