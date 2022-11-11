import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setTotal(item.price + total);
    cart.push(item);
    //setCart(cart.append(item));
  }

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>My Okay Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div className="cardsdiv">{bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <div className="cardview">
          <button onClick={() => addToCart(item)} className="plusbtn">+</button>
          <img src={item.image} className="img" />
          <p className="name">{item.name}</p>
          <p className="description">{item.description}</p>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '18vw'}}>
            <p className="price">{item.price}</p>
          </div>
        </div>
      ))}</div>

        <h2>Cart</h2>
        <p className="total">Cart Total is ${total}</p>
        <div className="cardsdiv">{cart.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <div className="cardview">
          <img src={item.image} className="img" />
          <p className="name">{item.name}</p>
          <p className="description">{item.description}</p>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '18vw'}}>
            <p className="price">{item.price}</p>
          </div>
        </div>
      ))}</div>
      </div>
  );
}

export default App;
