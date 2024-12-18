import React, { createContext, useContext, useState } from 'react';

export const ProductContext = createContext();


const Provider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Add product to the wishlist
    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => [...prevWishlist, product]);
    };




    const authInfo = {
        products,
        setProducts,
        categories, setCategories, selectedCategory, setSelectedCategory, setSelectedProduct, selectedProduct,
        cart,
        addToCart,
        wishlist,
        addToWishlist,
        setCart

    }
    return (

        <ProductContext.Provider value={authInfo}>
            {children}
        </ProductContext.Provider>
    );
};

export default Provider;









