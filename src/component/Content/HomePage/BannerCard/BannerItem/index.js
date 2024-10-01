import { Link } from 'react-router-dom';

const BannerItem = ({ imgSrc, altText, title, link, additionalClasses = '' }) => {
    return (
        <div className={`banner__item ${additionalClasses}`}>
            <div className='banner__item__pic'>
                <img src={imgSrc} alt={altText} />
            </div>
            <div className='banner__item__text'>
                <h2>{title}</h2>
                <Link to={link}>Shop now</Link>
            </div>
        </div>
    );
};

export default BannerItem;
