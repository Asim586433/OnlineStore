import React, { useState } from 'react';
import { SearchIcon } from './icons/SearchIcon';
import { UserIcon } from './icons/UserIcon';
import { HeartIcon } from './icons/HeartIcon';
import { ShoppingCartIcon } from './icons/ShoppingCartIcon';
import { MenuIcon } from './icons/MenuIcon';

interface HeaderProps {
    onSearch: (query: string) => void;
    wishlistCount: number;
}

const Header: React.FC<HeaderProps> = ({ onSearch, wishlistCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const navItems = ["Home", "Electronics", "Home & Lifestyle", "Men's Fashion", "All Categories"];

    const handleSearch = () => {
        onSearch(inputValue);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-gray-800 text-white text-xs text-center py-1">
                <p>Special Offer: Free Shipping on orders over Rs. 5,000!</p>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="text-3xl font-bold text-blue-600">
                        <a href="#">OnlineStore</a>
                    </div>

                    {/* Search Bar (Desktop) */}
                    <div className="hidden lg:flex flex-grow max-w-xl mx-8">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button 
                            onClick={handleSearch} 
                            className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition-colors"
                            aria-label="Search"
                        >
                            <SearchIcon />
                        </button>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-4">
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors hidden sm:block">
                            <UserIcon />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors relative hidden sm:block">
                            <HeartIcon />
                            {wishlistCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {wishlistCount}
                                </span>
                            )}
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors relative">
                            <ShoppingCartIcon />
                            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">5</span>
                        </a>
                         {/* Hamburger Menu Icon */}
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-gray-600 hover:text-blue-600">
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Navigation Bar */}
            <nav className="hidden lg:block bg-white border-t border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <ul className="flex justify-center items-center space-x-8">
                       {navItems.map(item => (
                         <li key={item}>
                           <a href="#" className="text-gray-700 font-medium py-3 inline-block hover:text-blue-600 transition-colors border-b-2 border-transparent hover:border-blue-600">{item}</a>
                         </li>
                       ))}
                    </ul>
                </div>
            </nav>

             {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white py-4 px-4 border-t">
                    {/* Mobile Search */}
                    <div className="flex mb-4">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button 
                            onClick={handleSearch} 
                            className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition-colors"
                            aria-label="Search"
                        >
                            <SearchIcon />
                        </button>
                    </div>
                    {/* Mobile Nav Links */}
                    <ul className="flex flex-col space-y-2">
                         {navItems.map(item => (
                         <li key={item}>
                           <a href="#" className="text-gray-700 font-medium p-2 block rounded hover:bg-gray-100 hover:text-blue-600 transition-colors">{item}</a>
                         </li>
                       ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;