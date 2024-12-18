import RenderStars from "../../RenderStars"

const InfoDetails = ({ products }) => {
    return(
        <>
            <div className="details__content">
                <h4>{products.name}</h4>
                <div className="details__rating">
                    <RenderStars rating={products.rating} />
                    <p>{products.reviewCount} Review</p>
                </div>
                <h3>
                    <p className="fas fa-dollar-sign price"></p>{products.price}
                    <span>{products.previousPrice}</span>
                </h3>
                <p>{products.shortDescription}</p>
                <div className="details__text">
                    <p><span>Categories: </span>{products.category}</p>
                    <p><span>Quantity: </span>{products.quantity}</p>
                </div>
            </div>
        </>
    )
}

export default InfoDetails