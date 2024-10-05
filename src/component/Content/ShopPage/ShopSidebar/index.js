import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const ShopSidebar = () => {
    // State để quản lý mở/đóng accordion
    const [openAccordion, setOpenAccordion] = useState({
        categories: true,
        branding: true,
        filterPrice: true,
        size: true,
        color: true,
        tags: true
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
                        <li><a href='/shop'>Men</a></li>
                        <li><a href='/shop'>Women</a></li>
                        <li><a href='/shop'>Bags</a></li>
                        <li><a href='/shop'>Clothing</a></li>
                        <li><a href='/shop'>Shoes</a></li>
                        <li><a href='/shop'>Accessories</a></li>
                        <li><a href='/shop'>Kids</a></li>
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
                        <li><a href='/shop'>Louis Vuitton</a></li>
                        <li><a href='/shop'>Chanel</a></li>
                        <li><a href='/shop'>Hermes</a></li>
                        <li><a href='/shop'>Gucci</a></li>
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
                        <li><a href='/shop'>$0.00 - $50.00</a></li>
                        <li><a href='/shop'>$50.00 - $100.00</a></li>
                        <li><a href='/shop'>$100.00 - $150.00</a></li>
                        <li><a href='/shop'>$150.00 - $200.00</a></li>
                        <li><a href='/shop'>$200.00 - $250.00</a></li>
                        <li><a href='/shop'>$250.00+</a></li>
                    </ul>
                </div>
            )
        },
        {
            key: 'size',
            title: 'Size',
            content: (
                <div className='shop__sidebar__size'>
                    <label>xs<input type="radio" id="xs" /></label>
                    <label>s<input type="radio" id="sm" /></label>
                    <label>m<input type="radio" id="md" /></label>
                    <label>xl<input type="radio" id="xl" /></label>
                    <label>2xl<input type="radio" id="2xl" /></label>
                    <label>xxl<input type="radio" id="xxl" /></label>
                    <label>3xl<input type="radio" id="3xl" /></label>
                    <label>4xl<input type="radio" id="4xl" /></label>
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
                    <a href='/shop'>Product</a>
                    <a href='/shop'>Bags</a>
                    <a href='/shop'>Shoes</a>
                    <a href='/shop'>Fashion</a>
                    <a href='/shop'>Clothing</a>
                    <a href='/shop'>Hats</a>
                    <a href='/shop'>Accessories</a>
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
                                <div
                                    className='sidebar__title'
                                    onClick={() => toggleAccordion(item.key)}
                                >
                                    {item.title}
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
