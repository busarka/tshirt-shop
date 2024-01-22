import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct, getSizes } from "../../services/api";
import Description from "./Description";
import ItemImages from "./ItemImages";
import Title from "./Title";
import Price from "./Price";
import Sizes from "./Sizes";
import { useDispatch } from "react-redux";
import { addCard } from "../../features/action";

const ShowItem = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [selectedColor, setSelectedColor] = useState('черный');
    const [selectedColorFullInfo, setSelectedColorFullInfo] = useState()
    const [allSize, setAllSize] = useState([])
    const [selectedSize, setSelectedSize] = useState();
    const [loading, setLoading] = useState()
    const [selectedProduct, setSelectedProduct] = useState()

    const dispatch = useDispatch()
    const addProduct = (selectedProduct) => {
        dispatch(addCard(selectedProduct))
    }

    useEffect (()=> {
        setLoading(false)
        const getProductByID = async () => getProduct(id).then(product => setProduct(product))
        setLoading(true)
        getProductByID()
    },[])
    

    useEffect(() => {
        const findProductBySeletcedColor = async () => {
            return setSelectedColorFullInfo(product.colors && product.colors.find((color) => 
            color.name == selectedColor))
        }
        findProductBySeletcedColor()
    })
    
    useEffect(()=> { 
        const getAllSizes = async () => getSizes().then(allSize => setAllSize(allSize))
        getAllSizes()
    }, [])

    useEffect (() => {
        const doSelectedProduct = (pr, color, size) => {
            setSelectedProduct(
                {
                id: pr.id,
                name: pr.name,
                price: pr.colors.filter(i => i.name == selectedColor)[0].price,
                colorName: color,
                size: size
            }
            )}
    if (product && selectedColor && selectedSize) {
        doSelectedProduct(product, selectedColor, selectedSize)
    }
}, [selectedColor, selectedSize])

    
    const changeColor = (value) => {
        setSelectedColor(value)
    }

    const renderPickColors = product.colors?.map((item, index) => 
        <option value={item.name} key={index}>
            {item.name}
        </option>)

    const handleSizeChange = (size) => {
        setSelectedSize(size)
    }

    return (
        loading ? 
            <>
                <Title product={product}/>
                <ItemImages selectedColorFullInfo={selectedColorFullInfo}/>
                <select id="colors" value ={selectedColor} 
                    onChange={e => changeColor(e.target.value)}>
                        {renderPickColors}
                </select>
                <Description selectedColorFullInfo={selectedColorFullInfo}/>
                <Price selectedColorFullInfo={selectedColorFullInfo}></Price>
                <Sizes selectedColorFullInfo={selectedColorFullInfo} allSize={allSize} 
                    onChange={handleSizeChange}>
                </Sizes>
                <button onClick={() => addProduct(selectedProduct)}>
                    Добавить в корзину
                </button>
            </>
            :
            <div>Loading...</div>
)
}

export default function ItemInfo() {

    return (
        <div className="item-info-wrapper">
        {ShowItem()}
        </div>
    )
}