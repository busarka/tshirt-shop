import React from "react";
import '../styles/index.css'
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
    const product = useSelector((state) => state.id)
    console.log(product)
    
    const dispatch = useDispatch()
    

    return (
        <div className="open-cart">
            <p>Корзина</p>
            <p>Итого: {1} рублей.</p>
            <button className="open-cart--pay-button" type="submit">Оплатить</button>
        </div>
        )
}