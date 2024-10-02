import { Link } from 'react-router-dom'
import Sale from '../../../../img/product-sale.png'
import { useEffect, useState } from 'react'

const ProductSale = () => {
    const calculateTimeLeft = () => {
        const endTime = new Date('2024-10-10T00:00:00') // Thời gian đích (đổi tùy ý)
        const now = new Date()
        const difference = endTime - now

        let timeLeft = {}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60), 
                secends: Math.floor((difference / 1000) % 60),
            }
        }
        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        // cleanup interval on componet unmount
        return () => clearInterval(timer)
    }, [])

    return (
        <>
            <section className="categories spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="categories__text">
                                <h2>
                                    Clothing Hot <br />
                                    <span>Shoe Collection</span> <br />
                                    Accessories
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="categories__hot__deal">
                                <img src={Sale} alt='product-sale'/>
                                <div className='hot__deal__sticker'>
                                    <span>Sale Off</span>
                                    <h5>$29.99</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 offset-lg-1'>
                            <div className='categories__deal__countdown'>
                                <span>Deal Of The Week</span>
                                <h2>Multi-pocket Chest Bag Black</h2>
                                <div className='categories__deal__countdown__timer'>
                                    <div className='cd-item'>
                                        <span>{timeLeft.days || '00'}</span>
                                        <p>Days</p>
                                    </div>
                                    <div className='cd-item'>
                                        <span>{timeLeft.hours || '00'}</span>
                                        <p>Hours</p>
                                    </div>
                                    <div className='cd-item'>
                                        <span>{timeLeft.minutes || '00'}</span>
                                        <p>Minutes</p>
                                    </div>
                                    <div className='cd-item'>
                                        <span>{timeLeft.secends || '00'}</span>
                                        <p>Seconds</p>
                                    </div>
                                </div>
                                <Link to='/shop' className='primary-btn'>Shop now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductSale