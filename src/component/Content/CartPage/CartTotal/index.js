import { Link } from "react-router-dom";

const CartTotal = ({ cartItems, cartSubtotal }) => {
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
                    <Link
                        to="/checkout"
                        className={`primary-btn ${cartItems.length === 0 ? 'disabled-link' : ''}`}
                        onClick={(e) => {
                            if (cartItems.length === 0) {
                                e.preventDefault();
                            }
                        }}
                    >
                        Proceed to Checkout
                    </Link>
                </div>
            </div>
        </>
    )
}

export default CartTotal