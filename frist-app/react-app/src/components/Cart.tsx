import React from 'react'
interface Props{
    cartItems:string[];
    onClear:()=>void;
}
function Cart({cartItems, onClear}:Props) {
  return (
    <div>Cart
      <p>Here are the list of your shopping:
        <ul>
          {cartItems.map(item=><li key={item}>{item}</li>)}
        </ul>
      </p>
      <button onClick={onClear}>Clear the list!</button>
    </div>
  )
}

export default Cart;