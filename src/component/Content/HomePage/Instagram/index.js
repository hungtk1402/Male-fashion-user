import Ins1 from '../../../../img/instagram/instagram-1.jpg'
import Ins2 from '../../../../img/instagram/instagram-2.jpg'
import Ins3 from '../../../../img/instagram/instagram-3.jpg'
import Ins4 from '../../../../img/instagram/instagram-4.jpg'
import Ins5 from '../../../../img/instagram/instagram-5.jpg'
import Ins6 from '../../../../img/instagram/instagram-6.jpg'

const InstagramComponent = () => {
    const instagramImage = [Ins1, Ins2, Ins3, Ins4, Ins5, Ins6]
    return (
        <>
            <section className="instargram spad">
                <div className="container">
                    <div className='row'>
                        <div className="col-lg-8">
                            <div className="instargram__pic">
                                {instagramImage.map((image, index) => (
                                    <div key={index} className='instagram__pic__item set-bg'>
                                        <img src={image} alt={`Instagram ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='instagram__text'>
                                <h2>Instagram</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua.
                                </p>
                                <h3>#Male_Fashion</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InstagramComponent