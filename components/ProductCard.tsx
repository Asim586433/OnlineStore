import React from 'react';
import { Product } from '../types';
import { HeartIcon } from './icons/HeartIcon';
import { HeartIconFilled } from './icons/HeartIconFilled';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
  isWishlisted: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, onToggleWishlist, isWishlisted }) => {
  return (
    <div 
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
      onClick={() => onClick(product)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => { if (e.key === 'Enter') onClick(product) }}
    >
      <div className="relative">
        <button 
            onClick={(e) => {
                e.stopPropagation();
                onToggleWishlist(product.id);
            }}
            className={`absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-all duration-300 z-10 transform hover:scale-110 ${isWishlisted ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
            {isWishlisted ? <HeartIconFilled /> : <HeartIcon />}
        </button>
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-white bg-blue-600 px-6 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                View Details
            </div>
        </div>
         <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">50% OFF</span>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <h3 className="text-lg font-semibold text-gray-800 truncate" title={product.name}>
          {product.name}
        </h3>
        <div className="flex items-baseline mt-2">
          <p className="text-xl font-bold text-blue-600">Rs. {product.price.toLocaleString()}</p>
          <p className="text-sm text-gray-400 line-through ml-2">Rs. {product.originalPrice.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;