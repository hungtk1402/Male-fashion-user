import { useNavigate } from "react-router-dom"
import { CartContext } from "../../../../context/CartContext"
import { useContext } from "react"

const CartIcon = () => {
    const navigate = useNavigate()
    const { getCartItemCount } = useContext(CartContext)

    const goToCart = () => {
        navigate('/cart')
    }

    return (
        <>
            <div className="cart-icon-container">
                <button className="btn cart-btn" onClick={goToCart}>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-badge">{getCartItemCount() || 0}</span>
                </button>
            </div>
        </>
    )
}

export default CartIcon