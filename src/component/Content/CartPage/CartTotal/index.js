import { useNavigate } from "react-router-dom";

const CartTotal = ({ cartItems, cartSubtotal }) => {
    const hasSelectedItems = (cartItems || []).some(item => item.selected); // Filter selected items
    const navigate = useNavigate()

    const handleCheckout = (e) => {
        if (!hasSelectedItems) {
            e.preventDefault()
            return
        }

        const selectedItems = cartItems.filter(item => item.selected)
        navigate("/checkout", { state: { selectedItems, cartSubtotal } })
    }

    return (
        <>
            <div className="col-lg-4">
                <div className="cart__discount">
                    <h6>Discount codes</h6>
                    <form>
                        <input type="text" placeholder="Coupon code" />
                        <button type="submit">Apply</button>
                    </form>
                </div>
                <div className="cart__total">
                    <h6>Cart total</h6>
                    <ul>
                        <li>Subtotal <span>${cartSubtotal.toFixed(2)}</span></li>
                        <li>Total <span>${cartSubtotal.toFixed(2)}</span></li>
                    </ul>
                    <button
                        className={`primary-btn btn-block ${!hasSelectedItems ? 'disabled-link' : ''}`}
                        onClick={handleCheckout}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </>
    )
}

export default CartTotal