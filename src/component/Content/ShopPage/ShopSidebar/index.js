import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const ShopSidebar = ({ onFilterByPrice }) => {
    // State để quản lý mở/đóng accordion
    const [openAccordion, setOpenAccordion] = useState({
        categories: true,
        branding: true,
        filterPrice: true,
        size: false,
        color: false,
        tags: false
    });

    // Hàm để bật/tắt accordion
    const toggleAccordion = (section) => {
        setOpenAccordion((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    // Dữ liệu cho các mục sidebar
    const sidebarItems = [
        {
            key: 'categories',
            title: 'Categories',
            content: (
                <div className='shop__sidebar__categories'>
                    <ul className='nice-scroll'>
                        <li><p>All</p></li>
                        <li><p>Bags</p></li>
                        <li><p>Clothing</p></li>
                        <li><p>Shoes</p></li>
                        <li><p>Accessories</p></li>
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
                        <li><p>Louis Vuitton</p></li>
                        <li><p>Chanel</p></li>
                        <li><p>Hermes</p></li>
                        <li><p>Gucci</p></li>
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
                        <li onClick={() => onFilterByPrice(0, 50)}><p>$0.00 - $50.00</p></li>
                        <li onClick={() => onFilterByPrice(50, 100)}><p>$50.00 - $100.00</p></li>
                        <li onClick={() => onFilterByPrice(100, 150)}><p>$100.00 - $150.00</p></li>
                        <li onClick={() => onFilterByPrice(150, 200)}><p>$150.00 - $200.00</p></li>
                        <li onClick={() => onFilterByPrice(200, 250)}><p>$200.00 - $250.00</p></li>
                        <li onClick={() => onFilterByPrice(250, Infinity)}><p>$250.00+</p></li>
                    </ul>
                </div>
            )
        },
        {
            key: 'color',
            title: 'Color',
            content: (
                <div className='shop__sidebar__color'>
                    <label className="c-1"><input type="radio" id="sp-1" /></label>
                    <label className="c-2"><input type="radio" id="sp-2" /></label>
                    <label className="c-3"><input type="radio" id="sp-3" /></label>
                    <label className="c-4"><input type="radio" id="sp-4" /></label>
                    <label className="c-5"><input type="radio" id="sp-5" /></label>
                    <label className="c-6"><input type="radio" id="sp-6" /></label>
                    <label className="c-7"><input type="radio" id="sp-7" /></label>
                    <label className="c-8"><input type="radio" id="sp-8" /></label>
                    <label className="c-9"><input type="radio" id="sp-9" /></label>
                </div>
            )
        },
        {
            key: 'tags',
            title: 'Tags',
            content: (
                <div className='shop__sidebar__tags'>
                    <p>Product</p>
                    <p>Bags</p>
                    <p>Shoes</p>
                    <p>Fashion</p>
                    <p>Clothing</p>
                    <p>Hats</p>
                    <p>Accessories</p>
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
                                        <i class="fas fa-angle-down"></i>
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
