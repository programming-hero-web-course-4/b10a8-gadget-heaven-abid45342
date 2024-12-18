// import React, { useContext, useEffect, useState } from 'react';
// import { ProductContext } from '../provider/Provider';
// import bannerImg from '../assets/banner.jpg';
// import { Link } from 'react-router-dom';
// import Banner from '../components/Banner';
// import { Helmet } from 'react-helmet';

// const Home = () => {
//     const { products, setProducts, selectedCategory, setSelectedCategory,selectedProduct, setSelectedProduct } = useContext(ProductContext);


//     // Fixed categories
//     const categories = [
//         'All',
//         'Laptops',
//         'Phones',
//         'Accessories',
//         'Smart Watches',
//         'MacBook',
//         'Iphone'
//     ];

//     // Fetch Products
//     useEffect(() => {
//         fetch('/Product.json') // Adjust to actual path
//             .then((res) => res.json())
//             .then((data) => {
//                 setProducts(data.products);
//             })
//             .catch((error) => console.error('Error fetching products:', error));
//     }, [setProducts]);

//     // Filter Products Based on Category
//     const filteredProducts =
//         selectedCategory === 'All'
//             ? products
//             : products.filter((product) => product.category === selectedCategory);














//     return (
//         <div className=''>
//                      <Helmet>
//                     <title>Home</title>
//                   </Helmet>
//              <Banner

//                 h={"Upgrade Your Tech with Gadget Heaven Accessories" }
//                 p={"Explore the latest gadgets that will elevate your experience to the next level. From smart devices to cool accessories, we have it all!"}
//                 b={"Explore Now"}
//                 hi={'[550px]'}
            
                
//                 k={'hidden'}
//             />

// <div className="w-full flex justify-center  absolute -top-40 ">
//                    <img src={bannerImg}
//                     alt="Banner"
//                     className="w-full max-w-2xl rounded-2xl shadow-xl absolute top-[500px] border border-white p-4"
//                 />
//             </div>

//             <h1 className='text-2xl font-extrabold mb-10 mt-96 '>Explore Cutting-Edge Gadgets</h1>
//             <div className="flex">
//                 {/* Sidebar */}
//                 <div className="w-1/4 p-5 border-r border-gray-300">
//                     <h2 className="text-xl font-bold mb-4">Categories</h2>
//                     <ul>
//                         {categories.map((category) => (
//                             <li
//     key={category}
//     className={`cursor-pointer p-2 rounded-md hover:bg-gray-200 ${selectedCategory === category ? 'bg-gray-300 font-semibold' : ''}`}
//     onClick={() => setSelectedCategory(category)}
// >
//     {category}
// </li>

//                         ))}
//                     </ul>
//                 </div>

//                 {/* Main Content */}
//                 <div className="w-3/4 p-5">
//                     {/* Products */}
//                     <div className="grid grid-cols-3 gap-4">
//                         {filteredProducts.map((product) => (
//                             <div
//                                 key={product.id}
//                                 className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-transform hover:scale-105"
//                             >
//                                 <img
//                                     src={product.image}
//                                     alt={product.name}
//                                     className="w-full h-40 object-cover rounded mb-2"
//                                 />
//                                 <h3 className="text-lg font-bold">{product.name}</h3>
//                                 <p className="text-gray-700">Price: ${product.price}</p>
//                                 <Link to={'/details'}>
//                                     <button 
//                                      onClick={() => setSelectedProduct(product)}

//                                         className='btn mt-4'>View Details</button>
//                                 </Link>

//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;  \



















import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../provider/Provider';
import bannerImg from '../assets/banner.jpg';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import { Helmet } from 'react-helmet';

const Home = () => {
    const { products, setProducts, selectedCategory, setSelectedCategory, selectedProduct, setSelectedProduct } = useContext(ProductContext);

    // Fixed categories
    const categories = [
        'All',
        'Laptops',
        'Phones',
        'Accessories',
        'Smart Watches',
        'MacBook',
        'Iphone'
    ];

    // Fetch Products
    useEffect(() => {
        fetch('Product.json') // Adjust to the actual path
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, [setProducts]);

    // Filter Products Based on Category
    const filteredProducts =
        selectedCategory === 'All'
            ? products
            : products.filter((product) => product.category === selectedCategory);

    return (
        <div className="">
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner
                h={"Upgrade Your Tech with Gadget Heaven Accessories"}
                p={"Explore the latest gadgets that will elevate your experience to the next level. From smart devices to cool accessories, we have it all!"}
                b={"Shop Now"}
                hi={'[550px]'}
              
            />

<div className="w-full flex justify-center items-center relative -top-40">
    <img
        src={bannerImg}
        alt="Banner"
        className="w-full max-w-2xl rounded-2xl shadow-xl border border-white p-4"
    />
</div>

            <h1 className="text-2xl font-extrabold mb-10 ">Explore Cutting-Edge Gadgets</h1>
            <div className="flex">
                {/* Sidebar */}
                <div className="w-1/4 p-5 border-r border-gray-300">
                    <h2 className="text-xl font-bold mb-4">Categories</h2>
                    <ul>
                        {categories.map((category) => (
                            <li
                                key={category}
                                className={`cursor-pointer p-2 rounded-md hover:bg-gray-200 ${
                                    selectedCategory === category ? 'bg-gray-300 font-semibold' : ''
                                }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="w-3/4 p-5">
                    <div className="grid grid-cols-3 gap-4">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-transform hover:scale-105"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 object-cover rounded mb-2"
                                />
                                <h3 className="text-lg font-bold">{product.name}</h3>
                                <p className="text-gray-700">Price: ${product.price}</p>
                                <Link to={'/details'}>
                                    <button
                                        onClick={() => setSelectedProduct(product)}
                                        className="btn mt-4"
                                    >
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
