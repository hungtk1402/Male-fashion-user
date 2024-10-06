import { Link } from 'react-router-dom';
import './ShopPage.css';
import ShopSidebar from './ShopSidebar';
import ShopOption from './ShopOption';
import ProductShop from './ProductShop';

const ShopPage = () => {

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
                            <ShopSidebar />
                        </div>
                        <div className='col-lg-9'>
                            <div className='shop__product__option'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-6 col-sm-6'>
                                        <div className="shop__product__option__left">
                                            <p>Showing 1-12 of 126 results</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-6'>
                                        <ShopOption />
                                    </div>
                                </div>
                            </div>
                            <ProductShop />
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='product__pagination'>
                                        <a className='active' href='#'>1</a>
                                        <a href='#'>2</a>
                                        <a href='#'>3</a>
                                        <span>...</span>
                                        <a href='#'>21</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopPage;
