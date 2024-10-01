import React from 'react';
import BannerItem from './BannerItem';
import Card1 from '../../../../img/imgCard1.jpg';
import Card2 from '../../../../img/imgCard2.jpg';
import Card3 from '../../../../img/imgCard3.jpg';

const bannerData = [
    {
        imgSrc: Card1,
        altText: 'Clothing Collection',
        title: 'Clothing Collections 2030',
        link: '/shop',
        additionalClasses: ''
    },
    {
        imgSrc: Card2,
        altText: 'Accessories',
        title: 'Accessories',
        link: '/shop',
        additionalClasses: 'banner__item--middle raised-item'
    },
    {
        imgSrc: Card3,
        altText: 'Shoes Collection',
        title: 'Shoes Spring 2030',
        link: '/shop',
        additionalClasses: 'banner__item--last'
    }
];

const BannerCard = () => {
    return (
        <section className='banner spad'>
            <div className='container'>
                <div className='row'>
                    {bannerData.map((item, index) => (
                        <div
                            className={`col-lg-${index === 1 ? 5 : 7} ${index === 0 ? 'offset-lg-4' : ''}`}
                            key={index}
                        >
                            <BannerItem
                                imgSrc={item.imgSrc}
                                altText={item.altText}
                                title={item.title}
                                link={item.link}
                                additionalClasses={item.additionalClasses}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BannerCard;
