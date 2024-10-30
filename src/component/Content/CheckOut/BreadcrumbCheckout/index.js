import { Link } from 'react-router-dom'

const BreadcrumbCheckout = () => {
    return (
        <>
            <section className='breadcrumb-option'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='breadcrumb__text'>
                                <h4>Check Out</h4>
                                <div className='breadcrumb__links'>
                                    <Link to={"/"}>Home</Link>
                                    <Link to={"/shop"}>Shop</Link>
                                    <span>Check Out</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BreadcrumbCheckout