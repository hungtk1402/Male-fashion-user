const ImageDetail = ({ images, selectedImage, imageClick }) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-3 col-md-3">
                    <ul className="nav nav-tabs">
                        {images.map((image, index) => (
                            <li className="nav-item" key={index}>
                                <div className="nav-link" onClick={() => imageClick(image)}>
                                    <img src={image} className="product__thumb__pic" alt="" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-6 col-md-9">
                    <div className="tab-content">
                        <div className="product__details__pic__item">
                            <img src={selectedImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageDetail