import './HomePage.css'
import BannerCarousel from './BannerCarousel'
import BannerCard from './BannerCard'
import ProductList from './ProductList'
import ProductSale from './ProductSale'

const HomePage = () => {
    return (
        <>
            <BannerCarousel></BannerCarousel>
            <BannerCard></BannerCard>
            <ProductList></ProductList>
            <ProductSale></ProductSale>
        </>
    )
}

export default HomePage