import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-gray-100 py-10 ">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold">Gadget Heaven</h2>
        <p className="mt-2 mb-8">Leading the way in cutting-edge technology and innovation.</p>
        <div className="flex justify-around">
          <div>
            <h3 className="text-xl font-semibold mb-2">Services</h3>
            <ul className="list-none">
              <li><a href="#product-support" className="hover:underline">Product Support</a></li>
              <li><a href="#order-tracking" className="hover:underline">Order Tracking</a></li>
              <li><a href="#shipping-delivery" className="hover:underline">Shipping & Delivery</a></li>
              <li><a href="#returns" className="hover:underline">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Company</h3>
            <ul className="list-none">
              <li><a href="#about-us" className="hover:underline">About Us</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Legal</h3>
            <ul className="list-none">
              <li><a href="#terms-of-service" className="hover:underline">Terms of Service</a></li>
              <li><a href="#privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#cookie-policy" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8">&copy; 2024 Gadget Heaven. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
