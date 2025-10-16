
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">OnlineStore</h3>
                        <p className="text-gray-400">
                            Your one-stop shop for the best products online. Quality guaranteed, with prices you'll love.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Track Order</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Information</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest deals.</p>
                        <div className="flex">
                            <input type="email" placeholder="Your email" className="w-full px-3 py-2 text-gray-800 rounded-l-md focus:outline-none" />
                            <button className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition-colors">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 py-4">
                <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} OnlineStore Clone. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
