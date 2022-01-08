import React, { useState ,useContext} from "react";
import "./Itemcard.css";
import { AuthContext } from "../Context/AuthContext";
export default function Itemcard(props) {
  const { image, name, description, price, clicks ,_id} = props.item;
  const { isAuthenticated, user, setIsAuthenticated, setUser } =
    useContext(AuthContext);
  const [cart, setCart] = useState(0);
  console.log(_id)
  //console.log(clicks);
    async function Carthandler ()  {
      return fetch("/user/cart/post", {
        method: "post",
        body: JSON.stringify([{BoughtItem:_id},{count:cart}]),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => data);
    };
  return (
    <>
      <div className="itemcard" >
        <img src={image} alt="product"></img>
        <div className="first-div">
          <div className="pname">{name}</div>
          <div  className="pdescription">{description}</div>
          <div className="price">Rs. {price}</div>
        </div>

        <div className="second-item">
          <div className="left-cart">
            <div className="views">veiws:{Number(clicks)}</div>
          </div>
          <div className="cart-inc">
            <button
              onClick={() => {
                if (cart === 0) {
                  return;
                } else {
                  setCart(cart - 1);
                }
              }}
            className="m-btn">
              -
            </button>
            <div className="total-item">{cart}</div>
            <button onClick={() => setCart(cart + 1)} className="p-btn">+</button>
            <button
              onClick={() => {
                Carthandler(user);
              }}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
