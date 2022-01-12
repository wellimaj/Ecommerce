import React from 'react'
import {AuthContext} from '../Context/AuthContext'
import { useContext } from 'react'
import './cart.css'

export default function Cart(props) {

   const {
     isAuthenticated,
     user,
     setIsAuthenticated,
     setUser,
     Cartarr,
     setCartarr,
   } = useContext(AuthContext);
  
    return <div>{Cartarr.map((elem)=>{
      

        return (
          <div className="cart-container">
            <img src={elem[2]} alt="hello"></img>
            <div className="middle">
              <h2>{elem[0]}</h2>
              <div className="inner">
                <h3>Quantity: &nbsp;</h3>
                <h3>{elem[1]}</h3>
              </div>
            </div>
            <button className='price-btn'>Price : {elem[3] * elem[1]}</button>
          </div>
        );

    })}</div>;
}
