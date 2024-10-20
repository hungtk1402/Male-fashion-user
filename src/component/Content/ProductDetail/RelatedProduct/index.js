import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import RenderStars from "../../RenderStars"

const RelatedProduct = ({ currentProductId, category }) => {
    const [relatedProducts, setRelatedProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:4000/products?category=${category}`)
            .then(response => response.json())
            .then(data => {
                const filteredProducts = data.filter(product => product.id !== currentProductId)
                setRelatedProducts(filteredProducts)
            })
            .catch(error => {
                console.error("Error fetching related products:", error)
            })
    }, [category, currentProductId])

    const handleDetailClick = (productId) => {
        navigate(`product/${productId}`)
    }

    return (
        <>
            <section className="related spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="related-title">Related Product</h3>
                        </div>
                    </div>
                    <div className="row">
                        {relatedProducts.map(product => (
                            <div key={product.id} className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                                <div className={`product__item ${product.label === 'Sale' ? 'sale' : ''}`}>
                                    <div className="product__item__pic set-bg">
                                        <img src={product.img1} alt="" />
                                        {product.label && <span className="label">{product.label}</span>}
                                        <ul className='product__hover'>
                                            <li><p className='far fa-heart'></p></li>
                                            <li><p className='fas fa-exchange-alt'></p></li>
                                            <li onClick={() => handleDetailClick(product.id)}><p className='fas fa-search'></p></li>
                                        </ul>
                                    </div>
                                    <div className='product__item__text'>
                                        <h6>{product.name}</h6>
                                        <div className='add-cart'>+ Add to cart</div>
                                        <RenderStars rating={product.rating} />
                                        <h5><span className='fas fa-dollar-sign'></span>{product.price}</h5>
                                        <div className='product__color__select'>
                                            {product.colors.map((color, index) => (
                                                <label className={color} key={index} style={{ backgroundColor: color }}>
                                                    <input type='radio' />
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default RelatedProduct