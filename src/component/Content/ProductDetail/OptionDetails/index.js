import { useContext, useState } from "react"
import { CartContext } from "../../../../context/CartContext"
import { UserContext } from "../../../../context/UserContext"
import PromptModal from "../../PromptModal"

const OptionDetails = ({ products }) => {
    const {addToCart} = useContext(CartContext)
    const {user} = useContext(UserContext)
    const [showModal, setShowModal] = useState(false)

    const handleAddToCart = () => {
        if (user) {
            addToCart(products)
        } else {
            localStorage.setItem('redirectPath', `/product/${products.id}`)
            setShowModal(true)
        }
    }

    return (
        <>
            <div className="product__details__option">
                {products.sizes && products.sizes.length > 0 &&
                    (<div className="product__details__option__size">
                        <span>Size:</span>
                        {products.sizes.map((size, index) => (
                            <label key={index}>{size}
                                <input type="radio" />
                            </label>
                        ))}
                    </div>)}
                <div className="product__details__option__color">
                    <span>Color:</span>
                    {products.colors.map((color, index) => (
                        <label key={index} className={color} style={{ backgroundColor: color }}>
                            <input type="radio" />
                        </label>
                    ))}
                </div>
                <div className="product__details__cart__option">
                    <button className="primary-btn" onClick={handleAddToCart}>Add to cart</button>
                </div>
                <div className="product__details__btns__option">
                    <div className='option'><i className='far fa-heart'></i> Add to wishlish</div>
                    <div className='option'><i className='fa fa-exchange'></i> Add to compare</div>
                </div>
            </div>
            <PromptModal show={showModal} onClose={() => setShowModal(false)} />
        </>
    )
}

export default OptionDetails