import './Footer.css'
import Logo from '../../../img/footer-logo.png'
import Payment from '../../../img/payment.png'
import FooterLinks from './FooterLinks'

const footerLinks = [
    {
        title: "Shopping",
        links: [
            { href: '#', text: 'Clothing Store' },
            { href: '#', text: 'Trending Shoes' },
            { href: '#', text: 'Accessories' },
            { href: '#', text: 'Sale' },
        ],
    },
    {
        title: "Customer services",
        links: [
            { href: '#', text: 'Contact Us' },
            { href: '#', text: 'Payment Methods' },
            { href: '#', text: 'Delivery' },
            { href: '#', text: 'Return & Exchanges' }
        ]
    }
]

const Footer = () => {
    return (
        <>
            <footer className="footer text-white py-4">
                <div className='container mt-4 mb-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <img src={Logo} alt="Male Fashion" className="logo" />
                            <p>The customer is at the heart of our unique business model, which includes design.</p>
                            <div className='payment-methods'>
                                <img src={Payment} alt='payment' />
                            </div>
                        </div>
                        {footerLinks.map((column, index) => (
                            <FooterLinks key={index} title={column.title} links={column.links} />
                        ))}
                        <div className='col-md-3'>
                            <h5>Newsletter</h5>
                            <p>Be the first to know about neew arrivals, look books, sales & promos!</p>
                            <form className='email-container'>
                                <input type="email" placeholder="Your email" className="email-input" />
                                <button type="submit" className="email-icon">
                                    <i className="fa fa-envelope"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer