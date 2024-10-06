import { useState } from 'react';
import Product1 from '../../../../img/product/product-1.jpg';
import Product2 from '../../../../img/product/product-2.jpg';
import Product3 from '../../../../img/product/product-3.jpg';
import Product4 from '../../../../img/product/product-4.jpg';
import Product5 from '../../../../img/product/product-5.jpg';
import Product6 from '../../../../img/product/product-6.jpg';
import Product7 from '../../../../img/product/product-7.jpg';
import Product8 from '../../../../img/product/product-8.jpg';
import Product9 from '../../../../img/product/product-9.jpg';
import Product10 from '../../../../img/product/product-10.jpg';
import Product11 from '../../../../img/product/product-11.jpg';
import Product12 from '../../../../img/product/product-12.jpg';
import Product13 from '../../../../img/product/product-13.jpg';
import Product14 from '../../../../img/product/product-14.jpg';

const products = [
    { id: 1, img: Product1, label: 'New', name: 'Piqué Biker Jacket', price: '$67.24', rating: 4, colors: ['black', 'grey'], filterClass: 'new-arrivals' },
    { id: 2, img: Product2, name: 'Multi-pocket Chest Bag', price: '$43.48', rating: 4.5, colors: ['black', 'grey'], filterClass: 'hot-sales' },
    { id: 3, img: Product3, label: 'Sale', name: 'Multi-pocket Chest Bag', price: '$43.48', rating: 4.5, colors: ['black', 'grey'], filterClass: 'new-arrivals' },
    { id: 4, img: Product4, name: 'Diagonal Textured Cap', price: '$60.9', rating: 4, colors: ['black', 'grey'], filterClass: 'hot-sales' },
    { id: 5, img: Product5, name: 'Lether Backpack', price: '$31.37', rating: 4.5, colors: ['black', 'grey'], filterClass: 'new-arrivals' },
    { id: 6, img: Product6, label: 'Sale', name: 'Ankle Boots', price: '$31.37', rating: 5, colors: ['black', 'grey'], filterClass: 'hot-sales' },
    { id: 7, img: Product7, name: 'T-shirt Contrast Pocket', price: '$49.66', rating: 4, colors: ['black', 'grey'], filterClass: 'new-arrivals' },
    { id: 8, img: Product8, label: 'Sale', name: 'Basic Flowing Scarf', price: '$31.37', rating: 5, colors: ['black', 'grey'], filterClass: 'hot-sales' },
    { id: 9, img: Product9, name: 'Piqué Biker Jacket', price: '$67.24', rating: 4, colors: ['black', 'grey'], filterClass: 'new-arrivals' },
    { id: 10, img: Product10, label: 'Sale', name: 'Multi-pocket Chest Bag', price: '$43.48', rating: 4.5, colors: ['black', 'grey'], filterClass: 'hot-sales' },
    { id: 11, img: Product11, name: 'Diagonal Textured Cap', price: '$60.9', rating: 4.5, colors: ['black', 'grey'], filterClass: 'new-arrivals' },
    { id: 12, img: Product12, label: 'Sale', name: 'Ankle Boots', price: '$98.49', rating: 4.5, colors: ['black', 'grey'], filterClass: 'hot-sales' },
    { id: 13, img: Product13, name: 'T-shirt Contrast Pocket', price: '$49.66', rating: 5, colors: ['black', 'grey'], filterClass: 'new-arrivals' },
    { id: 14, img: Product14, name: 'Basic Flowing Scarf', price: '$26.28', rating: 4, colors: ['black', 'grey'], filterClass: 'hot-sales' },
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

const ProductShop = ({ sortOrder, priceFilter }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    // Apply filtering by price
    const filteredProducts = products.filter(product => {
        const price = parseFloat(product.price.replace('$', ''));
        return price >= priceFilter.min && price <= priceFilter.max;
    });

    // Apply sorting by price
    const sortedProducts = filteredProducts.sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });

    // Tính tổng số trang
    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

    // Lấy danh sách sản phẩm dựa trên trang hiện tại
    const currentProducts = sortedProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    // Hàm thay đổi trang
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Render pagination với logic hiển thị
    const renderPagination = () => {
        const pages = [];

        // Luôn hiển thị trang đầu
        if (currentPage > 3) {
            pages.push(
                <div
                    key="first"
                    className={`pages`}
                    onClick={() => handlePageChange(1)}
                >
                    1
                </div>
            );
            pages.push(<span key="dots-1">...</span>);
        }

        // Hiển thị các trang chính
        for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
            pages.push(
                <div
                    key={i}
                    className={`pages ${currentPage === i ? 'active' : ''}`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </div>
            );
        }

        // Hiển thị dấu ... nếu không phải trang cuối cùng
        if (currentPage < totalPages - 2) {
            pages.push(<span key="dots-2">...</span>);
            pages.push(
                <div
                    key={totalPages}
                    className={`pages ${currentPage === totalPages ? 'active' : ''}`}
                    onClick={() => handlePageChange(totalPages)}
                >
                    {totalPages}
                </div>
            );
        }

        return pages;
    };

    return (
        <>
            <div className='product-list-wrapper'>
                <div className="row product-list">
                    {currentProducts.map(product => (
                        <div key={product.id} className={`col-lg-4 col-md-6 col-sm-6c ${product.filterClass}`}>
                            <div className={`product__item ${product.label === 'Sale' ? 'sale' : ''}`}>
                                <div className='product__item__pic set-bg'>
                                    <img src={product.img} alt={`product-${product.id}`} />
                                    {product.label && <span className='label'>{product.label}</span>}
                                    <ul className='product__hover'>
                                        <li><p className='far fa-heart'></p></li>
                                        <li><p className='fas fa-exchange-alt'></p></li>
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
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='product__pagination'>
                        {renderPagination()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductShop;
