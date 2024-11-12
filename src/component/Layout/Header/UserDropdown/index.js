import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../../context/UserContext";
import { CartContext } from "../../../../context/CartContext";
import { Link } from "react-router-dom";

const UserDropdown = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)
    const { user } = useContext(UserContext)
    const { handleLogout } = useContext(CartContext)

    // xử lý dropdown
    const handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    // đóng dropdown nếu nhấp chuột ngoài vùng dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [dropdownRef])

    return (
        <>
            <div className="dropdown" ref={dropdownRef} onClick={handleDropdown} >
                <div className="btn-group">
                    <div className="fa fa-user"></div>
                    <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                        <div className="menu_user">
                            {user ? (
                                <>
                                    <p className="text-center">Welcome, {user?.firstName}</p>
                                    <div className="dropdown-item">
                                        <span className="fas fa-user-circle p-2"></span>
                                        My profile
                                    </div>
                                    <div className="dropdown-item" onClick={handleLogout}>
                                        <span className="fas fa-sign-out-alt p-2"></span>
                                        Logout
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link to="/signin" className="dropdown-item">
                                        <span className="fas fa-sign-in-alt p-2"></span>
                                        Sign In
                                    </Link>
                                    <Link to="/signup" className="dropdown-item">
                                        <span className="fas fa-user-plus p-2"></span>
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserDropdown;