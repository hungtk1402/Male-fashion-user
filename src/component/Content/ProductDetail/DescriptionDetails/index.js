import Payment from '../../../../img/details-payment.png'

const DescriptionDetails = ({ products }) => {
    return(
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="product__details__description">
                        <h5 className="title"><span>Additional information</span></h5>
                        <div className="tab-content">
                            <div className="description__content">
                                <div className="description__content__item">
                                    <h5>Description</h5>
                                    <p>{products.longDescription}</p>
                                </div>
                                <div className="description__content__item">
                                    <h5>Material used</h5>
                                    <p>{products.material}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="details__payment">
                        <h5><span>Guaranteed Safe Checkout</span></h5>
                        <img src={Payment} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DescriptionDetails