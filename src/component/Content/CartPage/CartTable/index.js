import { Link } from "react-router-dom"

const CartTable = ({ cartItems, removeCart, updateCartQuantity }) => {
    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity > 0) {
            updateCartQuantity(productId, newQuantity)
        }
    }

    return (
        <>
            <div className="col-lg-8">
                <div className="shopping__cart__table">
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.length > 0 ? (
                                cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td className="product__cart__item">
                                            <div className="product__cart__item__pic">
                                                <img src={item.img1} alt={item.name} />
                                            </div>
                                            <div className="product__cart__item__text">
                                                <h6>{item.name}</h6>
                                                <h5>${item.price}</h5>
                                            </div>
                                        </td>
                                        <td className="quantity__item">
                                            <div className="quantity">
                                                <div className="pro-qty-2">
                                                    <span
                                                        className="fa fa-angle-left dec qtybtn"
                                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                    ></span>
                                                    <input type="text" value={item.quantity} readOnly />
                                                    <span
                                                        className="fa fa-angle-right inc qtybtn"
                                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                    ></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="cart__price">
                                            ${(item.quantity * parseFloat(item.price.replace('$', ''))).toFixed(2)}
                                        </td>
                                        <td className="cart__close" onClick={() => removeCart(item.id)}>
                                            <i className="fa fa-close"></i>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">Your cart is empty.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="continue__btn mb-5">
                    <Link to={'/shop'}>Continue Shopping</Link>
                </div>
            </div>
        </>
    )
}

export default CartTable