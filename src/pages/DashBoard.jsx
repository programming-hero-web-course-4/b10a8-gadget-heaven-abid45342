









// import React, { useContext, useState, useEffect } from 'react';
// import { ProductContext } from '../provider/Provider';
// import Banner from '../components/Banner';

// const Dashboard = () => {
//   const { cart, wishlist } = useContext(ProductContext);
//   const [activeTab, setActiveTab] = useState('cart');
//   const [sortedCart, setSortedCart] = useState([]);

//   // Calculate total price of cart items
//   const totalPrice = cart.reduce((acc, item) => acc + (item.price || 0), 0);

//   useEffect(() => {
//     setSortedCart(cart); // Initialize sortedCart with cart data
//   }, [cart]);

//   // Sort cart items by price (descending)
//   const handleSortByPrice = () => {
//     const sorted = [...sortedCart].sort((a, b) => (b.price || 0) - (a.price || 0));
//     setSortedCart(sorted);
//   };

//   return (
//     <div className="p-8">
//       {/* Banner with buttons inside */}
//       <Banner
//         h="Dashboard"
//         b="Explore the latest gadgets that will take your experience to the next level."
//       >
//         <div className="tabs mt-10 flex justify-center">
//           <button
//             className={`tab-button ${activeTab === 'cart' ? 'bg-blue-500 text-white' : 'bg-gray-200'} px-4 py-2 rounded`}
//             onClick={() => setActiveTab('cart')}
//           >
//             Cart
//           </button>
//           <button
//             className={`tab-button ${activeTab === 'wishlist' ? 'bg-blue-500 text-white' : 'bg-gray-200'} px-4 py-2 rounded ml-2`}
//             onClick={() => setActiveTab('wishlist')}
//           >
//             Wish List
//           </button>
//         </div>
//       </Banner>

//       {/* Cart Tab Content */}
//       {activeTab === 'cart' && (
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold mb-4">Cart</h2>

//           {/* Display Total Price */}
//           <p className="text-lg font-semibold mb-4">
//             Total Price: <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
//           </p>

//           {/* Sort Button */}
//           <button
//             onClick={handleSortByPrice}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4"
//           >
//             Sort by Price
//           </button>

//           {/* Render Cart Items */}
//           {sortedCart.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             sortedCart.map((product, index) => (
//               <div
//                 key={product.id || index}
//                 className="cart-item border p-4 mb-4 rounded-lg shadow-md"
//               >
//                 <div className="flex items-center">
//                   <img
//                     src={product.image || 'placeholder.png'}
//                     alt={product.name || 'Product Image'}
//                     className="w-24 h-24 object-cover rounded-lg mr-4"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = 'placeholder.png';
//                     }}
//                   />
//                   <div>
//                     <h3 className="text-xl font-bold">{product.name || 'Unnamed Product'}</h3>
//                     <p className="text-lg text-left text-gray-600">${product.price || 0}</p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       )}

//       {/* Wishlist Tab Content */}
//       {activeTab === 'wishlist' && (
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold mb-4">Wish List</h2>
//           {wishlist.length === 0 ? (
//             <p>Your wish list is empty.</p>
//           ) : (
//             wishlist.map((product, index) => (
//               <div
//                 key={product.id || index}
//                 className="wishlist-item border p-4 mb-4 rounded-lg shadow-md"
//               >
//                 <div className="flex items-center">
//                   <img
//                     src={product.image || 'placeholder.png'}
//                     alt={product.name || 'Product Image'}
//                     className="w-24 h-24 object-cover rounded-lg mr-4"
//                     onError={(e) => {
//                       e.target.onerror = null;
//                       e.target.src = 'placeholder.png';
//                     }}
//                   />
//                   <div>
//                     <h3 className="text-xl font-bold">{product.name || 'Unnamed Product'}</h3>
//                     <p className="text-lg text-gray-600 text-left">${product.price || 0}</p>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;













import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../provider/Provider';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  const { cart, setCart, wishlist } = useContext(ProductContext); // Ensure setCart exists in your context provider
  const [activeTab, setActiveTab] = useState('cart');
  const [sortedCart, setSortedCart] = useState([]);
  const navigate = useNavigate();

  // Calculate total price of cart items
  const totalPrice = cart.reduce((acc, item) => acc + (item.price || 0), 0);

  // Initialize sortedCart when cart changes
  useEffect(() => {
    setSortedCart(cart);
  }, [cart]);

  // Sort cart items by price (descending)
  const handleSortByPrice = () => {
    const sorted = [...sortedCart].sort((a, b) => (b.price || 0) - (a.price || 0));
    setSortedCart(sorted);
  };

  // Handle Purchase Action
  const handlePurchase = () => {
    if (totalPrice === 0) return; // Prevent purchase if cart is empty
    setCart([]); // Clear the cart - Ensure this triggers a re-render
    setSortedCart([]); // Clear sortedCart as well

    Swal.fire({
      title: 'Congratulations!',
      text: 'Your purchase was successful.',
      icon: 'success',
      confirmButtonText: 'Close',
    }).then(() => {
     
      navigate('/'); // Redirect to home page
    });
  };

  return (
    <div className="p-8">
         <Helmet>
        <title>Dashboard - My E-commerce Site</title>
      </Helmet>
      {/* Banner */}
      <Banner
        h="Dashboard"
        b="Explore the latest gadgets that will take your experience to the next level."
      >
        <div className="tabs mt-10 flex justify-center">
          <button
            className={`tab-button ${
              activeTab === 'cart' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } px-4 py-2 rounded`}
            onClick={() => setActiveTab('cart')}
          >
            Cart
          </button>
          <button
            className={`tab-button ${
              activeTab === 'wishlist' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } px-4 py-2 rounded ml-2`}
            onClick={() => setActiveTab('wishlist')}
          >
            Wish List
          </button>
        </div>
      </Banner>

      {/* Cart Tab Content */}
      {activeTab === 'cart' && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Cart</h2>

          {/* Total Price */}
          <p className="text-lg font-semibold mb-4">
            Total Price: <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
          </p>

          {/* Sort Button */}
          <button
            onClick={handleSortByPrice}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4"
          >
            Sort by Price
          </button>

          {/* Cart Items */}
          {sortedCart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            sortedCart.map((product, index) => (
              <div
                key={product.id || index}
                className="cart-item border p-4 mb-4 rounded-lg shadow-md"
              >
                <div className="flex items-center">
                  <img
                    src={product.image || 'placeholder.png'}
                    alt={product.name || 'Product Image'}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'placeholder.png';
                    }}
                  />
                  <div>
                    <h3 className="text-xl font-bold">{product.name || 'Unnamed Product'}</h3>
                    <p className="text-lg text-gray-600">${product.price || 0}</p>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Purchase Button */}
          <button
            onClick={handlePurchase}
            className={`mt-4 px-6 py-2 rounded text-white ${
              totalPrice === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600'
            }`}
            disabled={totalPrice === 0}
          >
            Purchase
          </button>
        </div>
      )}

      {/* Wishlist Tab Content */}
      {activeTab === 'wishlist' && (
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Wish List</h2>
          {wishlist.length === 0 ? (
            <p>Your wish list is empty.</p>
          ) : (
            wishlist.map((product, index) => (
              <div
                key={product.id || index}
                className="wishlist-item border p-4 mb-4 rounded-lg shadow-md"
              >
                <div className="flex items-center">
                  <img
                    src={product.image || 'placeholder.png'}
                    alt={product.name || 'Product Image'}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'placeholder.png';
                    }}
                  />
                  <div>
                    <h3 className="text-xl font-bold">{product.name || 'Unnamed Product'}</h3>
                    <p className="text-lg text-gray-600">${product.price || 0}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
