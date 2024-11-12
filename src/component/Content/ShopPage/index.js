import { Link } from 'react-router-dom';
import { useState } from 'react';
import './ShopPage.css';
import ShopSidebar from './ShopSidebar';
import ShopOption from './ShopOption';
import ProductShop from './ProductShop';
import PromptModal from '../PromptModal';

const ShopPage = () => {
    const [sortOrder, setSortOrder] = useState('asc')
    const [priceFilter, setPriceFilter] = useState({ min: 0, max: Infinity })
    const [categoryFilter, setCategoryFilter] = useState('All')
    const [brandFilter, setBrandFilter] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const handleSortChange = (order) => setSortOrder(order)

    const hanldeFilterByCatgory = (category) => setCategoryFilter(category)

    const handleFilterByBrand = (brand) => setBrandFilter(brand)

    const handleFilterByPrice = (minPrice, maxPrice) => setPriceFilter({ min: minPrice, max: maxPrice })

    const handleModal = (modalState) => setShowModal(modalState)

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
                            <ShopSidebar
                                onFilterByCategory={hanldeFilterByCatgory}
                                onFilterByBrand={handleFilterByBrand}
                                onFilterByPrice={handleFilterByPrice}
                            />
                        </div>
                        <div className='col-lg-9'>
                            <ShopOption onSortChange={handleSortChange} />
                            <ProductShop
                                sortOrder={sortOrder}
                                categoryFilter={categoryFilter}
                                brandFilter={brandFilter}
                                priceFilter={priceFilter}
                                handleModal={handleModal}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <PromptModal show={showModal} onClose={() => handleModal(false)} />
        </>
    );
};

export default ShopPage;
