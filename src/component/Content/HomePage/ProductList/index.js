import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../../context/CartContext';
import { UserContext } from '../../../../context/UserContext';
import RenderStars from '../../RenderStars';

const ProductList = ({ toggleModal }) => {
    const [products, setProducts] = useState([])
    const [activeTab, setActiveTab] = useState('best-seller')
    const [animationClass, setAnimationClass] = useState('')
    const [isTransitioning, setIsTransitioning] = useState(false)
    const { addToCart } = useContext(CartContext)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching product data:", error))
    }, [])

    const tabs = [
        { name: 'Best Seller', key: 'best-seller' },
        { name: 'New Arrivals', key: 'new-arrivals' },
        { name: 'Hot Sales', key: 'hot-sales' },
    ]

    const filteredProducts = products
        .filter(product => activeTab === 'best-seller' || product.filterClass === activeTab)
        .slice(0, 8)

    const handleDetailClick = (productId) => navigate(`/product/${productId}`)

    const handleAddToCart = (product) => user ? addToCart(product) : toggleModal(true)

    // Handle Tab Change and Animation
    const handleTabChange = (tabKey) => {
        if (tabKey !== activeTab && !isTransitioning) {
            setIsTransitioning(true); // Khóa chuyển tiếp cho đến khi hoạt ảnh hoàn tất
            setAnimationClass('animate__animated animate__fadeOut');

            // Chờ cho đến khi hiệu ứng mờ dần hoàn tất (điều chỉnh thời gian chờ dựa trên thời lượng hiệu ứng)
            setTimeout(() => {
                setActiveTab(tabKey); // Change the tab after fade out completes
                setAnimationClass('animate__animated animate__fadeIn ');
                setTimeout(() => {
                    setAnimationClass(''); // Đặt lại lớp hoạt ảnh sau khi mờ dần
                    setIsTransitioning(false); // Mở khóa chuyển tiếp
                }, 500);
            }, 500); // Thời lượng animation tính bằng giây
        }
    }

    return (
        <>
            <section className='product spad'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-12">
                            <ul className="filter__controls">
                                {tabs.map(tab => (
                                    <li
                                        key={tab.key}
                                        className={activeTab === tab.key ? 'active' : ''}
                                        onClick={() => handleTabChange(tab.key)}
                                    >
                                        {tab.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={`row product__filter ${animationClass}`}>
                        {filteredProducts.map(product => (
                            <div key={product.id} className={`col-lg-3 col-md-6 col-sm-6 mix ${product.filterClass}`}>
                                <div className={`product__item ${product.label === 'Sale' ? 'sale' : ''}`}>
                                    <div className='product__item__pic set-bg'>
                                        <img src={product.img1} alt={`product-${product.id}`} />
                                        {product.label && <span className='label'>{product.label}</span>}
                                        <ul className='product__hover'>
                                            <li><p className='far fa-heart'></p></li>
                                            <li><p className='fas fa-exchange-alt'></p></li>
                                            <li onClick={() => handleDetailClick(product.id)}><p className='fas fa-search'></p></li>
                                        </ul>
                                    </div>
                                    <div className='product__item__text'>
                                        <h6>{product.name}</h6>
                                        <div className='add-cart' onClick={() => handleAddToCart(product)}>+ Add to Cart</div>
                                        <RenderStars rating={product.rating} />
                                        <h5>{product.price}</h5>
                                        <div className='product__color__select'>
                                            {product.colors.map((color, index) => (
                                                <label key={index} className={color} style={{ backgroundColor: color }}>
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
    );
};

export default ProductList;
