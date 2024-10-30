import './CheckOut.css'
import BreadcrumbCheckout from './BreadcrumbCheckout'
import InputDetail from './InputDetail'
import OrderDetail from './OrderDetail'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../../context/CartContext'
import { UserContext } from '../../../context/UserContext'

const CheckOut = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    const { cartItems, setCartItems } = useContext(CartContext)
    const { selectedItems, cartSubtotal } = location.state || { selectedItems: [], cartSubtotal: 0 }
    const [isFormValid, setIsFormValid] = useState(false);

    const [formValues, setFormValues] = useState({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        country: '',
        address: '',
        apartment: '',
        postcode: '',
        phone: user?.phoneNumber || '',
        email: user?.email || '',
        orderNotes: ''
    })

    useEffect(() => {
        const requiredFields = ['firstName', 'lastName', 'country', 'address', 'postcode', 'phone', 'email'];
        const isValid = requiredFields.every(field => formValues[field].trim() !== '');
        setIsFormValid(isValid);
    }, [formValues]);

    const onInputChange = (field) => (event) => {
        setFormValues({ ...formValues, [field]: event.target.value });
    };

    const handlePlaceOrder = () => {
        if (!isFormValid) return
        alert("Order placed successfully!")

        // Xoá sản phẩm được chọn trong giỏ hàng sau khi order thành công
        const updateCart = cartItems.filter(item => !item.selected)
        setCartItems(updateCart)

        navigate('/')
    }

    return (
        <>
            <BreadcrumbCheckout />
            <section className='checkout spad'>
                <div className='container'>
                    <div className='checkout__form'>
                        <form onSubmit={(e) => { e.preventDefault(); handlePlaceOrder(); }}>
                            <div className='row'>
                                <InputDetail onInputChange={onInputChange} formValues={formValues} />
                                <OrderDetail
                                    selectedItems={selectedItems}
                                    cartSubtotal={cartSubtotal}
                                    isFormValid={isFormValid}
                                    handlePlaceOrder={handlePlaceOrder}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CheckOut