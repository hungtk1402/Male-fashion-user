import { useEffect, useRef, useState } from "react"

const ShopOption = ({ onSortChange, onFilterByPrice }) => {
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

        if (option === 'Low to high') {
            onSortChange('asc')
        } else if (option === 'High to low') {
            onSortChange('desc')
        }
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
                                className={`option ${selectedOption === 'High to low' ? 'selected' : ''}`}
                                onClick={() => handleOptionClick('High to low')}
                            >
                                High To Low
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}

export default ShopOption