import React, { useState } from "react";

export default function Sizes({selectedColorFullInfo, allSize, onChange}) {
    const getProductSize = selectedColorFullInfo?.sizes
    const newAllSize = allSize.slice()
    
    const availableSize = () => {
            if (newAllSize && getProductSize) {
                const availableItems = newAllSize.filter((e) => 
                    getProductSize.includes(e.id)).map(eo => eo['isAvailable'] = false)
                const notAvailableItems = newAllSize.filter((e) => 
                    !getProductSize.includes(e.id)).map(eo => eo['isAvailable'] = true)

                return availableItems.concat(notAvailableItems)
            }
            else return ''
    }
    availableSize()

    const handleSelectedSize = (event) => {
        onChange(event.target.value)
    }

    const renderAllSize = () => newAllSize.map((size, id) => {
        return (
        <div className="size-wrapper" key={id} >
            <input type="radio" name="myRadio" value={size.label} disabled={size.isAvailable} onClick={handleSelectedSize}/>
            <label htmlFor={size.label}>Размер: {size.number} (EU - {size.label})</label>     
        </div>
    )})

    return (
            <div className="item-sizes">
                {renderAllSize()}
            </div>
    );
}



