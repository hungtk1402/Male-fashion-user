import Product1 from '../../../../img/product-1.jpg';
import Product2 from '../../../../img/product-2.jpg';
import Product3 from '../../../../img/product-3.jpg';
import Product4 from '../../../../img/product-4.jpg';
import Product5 from '../../../../img/product-5.jpg';
import Product6 from '../../../../img/product-6.jpg';
import Product7 from '../../../../img/product-7.jpg';
import Product8 from '../../../../img/product-8.jpg';

const products = [
    { id: 1, img: Product1, label: 'New', name: 'Piqué Biker Jacket', price: '$67.24', category: 'new-arrivals' },
    { id: 2, img: Product2, name: 'Multi-pocket Chest Bag', price: '$43.48', category: 'hot-sales' },
    { id: 3, img: Product3, label: 'Sale', name: 'Multi-pocket Chest Bag', price: '$43.48', category: 'new-arrivals' },
    { id: 4, img: Product4, name: 'Diagonal Textured Cap', price: '$60.9', category: 'hot-sales' },
    { id: 5, img: Product5, name: 'Lether Backpack', price: '$31.37', category: 'new-arrivals' },
    { id: 6, img: Product6, label: 'Sale', name: 'Ankle Boots', price: '$31.37', category: 'hot-sales' },
    { id: 7, img: Product7, name: 'T-shirt Contrast Pocket', price: '$49.66', category: 'new-arrivals' },
    { id: 8, img: Product8, label: 'Sale', name: 'Basic Flowing Scarf', price: '$31.37', category: 'hot-sales' },
];

const ProductList = () => {
    return (
        <>
            <section className='product spad'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-12">
                            <ul className="filter__controls">
                                <li className="active">Best Seller</li>
                                <li data-filter=".new-arrivals">New Arrivals</li>
                                <li data-filter=".hot-sales">Hot Sales</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row product__filter">
                        {products.map(product => (
                            <div key={product.id} className={`col-lg-3 col-md-6 col-sm-6 mix ${product.category}`}>
                                <div className='product__item'>
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
                                            {Array(5).fill(<i className="far fa-star"></i>)}
                                        </div>
                                        <h5>{product.price}</h5>
                                        <div className='product__color__select'>
                                            <label><input type='radio' /></label>
                                            <label className='active black'><input type='radio' /></label>
                                            <label className='grey'><input type='radio' /></label>
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
