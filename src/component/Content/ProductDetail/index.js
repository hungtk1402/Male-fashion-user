import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'
import Breadcrumb from './Breadcrumb';
import ImageDetail from './ImageDetail';
import InfoDetails from './InfoDetails';
import OptionDetails from './OptionDetails';
import DescriptionDetails from './DescriptionDetails';
import RelatedProduct from './RelatedProduct';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState('')

    useEffect(() => {
        fetch(`http://localhost:4000/products/${productId}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
                setSelectedImage(data.img1)
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
            });
    }, [productId]);


    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl)
    }

    if (!product) {
        return null;
    }

    return (
        <>
            <section className='shop-details'>
                <div className='product__details__pic'>
                    <div className='container'>
                        <Breadcrumb />
                        <ImageDetail
                            images={[product.img1, product.img2, product.img3, product.img4]}
                            imageClick={handleImageClick}
                            selectedImage={selectedImage}
                        />
                    </div>
                </div>
                <div className='product__details__content'>
                    <div className='container'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-8'>
                                <div className='product__details__text'>
                                    <InfoDetails products={product} />
                                    <OptionDetails products={product} />
                                </div>
                            </div>
                        </div>
                        <DescriptionDetails products={product} />
                    </div>
                </div>
            </section>
            <RelatedProduct />
        </>
    );
};


export default ProductDetail;
