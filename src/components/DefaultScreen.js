import React from "react";
import { Link } from "react-router-dom";
import { ALL_ITEM_ROUTE } from "../utils/const";

export default function DefaultScreen() {
    return (
        <Link to={ALL_ITEM_ROUTE}>За покупками</Link>
    );
}