const OrderDetail = ({ selectedItems, cartSubtotal }) => {
    return (
        <>
            <div className='col-lg-4 col-md-6'>
                <div className='checkout__order'>
                    <h4 className='order__title'>Your order</h4>
                    <div className="checkout__order__products row mb-3">
                        <div className="col-6"><strong>Product</strong></div>
                        <div className="col-6 text-right"><strong>Price</strong></div>
                    </div>
                    {selectedItems.map((item) => (
                        <div className="row mb-2" key={item.id}>
                            <div className="col-6">{item.name}</div>
                            <div className="col-6 text-right">
                                ${(item.quantity * parseFloat(item.price.replace('$', ''))).toFixed(2)}
                            </div>
                        </div>
                    ))}
                    <div className="checkout__total__all">
                        <div className="row py-2">
                            <div className="col-6 totalText">Subtotal</div>
                            <div className="col-6 text-right totalPrice">${cartSubtotal.toFixed(2)}</div>
                        </div>
                        <div className="row py-2">
                            <div className="col-6 totalText">Total</div>
                            <div className="col-6 text-right totalPrice">${cartSubtotal.toFixed(2)}</div>
                        </div>
                    </div>
                    <button type="submit" class="site-btn">PLACE ORDER</button>
                </div>
            </div>
        </>
    )
}

export default OrderDetail