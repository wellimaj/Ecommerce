import React from 'react'
import {AuthContext} from '../Context/AuthContext'
import { useContext } from 'react'

export default function Cart(props) {
   const {
     isAuthenticated,
     user,
     setIsAuthenticated,
     setUser,
     Cartarr,
     setCartarr,
   } = useContext(AuthContext);
    console.log(Cartarr)
    return <div>{Cartarr.map((elem)=>{

        return <div>{String(elem.name)}</div>
    })}</div>;
}
