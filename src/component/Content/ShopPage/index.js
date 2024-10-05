import { Link } from 'react-router-dom';
import { useState } from 'react';  
import ShopSidebar from './ShopSidebar';
import './ShopPage.css';

const ShopPage = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false); 

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

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
                                        <div className='shop__product__option__right'>
                                            <p>Sort by Price:</p>
                                            <div
                                                className={`nice-select ${dropdownOpen ? 'open' : ''}`}  // <-- Toggle open class
                                                onClick={toggleDropdown}
                                                tabIndex="0"
                                            >
                                                <button className="current">Low To High</button>
                                                {dropdownOpen && (
                                                    <ul className="list">
                                                        <li className="option selected">Low To High</li>
                                                        <li className="option">$0 - $55</li>
                                                        <li className="option">$55 - $100</li>
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
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
