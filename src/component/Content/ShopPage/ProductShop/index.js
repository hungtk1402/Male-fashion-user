import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RenderStars from '../../RenderStars';


const ProductShop = ({ sortOrder, priceFilter, categoryFilter, brandFilter }) => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data)
            })
            .catch(error => {
                console.error("Error fetching product data:", error);
            })
    }, [])

    const handleDetailClick = (productId) => {
        navigate(`/product/${productId}`)
    }

    // Apply filtering 
    const filteredProducts = products.filter(product => {
        const price = parseFloat(product.price.replace('$', ''))
        const isPriceMatch = price >= priceFilter.min && price <= priceFilter.max
        const isCategoryMatch = categoryFilter === 'All' || product.category === categoryFilter
        const isBrandMatch = !brandFilter || product.brand === brandFilter

        return isBrandMatch && isCategoryMatch && isPriceMatch
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

        // Nếu tổng số trang nhỏ hơn hoặc bằng 5, hiển thị đầy đủ các trang
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
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
        } else {
            // Luôn hiển thị trang đầu
            pages.push(
                <div
                    key="first"
                    className={`pages ${currentPage === 1 ? 'active' : ''}`}
                    onClick={() => handlePageChange(1)}
                >
                    1
                </div>
            );

            // Hiển thị dấu ... nếu trang hiện tại lớn hơn 3
            if (currentPage > 3) {
                pages.push(<span key="dots-1">...</span>);
            }

            // Hiển thị 3 trang liên tiếp (trang hiện tại, trước và sau)
            for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
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

            // Hiển thị dấu ... nếu trang hiện tại không phải là trang áp chót
            if (currentPage < totalPages - 2) {
                pages.push(<span key="dots-2">...</span>);
            }

            // Hiển thị trang cuối
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
                                <div className='product__item__pic set-bg' >
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
                                    <div className='add-cart'>+ Add to cart</div>
                                    <div className='rating'>
                                        <RenderStars rating={product.rating} />
                                    </div>
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
