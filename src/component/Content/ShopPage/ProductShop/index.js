import Product1 from '../../../../img/product/product-1.jpg'
import Product2 from '../../../../img/product/product-2.jpg'
import Product3 from '../../../../img/product/product-3.jpg'
import Product4 from '../../../../img/product/product-4.jpg'
import Product5 from '../../../../img/product/product-5.jpg'
import Product6 from '../../../../img/product/product-6.jpg'
import Product7 from '../../../../img/product/product-7.jpg'
import Product8 from '../../../../img/product/product-8.jpg'
import Product9 from '../../../../img/product/product-9.jpg'
import Product10 from '../../../../img/product/product-10.jpg'
import Product11 from '../../../../img/product/product-11.jpg'
import Product12 from '../../../../img/product/product-12.jpg'
import Product13 from '../../../../img/product/product-13.jpg'
import Product14 from '../../../../img/product/product-14.jpg'

const products = [
    { id: 1, img: Product1, label: 'New', name: 'Piqué Biker Jacket', price: '$67.24', rating: 4, colors: ['black', 'grey'] },
    { id: 2, img: Product2, name: 'Multi-pocket Chest Bag', price: '$43.48', rating: 4.5, colors: ['black', 'grey'] },
    { id: 3, img: Product3, label: 'Sale', name: 'Multi-pocket Chest Bag', price: '$43.48', rating: 4.5, colors: ['black', 'grey'] },
    { id: 4, img: Product4, name: 'Diagonal Textured Cap', price: '$60.9', rating: 4, colors: ['black', 'grey'] },
    { id: 5, img: Product5, name: 'Lether Backpack', price: '$31.37', rating: 4.5, colors: ['black', 'grey'] },
    { id: 6, img: Product6, label: 'Sale', name: 'Ankle Boots', price: '$31.37', rating: 5, colors: ['black', 'grey'] },
    { id: 7, img: Product7, name: 'T-shirt Contrast Pocket', price: '$49.66', rating: 4, colors: ['black', 'grey'] },
    { id: 8, img: Product8, label: 'Sale', name: 'Basic Flowing Scarf', price: '$31.37', rating: 5, colors: ['black', 'grey'] },
    { id: 9, img: Product9, name: 'Piqué Biker Jacket', price: '$67.24', rating: 4, colors: ['black', 'grey'] },
    { id: 10, img: Product10, label: 'Sale', name: 'Multi-pocket Chest Bag', price: '$43.48', rating: 4.5, colors: ['black', 'grey'] },
    { id: 11, img: Product11, name: 'Diagonal Textured Cap', price: '$60.9', rating: 4.5, colors: ['black', 'grey'] },
    { id: 12, img: Product12, label: 'Sale', name: 'Ankle Boots', price: '$98.49', rating: 4.5, colors: ['black', 'grey'] },
    { id: 13, img: Product13, name: 'T-shirt Contrast Pocket', price: '$49.66', rating: 5, colors: ['black', 'grey'] },
    { id: 14, img: Product14, name: 'Basic Flowing Scarf', price: '$26.28', rating: 4, colors: ['black', 'grey'] },
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

const ProductShop = () => {
    return (
        <>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className='col-lg-4 col-md-6 col-sm-6'>
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
                                <div className='add-cart'>+ Add to cart</div>
                                <div className='rating'>
                                    {renderStars(product.rating)}
                                </div>
                                <h5>{product.price}</h5>
                                <div className='product__color__select'>
                                    {product.colors.map((color, index) => (
                                        <label className={color} key={index}>
                                            <input type='radio' />
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductShop