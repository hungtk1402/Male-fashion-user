import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const ShopSidebar = ({ onFilterByPrice, onFilterByCategory, onFilterByBrand, onFilterByColor }) => {
    // State để quản lý mở/đóng accordion
    const [openAccordion, setOpenAccordion] = useState({
        categories: true,
        branding: true,
        filterPrice: true,
    });

    // Trạng thái bộ lọc được chọn
    const [selectedFilters, setSelectedFilters] = useState({
        category: null,
        brand: null,
        price: null,
    });

    // Hàm để bật/tắt accordion
    const toggleAccordion = (section) => {
        setOpenAccordion((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    // Hàm xử lý chọn/hủy chọn bộ lọc
    const handleCategoryClick = (category) => {
        const newCategory = selectedFilters.category === category ? null : category
        setSelectedFilters(prevState => ({ ...prevState, category: newCategory }))
        onFilterByCategory(newCategory || 'All')
    }

    const handleBrandClick = (brand) => {
        const newBrand = selectedFilters.brand === brand ? null : brand
        setSelectedFilters(prevState => ({ ...prevState, brand: newBrand }))
        onFilterByBrand(newBrand)
    }

    const handlePriceClick = (minPrice, maxPrice) => {
        const priceKey = `${minPrice}-${maxPrice}`
        const newPrice = selectedFilters.price === priceKey ? null : priceKey
        setSelectedFilters(prevState => ({ ...prevState, price: newPrice }))
        onFilterByPrice(newPrice ? minPrice : 0, newPrice ? maxPrice : Infinity)
    }

    // Dữ liệu cho các mục sidebar
    const sidebarItems = [
        {
            key: 'categories',
            title: 'Categories',
            content: (
                <div className='shop__sidebar__categories'>
                    <ul className='nice-scroll'>
                        <li onClick={() => handleCategoryClick('All')}><p className={selectedFilters.category === 'All' ? 'active-filter' : ''}>All</p></li>
                        <li onClick={() => handleCategoryClick('Bags')}><p className={selectedFilters.category === 'Bags' ? 'active-filter' : ''}>Bags</p></li>
                        <li onClick={() => handleCategoryClick('Clothing')}><p className={selectedFilters.category === 'Clothing' ? 'active-filter' : ''}>Clothing</p></li>
                        <li onClick={() => handleCategoryClick('Shoes')}><p className={selectedFilters.category === 'Shoes' ? 'active-filter' : ''}>Shoes</p></li>
                        <li onClick={() => handleCategoryClick('Accessories')}><p className={selectedFilters.category === 'Accessories' ? 'active-filter' : ''}>Accessories</p></li>
                    </ul>
                </div>
            )
        },
        {
            key: 'branding',
            title: 'Branding',
            content: (
                <div className='shop__sidebar__brand'>
                    <ul>
                        <li onClick={() => handleBrandClick('Louis Vuitton')}><p className={selectedFilters.brand === 'Louis Vuitton' ? 'active-filter' : ''}>Louis Vuitton</p></li>
                        <li onClick={() => handleBrandClick('Chanel')}><p className={selectedFilters.brand === 'Chanel' ? 'active-filter' : ''}>Chanel</p></li>
                        <li onClick={() => handleBrandClick('Hermes')}><p className={selectedFilters.brand === 'Hermes' ? 'active-filter' : ''}>Hermes</p></li>
                        <li onClick={() => handleBrandClick('Gucci')}><p className={selectedFilters.brand === 'Gucci' ? 'active-filter' : ''}>Gucci</p></li>
                    </ul>
                </div>
            )
        },
        {
            key: 'filterPrice',
            title: 'Filter Price',
            content: (
                <div className='shop__sidebar__price'>
                    <ul>
                        <li onClick={() => handlePriceClick(0, 50)}><p className={selectedFilters.price === '0-50' ? 'active-filter' : ''}>$0.00 - $50.00</p></li>
                        <li onClick={() => handlePriceClick(50, 100)}><p className={selectedFilters.price === '50-100' ? 'active-filter' : ''}>$50.00 - $100.00</p></li>
                        <li onClick={() => handlePriceClick(100, 150)}><p className={selectedFilters.price === '100-150' ? 'active-filter' : ''}>$100.00 - $150.00</p></li>
                        <li onClick={() => handlePriceClick(150, 200)}><p className={selectedFilters.price === '150-200' ? 'active-filter' : ''}>$150.00 - $200.00</p></li>
                        <li onClick={() => handlePriceClick(200, 250)}><p className={selectedFilters.price === '200-250' ? 'active-filter' : ''}>$200.00 - $250.00</p></li>
                        <li onClick={() => handlePriceClick(250, Infinity)}><p className={selectedFilters.price === '250-Infinity' ? 'active-filter' : ''}>$250.00+</p></li>
                    </ul>
                </div>
            )
        }
    ];

    return (
        <div className='shop__sidebar'>
            <div className='shop__sidebar__accordion'>
                <div className='accordion'>
                    {sidebarItems.map((item, index) => (
                        <div className='card' key={index}>
                            <div className='card-heading'>
                                <div className='row' onClick={() => toggleAccordion(item.key)}>
                                    <div className='sidebar__title col'>
                                        {item.title}
                                    </div>
                                    <div className={`col icon ${openAccordion[item.key] ? 'open' : ''}`}>
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                </div>
                            </div>
                            <CSSTransition
                                in={openAccordion[item.key]}
                                timeout={300}
                                classNames="accordion"
                                unmountOnExit
                            >
                                <div className='collapse show'>
                                    <div className='card-body'>
                                        {item.content}
                                    </div>
                                </div>
                            </CSSTransition>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ShopSidebar;
