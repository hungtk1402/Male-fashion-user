import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

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
                return [...prevItems, { ...product, quantity: 1 }]
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

    const getCartItemCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0)
    }

    const getCartSubtotal = () => {
        return cartItems.reduce((sum, item) =>
            sum + item.quantity * parseFloat(item.price.replace('$', '')), 0)
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeCart, updateCartQuantity, getCartItemCount, getCartSubtotal }}>
            {children}
        </CartContext.Provider>
    )
}