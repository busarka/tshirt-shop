import React, { useEffect, useState } from "react";
import '../styles/index.css'
import { getProducts } from "../services/api";
import ItemCard from "./ItemCard";

const ShowItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState()

    useEffect (()=> {
        setLoading(false)
        getProducts().then(items => setItems(items))
        setLoading(true)
    }, []
    )
    
    return loading ? 
            items.map((item) => 
            <ItemCard key={item.id} id={item.id} name={item.name} colors={item.colors}></ItemCard>)
            :
            <div>Загрузка...</div>
}

export default function ItemsList() {
    return (
        <>
        <div className="App-body">
            <div className="App-body__items">
                <h1 className="App-body__items--title">Наш каталог товаров</h1>
                <div className="App-body__items--list">
                    {ShowItems()}
                </div>
            </div>
            </div>
        </>
    )
};