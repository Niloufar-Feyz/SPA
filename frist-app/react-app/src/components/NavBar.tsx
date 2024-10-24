import React from 'react'
interface Props{
    cartItemsCount:number;
}
function NavBar({cartItemsCount}:Props)  {
  return (
    <div>NavBar:<p>You have bought {cartItemsCount} items!</p></div>
  )
}

export default NavBar