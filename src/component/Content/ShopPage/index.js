import { Link } from 'react-router-dom';
import './ShopPage.css';
import ShopSidebar from './ShopSidebar';
import ShopOption from './ShopOption';
import ProductShop from './ProductShop';
import { useState } from 'react';

const ShopPage = () => {
    const [sortOrder, setSortOrder] = useState('asc')
    const [priceFilter, setPriceFilter] = useState({ min: 0, max: Infinity })

    const handleSortChange = (order) => {
        setSortOrder(order)
    }

    const handleFilterByPrice = (minPrice, maxPrice) => {
        setPriceFilter({ min: minPrice, max: maxPrice })
    }

    return (
        <>
            <section className='breadcrumb-option'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='breadcrumb__text'>
                                <h4>Shop</h4>
                                <div className='breadcrumb__links'>
                                    <Link to='/'>Home</Link>
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='shop spad'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <ShopSidebar onFilterByPrice={handleFilterByPrice} />
                        </div>
                        <div className='col-lg-9'>
                            <div className='shop__product__option'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 col-sm-6'>
                                        <div className="shop__product__option__left">
                                            <p>Price range: <strong>{`$${priceFilter.min} - $${priceFilter.max}`}</strong></p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-6'>
                                        <ShopOption onSortChange={handleSortChange} />
                                    </div>
                                </div>
                            </div>
                            <ProductShop sortOrder={sortOrder} priceFilter={priceFilter} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopPage;
