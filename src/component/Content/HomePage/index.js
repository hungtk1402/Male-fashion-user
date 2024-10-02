import './HomePage.css'
import BannerCarousel from './BannerCarousel'
import BannerCard from './BannerCard'
import ProductList from './ProductList'

const HomePage = () => {
    return (
        <>
            <BannerCarousel></BannerCarousel>
            <BannerCard></BannerCard>
            <ProductList></ProductList>
        </>
    )
}

export default HomePage