import { useEffect, useRef, useState } from "react"

const ShopOption = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('Low to high')
    const dropdownRef = useRef(null)

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    const handleOptionClick = (option) => {
        setSelectedOption(option)
        setDropdownOpen(false)
    }

    // đóng dropdown nếu nhấp chuột ngoài vùng dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [dropdownRef])

    return (
        <>
            <div className='shop__product__option__right' ref={dropdownRef}>
                <p>Sort by Price:</p>
                <div
                    className={`nice-select ${dropdownOpen ? 'open' : ''}`}  // <-- Toggle open class
                    onClick={toggleDropdown}
                    tabIndex="0"
                >
                    <button className="current">{selectedOption}</button>
                    {dropdownOpen && (
                        <ul className="list">
                            <li
                                className={`option ${selectedOption === 'Low To High' ? 'selected' : ''}`}
                                onClick={() => handleOptionClick('Low to high')}
                            >
                                Low To High
                            </li>
                            <li
                                className={`option ${selectedOption === '$0 - $55' ? 'selected' : ''}`}
                                onClick={() => handleOptionClick('$0 - $55')}
                            >
                                $0 - $55
                            </li>
                            <li
                                className={`option ${selectedOption === '$55 - $100' ? 'selected' : ''}`}
                                onClick={() => handleOptionClick('$55 - $100')}
                            >
                                $55 - $100
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}

export default ShopOption