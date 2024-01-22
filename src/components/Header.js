import React from "react";
import { Link } from "react-router-dom";
import { CART_ROUTE, HOME_ROUTE } from "../utils/const";
import { useSelector } from "react-redux";

export default function Header() {
    const state = useSelector((state) => state.handleCart)
    console.log(state)
    return (
        <>
            <Link to={HOME_ROUTE} style={{'textDecoration': 'none', 'color':'white'}}>
                Магазин футболок
            </Link>
            <Link to={CART_ROUTE}>
                <button className="App-header__button">
                    Корзина ({state.length})
                </button>
            </Link>
        </>
    )
}