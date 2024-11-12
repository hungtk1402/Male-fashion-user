import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './HomePage.css'
import BannerCarousel from './BannerCarousel'
import BannerCard from './BannerCard'
import ProductList from './ProductList'
import ProductSale from './ProductSale'
import InstagramComponent from './Instagram'
import BlogComponent from './BlogComponent'
import PromptModal from '../PromptModal';

const HomePage = () => {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        AOS.init({
            duration: 800,  // Animation duration (in milliseconds)
            easing: 'ease-in-out', // Easing of the animations
            once: true,  // Whether animation should happen only once or every time you scroll
        });
    }, []);

    const toggleModal = (modalState) => {
        setShowModal(modalState)
    }

    return (
        <>
            <div data-aos="fade-in">
                <BannerCarousel />
            </div>
            <div data-aos="fade-in" data-aos-delay="200">
                <BannerCard />
            </div>
            <div data-aos="fade-in" data-aos-delay="500">
                <ProductList toggleModal={toggleModal} />
            </div>
            <div data-aos="fade-in" data-aos-delay="500">
                <ProductSale />
            </div>
            <div data-aos="fade-in" data-aos-delay="500">
                <InstagramComponent />
            </div>
            <div data-aos="fade-in" data-aos-delay="500">
                <BlogComponent />
            </div>
            <PromptModal show={showModal} onClose={() => toggleModal(false)} />
        </>
    )
}

export default HomePage