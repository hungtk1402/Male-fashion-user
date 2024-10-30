import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const { user, logout } = useContext(UserContext)
    const [cartItems, setCartItems] = useState(() => {
        if (user) {
            const storedCart = localStorage.getItem(`cart_${user.email}`);
            try {
                return storedCart ? JSON.parse(storedCart) : [];
            } catch (error) {
                console.error("Failed to parse cart data:", error);
                return [];
            }
        } else {
            return [];
        }
    })

    // Lấy giỏ hàng từ localStorage khi người dùng đăng nhập
    useEffect(() => {
        if (user) {
            const storedCart = localStorage.getItem(`cart_${user.email}`);
            try {
                setCartItems(storedCart ? JSON.parse(storedCart) : []);
            } catch (error) {
                console.error("Failed to parse cart data:", error);
                setCartItems([]); // Reset to an empty array if parsing fails
            }
        } else {
            setCartItems([]); // Làm trống giỏ hàng khi không có người dùng
        }
    }, [user])

    // Lưu giỏ hàng vào localStorage khi giỏ hàng thay đổi và có người dùng đăng nhập
    useEffect(() => {
        if (user) {
            localStorage.setItem(`cart_${user.email}`, JSON.stringify(cartItems))
        }
    }, [cartItems, user])

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id)
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                return [...prevItems, { ...product, quantity: 1, selected: false }]
            }
        })
    }

    const removeCart = (productId) => {
        setCartItems(prevItems =>
            prevItems.filter(item => item.id !== productId)
        )
    }

    const updateCartQuantity = (productId, newQuantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        )
    }

    // Lựa chọn riêng lẻ
    const toggleSelectItem = (productId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, selected: !item.selected } : item
            )
        );
    };

    // Chọn hoặc bỏ chọn tất cả
    const toggleSelectAllItems = (isSelected) => {
        setCartItems(prevItems =>
            prevItems.map(item => ({ ...item, selected: isSelected }))
        )
    }

    const getCartItemCount = () => {
        return cartItems ? cartItems.reduce((count, item) => count + item.quantity, 0) : 0
    }

    const getCartSubtotal = () => {
        return cartItems
            ? cartItems.filter(item => item.selected).reduce((sum, item) =>
                sum + item.quantity * parseFloat(item.price.replace('$', '')), 0) : 0
    }

    // reset lại giỏ hàng khi đăng xuất
    const handleLogout = () => {
        setCartItems([])
        logout()
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeCart,
            updateCartQuantity,
            toggleSelectItem,
            toggleSelectAllItems,
            getCartItemCount,
            getCartSubtotal,
            handleLogout
        }}>
            {children}
        </CartContext.Provider>
    )
}