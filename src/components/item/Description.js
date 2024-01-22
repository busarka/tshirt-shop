import React from "react";

export default function Description({selectedColorFullInfo}) {

    const renderDescription = selectedColorFullInfo?.description

    return (
        <>
            <p>{renderDescription}</p>
        </>
    )
}
