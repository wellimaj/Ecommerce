import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import Itemcard from "./Itemcard";
import "./product.css";
import AuthService from "../Services/AuthService";
export default function Products() {

  const [data, setData] = useState([]);
  useEffect(() => {
    AuthService.getData().then((data) => {
      //console.log(data.products);
      setData(data.products);
    });
  }, []);

  return (
    <div className="product-bowl">
      {data.map((item, index) => {
        return <Itemcard key={index} item={item}></Itemcard>;
      })}
    </div>
  );
}
