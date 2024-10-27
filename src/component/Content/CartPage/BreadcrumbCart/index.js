import { Link } from "react-router-dom"

const BreadcrumbCart = () => {
    return (
        <>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Shopping Cart</h4>
                                <div className="breadcrumb__links">
                                    <Link to={'/'}>Home</Link>
                                    <Link to={'/shop'}>Shop</Link>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BreadcrumbCart