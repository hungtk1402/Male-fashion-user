import Carousel from 'react-bootstrap/Carousel';
import Banner1 from '../../../../img/banner1.jpg';
import Banner2 from '../../../../img/banner2.jpg';

const carouselData = [
    {
        collectionName: 'Summer Collection',
        mainTitle: 'Fall - Winter Collections 2030',
        description:
            'A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.',
        imageUrl: Banner1,
    },
    {
        collectionName: 'Spring Collection',
        mainTitle: 'Spring Fashion 2031',
        description:
            'Discover the latest trends and styles for the upcoming spring season.',
        imageUrl: Banner2,
    },
];

const BannerCarousel = () => {
    return (
        <div className='carousel-container'>
            <Carousel fade slide={false} nextLabel="" prevLabel="" indicators={false} interval={5000}>
                {carouselData.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={slide.imageUrl}
                            alt={`Collection ${index + 1}`}
                        />
                        <div className='carousel-content'>
                            <h3 className="line collection-name">{slide.collectionName}</h3>
                            <h1 className="line main-title">{slide.mainTitle}</h1>
                            <p className="line description">{slide.description}</p>
                            <a href="/shop" className="line shop-now-button">
                                Shop Now <span className='fas fa-arrow-right'></span>
                            </a>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default BannerCarousel;
