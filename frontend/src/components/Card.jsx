import React, { useState } from "react";
//import "./style.css";
import CardApi from "./CardApi";
import ItemCard from "./ItemCard";


const Card = () => {

	  const [itemList, setItemList] = useState(CardApi);	
  return (
    <>
    <ItemCard itemList={itemList} />
    </>
  );
};

export default Card;
