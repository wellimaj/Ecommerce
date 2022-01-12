import React, { useState ,useContext} from "react";
import "./Itemcard.css";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";
export default function Itemcard(props) {
  const { image, name, description, price, clicks ,_id} = props.item;
  const { Cartarr, setCartarr, cartcount, setCartcount } =
    useContext(AuthContext);
  const [cart, setCart] = useState(0);
const [bought,setBought]=useState(false)
  //console.log(_id)
  //console.log(clicks);
  function Carthandler(itemname,cart,image,price){
  // console.log(itemname)
    if(cart>0){
       setBought(true);
      setCartcount(cartcount+cart);

    setCartarr([...Cartarr,[itemname,cart,image,price] ]);
    console.log(Cartarr);
    }else{
      alert("add atleast 1 item to be added to your cart")
    }
  }
  return (
    <>
      <div className="itemcard">
        <img src={image} alt="product"></img>
        <div className="first-div">
          <div className="pname">{name}</div>
          <div className="pdescription">{description}</div>
          <div className="price">Rs. {price}</div>
        </div>

        <div className="second-item">
          <div className="left-cart">
            <div className="views">veiws:{Number(clicks)}</div>
          </div>
          <div className="cart-inc">
            <button
              onClick={() => {
                if (cart === 1) {
                  setBought(false);
                  setCart(cart - 1);
                  return;}
                if (cart===0){
                  return
                }
                 else {
                  setCart(cart-1)
                }
              }}
              className="m-btn"
            >
              -
            </button>
            <div className="total-item">{cart}</div>
            <button
              onClick={() => {
                
                setCart(cart + 1);
              }}
              className="p-btn"
            >
              +
            </button>
            {!bought ? (
              <button
                onClick={() => {
                  Carthandler(name, cart, image, price);
                }}
              >
                add to cart
              </button>
            ) : (
              <Link to="/cart">
                <button>go to cart</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
