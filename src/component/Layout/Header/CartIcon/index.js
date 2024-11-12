import { useNavigate } from "react-router-dom"
import { CartContext } from "../../../../context/CartContext"
import { UserContext } from "../../../../context/UserContext"
import { useContext, useState } from "react"
import PromptModal from "../../../Content/PromptModal"

const CartIcon = () => {
    const navigate = useNavigate()
    const { getCartItemCount } = useContext(CartContext)
    const { user } = useContext(UserContext)
    const [showModal, setShowModal] = useState(false)

    const goToCart = () => {
        if (user) {
            navigate('/cart')
        } else {
            setShowModal(true)
        }
    }

    return (
        <>
            <div className="cart-icon-container">
                <button className="btn cart-btn" onClick={goToCart}>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-badge">{getCartItemCount() || 0}</span>
                </button>
            </div>
            <PromptModal show={showModal} onClose={() => setShowModal(false)} />
        </>
    )
}

export default CartIcon