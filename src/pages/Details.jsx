













// import React, { useContext, useState } from 'react';
// import { ProductContext } from '../provider/Provider';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { FiShoppingCart } from 'react-icons/fi';

// const Details = () => {
//   const { selectedProduct, addToCart, addToWishlist, wishlist } = useContext(ProductContext);
//   const [isHeartClicked, setIsHeartClicked] = useState(false);

//   if (!selectedProduct) {
//     return <div className="p-8 text-center text-gray-600">No product selected. Go back to the home page.</div>;
//   }

//   // Check if the product is already in the wishlist
//   const isInWishlist = wishlist.some((product) => product.id === selectedProduct.id);

//   const handleAddToCart = () => {
//     addToCart(selectedProduct); // Add the product to the cart
//   };

//   const handleAddToWishlist = () => {
//     if (!isInWishlist) {
//       addToWishlist(selectedProduct); // Add the product to wishlist if not already added
//       setIsHeartClicked(true); // Disable heart button after adding to wishlist
//     }
//   };

//   return (
//     <div className="bg-white justify-center p-8 flex mx-auto absolute top-96 gap-8 w-fit border left-32 rounded-xl">
//       {/* Product Image */}
//       <div className="w-full lg:w-1/3">
//         <img
//           src={selectedProduct.image}
//           alt={selectedProduct.name}
//           className="w-full rounded-lg shadow-lg"
//         />
//       </div>

//       {/* Product Details */}
//       <div className="w-full lg:w-2/3 text-left">
//         {/* Product Name */}
//         <h2 className="text-4xl font-bold text-gray-800 mb-4">
//           {selectedProduct.name}
//         </h2>

//         {/* Price */}
//         <p className="text-2xl font-semibold text-blue-600 mb-2">
//           Price: <span className="text-gray-800">${selectedProduct.price}</span>
//         </p>

//         {/* Stock Status */}
//         <p className="text-lg text-green-600 mb-4">
//           In Stock
//         </p>

//         {/* Description */}
//         <p className="text-gray-700 mb-4">
//           Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.
//         </p>

//         {/* Specifications */}
//         <div className="mb-4">
//           <h3 className="text-lg font-semibold text-gray-800 mb-2">Specifications:</h3>
//           <ul className="list-disc pl-5 text-gray-700">
//             <li>Intel i7 11th Gen</li>
//             <li>16GB RAM</li>
//             <li>512GB SSD</li>
//             <li>Touchscreen</li>
//           </ul>
//         </div>

//         {/* Rating */}
//         <p className="text-lg text-yellow-500 font-semibold mb-6">
//           Rating: 4.8 ⭐
//         </p>

//         {/* Add to Cart and Wishlist Buttons */}
//         <div className='flex items-center'>
//           <button
//             className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition duration-300"
//             onClick={handleAddToCart}
//           >
//             <FiShoppingCart className="mr-2" /> Add To Cart
//           </button>
//           <button
//             className={`ml-4 text-2xl border rounded-full p-2 ${isHeartClicked ? 'text-gray-400' : ''}`}
//             onClick={handleAddToWishlist}
//             disabled={isHeartClicked}
//           >
//             <AiOutlineHeart />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;



import React, { useContext, useState } from 'react';
import { ProductContext } from '../provider/Provider';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';

const Details = () => {
  const { selectedProduct, addToCart, addToWishlist, wishlist } = useContext(ProductContext);
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  if (!selectedProduct) {
    return <div className="p-8 text-center text-gray-600">No product selected. Go back to the home page.</div>;
  }

  // Check if the product is already in the wishlist
  const isInWishlist = wishlist.some((product) => product.id === selectedProduct.id);

  const handleAddToCart = () => {
    addToCart(selectedProduct); // Add the product to the cart
    toast.success('Item added to cart!');
  };

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      addToWishlist(selectedProduct); // Add the product to wishlist if not already added
      setIsHeartClicked(true); // Disable heart button after adding to wishlist
      toast.success('Item added to wishlist!');
    }
  };

  return (



<div className=''>
  
<div className='mb-[600px] '>
<Banner h='Product Details' p='Explore the latest gadgets that will take your experience to the next level. From smart devices to
    the coolest accessories, we have it all!' k='hidden'></Banner>
</div>

<div className="bg-white justify-center p-8  flex mx-auto absolute   w-fit border left-1/2 bottom-80 transform -translate-x-1/2 -translate-y-1/2  rounded-xl gap-8  ">
               <Helmet>
        <title>Details</title>
      </Helmet>
       <ToastContainer />
      {/* Product Image */}
     
      <div className=" w-full lg:w-1/3">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className=" rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Product Details */}
      <div className="w-full lg:w-2/3 text-left">
        {/* Product Name */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          {selectedProduct.name}
        </h2>

        {/* Price */}
        <p className="text-2xl font-semibold text-blue-600 mb-2">
          Price: <span className="text-gray-800">${selectedProduct.price}</span>
        </p>

        {/* Stock Status */}
        <p className="text-lg text-green-600 mb-4">
          In Stock
        </p>

        {/* Description */}
        <p className="text-gray-700 mb-4">
          Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge display.
        </p>

        {/* Specifications */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Specifications:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Intel i7 11th Gen</li>
            <li>16GB RAM</li>
            <li>512GB SSD</li>
            <li>Touchscreen</li>
          </ul>
        </div>

        {/* Rating */}
        <p className="text-lg text-yellow-500 font-semibold mb-6">
          Rating: 4.8 ⭐
        </p>

        {/* Add to Cart and Wishlist Buttons */}
        <div className='flex items-center'>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition duration-300"
            onClick={handleAddToCart}
          >
            <FiShoppingCart className="mr-2" /> Add To Cart
          </button>
          <button
            className={`ml-4 text-2xl border rounded-full p-2 ${isHeartClicked ? 'text-gray-400' : ''}`}
            onClick={handleAddToWishlist}
            disabled={isHeartClicked}
          >
            <AiOutlineHeart />
          </button>
        
        </div>
      </div>
    </div>
</div>
  );
};

export default Details;
