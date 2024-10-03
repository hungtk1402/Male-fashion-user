import { useState } from 'react';
import Product1 from '../../../../img/product/product-1.jpg';
import Product2 from '../../../../img/product/product-2.jpg';
import Product3 from '../../../../img/product/product-3.jpg';
import Product4 from '../../../../img/product/product-4.jpg';
import Product5 from '../../../../img/product/product-5.jpg';
import Product6 from '../../../../img/product/product-6.jpg';
import Product7 from '../../../../img/product/product-7.jpg';
import Product8 from '../../../../img/product/product-8.jpg';

const products = [
    { id: 1, img: Product1, label: 'New', name: 'Piqué Biker Jacket', price: '$67.24', filterClass: 'new-arrivals', rating: 4, colors: ['black', 'grey'] },
    { id: 2, img: Product2, name: 'Multi-pocket Chest Bag', price: '$43.48', filterClass: 'hot-sales', rating: 4.5, colors: ['black', 'grey'] },
    { id: 3, img: Product3, label: 'Sale', name: 'Multi-pocket Chest Bag', price: '$43.48', filterClass: 'new-arrivals', rating: 5, colors: ['black', 'grey'] },
    { id: 4, img: Product4, name: 'Diagonal Textured Cap', price: '$60.9', filterClass: 'hot-sales', rating: 4, colors: ['black', 'grey'] },
    { id: 5, img: Product5, name: 'Lether Backpack', price: '$31.37', filterClass: 'new-arrivals', rating: 4.5, colors: ['black', 'grey'] },
    { id: 6, img: Product6, label: 'Sale', name: 'Ankle Boots', price: '$31.37', filterClass: 'hot-sales', rating: 5, colors: ['black', 'grey'] },
    { id: 7, img: Product7, name: 'T-shirt Contrast Pocket', price: '$49.66', filterClass: 'new-arrivals', rating: 4, colors: ['black', 'grey'] },
    { id: 8, img: Product8, label: 'Sale', name: 'Basic Flowing Scarf', price: '$31.37', filterClass: 'hot-sales', rating: 5, colors: ['black', 'grey'] },
];

// Hàm hiển thị sao dựa trên giá trị rating
const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;  // Kiểm tra nếu là 0.5
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <>
            {Array(fullStars).fill(<i className="fas fa-star"></i>)}
            {halfStar && <i className="fas fa-star-half-alt"></i>}
            {Array(emptyStars).fill(<i className="far fa-star"></i>)}
        </>
    );
};

const ProductList = () => {
    const [activeTab, setActiveTab] = useState('best-seller')
    const [animationClass, setAnimationClass] = useState('')
    const [isTransitioning, setIsTransitioning] = useState(false)

    const tabs = [
        { name: 'Best Seller', key: 'best-seller' },
        { name: 'New Arrivals', key: 'new-arrivals' },
        { name: 'Hot Sales', key: 'hot-sales' },
    ]

    const filteredProducts = products.filter(product => {
        if (activeTab === 'best-seller') return true;
        return product.filterClass === activeTab
    })


    // Handle Tab Change and Animation
    const handleTabChange = (tabKey) => {
        if (tabKey !== activeTab && !isTransitioning) {
            setIsTransitioning(true); // Lock transitions until animation is done
            setAnimationClass('animate__animated animate__fadeOut'); // Start fade out animation

            // Wait for fade out animation to complete (adjust timeout based on the duration of your animation)
            setTimeout(() => {
                setActiveTab(tabKey); // Change the tab after fade out completes
                setAnimationClass('animate__animated animate__fadeIn '); // Fade in new content
                setTimeout(() => {
                    setAnimationClass(''); // Reset animation class after fade in
                    setIsTransitioning(false); // Unlock transitions
                }, 500); // Duration of fade-in animation (in milliseconds)
            }, 500); // Duration of fade-out animation (in milliseconds)
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
                                        <img src={product.img} alt={`product-${product.id}`} />
                                        {product.label && <span className='label'>{product.label}</span>}
                                        <ul className='product__hover'>
                                            <li><p className='far fa-heart'></p></li>
                                            <li><p className='fas fa-search'></p></li>
                                        </ul>
                                    </div>
                                    <div className='product__item__text'>
                                        <h6>{product.name}</h6>
                                        <div className='add-cart'>+ Add to Cart</div>
                                        <div className='rating'>
                                            {renderStars(product.rating)}
                                        </div>
                                        <h5>{product.price}</h5>
                                        <div className='product__color__select'>
                                            {product.colors.map((color, index) => (
                                                <label key={index} className={color}>
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
