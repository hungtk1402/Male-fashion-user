import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../../../img/logo.png'
import './Header.css'
import UserDropdown from './UserDropdown'
import CartIcon from './CartIcon'

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        const query = searchTerm.trim(); // loại bỏ khoảng trắng
        if (query) {
            navigate(`/search?query=${encodeURIComponent(query)}`) // Điều hướng với từ khoá tìm kiếm
        } else {
            navigate('/search')
        }
    }

    return (
        <>
            <header className="navbar navbar-expand-sm bg-light justify-content-around">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt='logo' />
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className='row header_row'>
                    <form className="navbar-search" onSubmit={handleSearch}>
                        <input
                            className="form-control mr-sm-2 search_value"
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="button-search" type="submit"><span className='fas fa-search'></span></button>
                    </form>
                    <CartIcon></CartIcon>
                    <UserDropdown></UserDropdown>
                </div>
            </header>
        </>
    )
}

export default Header;