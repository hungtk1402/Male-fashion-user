import { Link } from "react-router-dom"

const CartTable = ({ cartItems, removeCart, updateCartQuantity, toggleSelectItem, toggleSelectAllItems }) => {
    const allSelected = (cartItems || []).every(item => item.selected);
    const isCartEmpty = (cartItems || []).length === 0;

    const handleSelectAll = () => toggleSelectAllItems(!allSelected)

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity > 0) updateCartQuantity(productId, newQuantity)
    }

    return (
        <>
            <div className="col-lg-8">
                <div className="shopping__cart__table">
                    <table>
                        {!isCartEmpty && (
                            <thead>
                                <tr>
                                    <th className="checkbox__header">
                                        <input
                                            type="checkbox"
                                            checked={allSelected}
                                            onChange={handleSelectAll}
                                        />
                                    </th>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                        )}
                        <tbody>
                            {isCartEmpty ? (
                                <h3 className="mess__cart__empty">Your cart is empty.</h3>
                            ) : (
                                cartItems.map(item => (
                                    <tr key={item.id}>
                                        <td className="checkbox__cell">
                                            <input
                                                type="checkbox"
                                                checked={item.selected || false}
                                                onChange={() => toggleSelectItem(item.id)}
                                            />
                                        </td>
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
                                                        onClick={() =>
                                                            handleQuantityChange(item.id, item.quantity - 1)
                                                        }
                                                    ></span>
                                                    <input type="text" value={item.quantity} readOnly />
                                                    <span
                                                        className="fa fa-angle-right inc qtybtn"
                                                        onClick={() =>
                                                            handleQuantityChange(item.id, item.quantity + 1)
                                                        }
                                                    ></span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="cart__price">
                                            ${(
                                                item.quantity * parseFloat(item.price.replace('$', ''))
                                            ).toFixed(2)}
                                        </td>
                                        <td className="cart__close" onClick={() => removeCart(item.id)}>
                                            <i className="fa fa-close"></i>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <div className={`continue__btn mb-5 ${isCartEmpty ? 'center-btn' : ''}`}>
                    <Link to={'/shop'}>Continue Shopping</Link>
                </div>
            </div>
        </>
    )
}

export default CartTable