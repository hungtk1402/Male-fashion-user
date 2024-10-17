import { Link } from "react-router-dom"

const Breadcrumb = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="product__details__breadcrumb">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/shop'}>Shop</Link>
                        <span>Product details</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb