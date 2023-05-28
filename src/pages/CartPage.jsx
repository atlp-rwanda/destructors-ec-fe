import NavBar from '../components/navBar/NavBar'
import UpPage from '../components/navBar/UpPage'
import React from 'react'
import CartComponent from '../components/cart/CartComponent'

const CartPage = () => {
  return (
    <div>
        <UpPage/>
        <NavBar/>
        <CartComponent/>
    </div>
  )
}

export default CartPage