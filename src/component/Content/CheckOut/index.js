import './CheckOut.css'
import BreadcrumbCheckout from './BreadcrumbCheckout'
import InputDetail from './InputDetail'
import OrderDetail from './OrderDetail'
import { useLocation } from 'react-router-dom'

const CheckOut = () => {
    const location = useLocation()
    const {selectedItems, cartSubtotal } = location.state || { selectedItems: [], cartSubtotal: 0 }

    return (
        <>
            <BreadcrumbCheckout />
            <section className='checkout spad'>
                <div className='container'>
                    <div className='checkout__form'>
                        <form>
                            <div className='row'>
                                <InputDetail />
                                <OrderDetail selectedItems={selectedItems} cartSubtotal={cartSubtotal}/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CheckOut