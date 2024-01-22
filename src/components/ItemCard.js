import React from "react";
import '../styles/index.css';
import {Link} from 'react-router-dom';

import { ITEM_BY_ID_ROUTE } from "../utils/const";

export default function ItemCard({id, name, colors}) {
    const imageSrc = colors.find((element) => element.id === 1).images[0]
    
    return (
            <>
                <div className="App-header__item-card" id={id}>
                    <p>{name}</p>
                    <Link to={ITEM_BY_ID_ROUTE + `${id}`}>
                        <img className="image" src={imageSrc} alt='' id={id}></img>
                    </Link>
                </div>
            </>
        )
}