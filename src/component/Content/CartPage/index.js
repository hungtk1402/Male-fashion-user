import { CartContext } from "../../../context/CartContext"
import { useContext } from "react"
import './CartPage.css'
import BreadcrumbCart from "./BreadcrumbCart"
import CartTable from "./CartTable"
import CartTotal from "./CartTotal"

const CartPage = () => {
    const { cartItems, removeCart, updateCartQuantity, getCartSubtotal } = useContext(CartContext)

    return (
        <>
            <BreadcrumbCart />
            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <CartTable cartItems={cartItems} removeCart={removeCart} updateCartQuantity={updateCartQuantity} />
                        <CartTotal cartItems={cartItems} cartSubtotal={getCartSubtotal()} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartPage