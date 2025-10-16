import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { XIcon } from './icons/XIcon';
import { HeartIcon } from './icons/HeartIcon';
import { HeartIconFilled } from './icons/HeartIconFilled';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onToggleWishlist: (productId: number) => void;
  isWishlisted: boolean;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose, onToggleWishlist, isWishlisted }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false); // Reset for the next time it opens
    }, 400); // Must match the duration of the exit animation
  };

  if (!product) {
    return null;
  }

  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-name"
    >
      <div 
        className={`bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden transform ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover"/>
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col relative overflow-y-auto">
            <button 
                onClick={handleClose} 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
                aria-label="Close modal"
            >
                <XIcon />
            </button>
            
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <h2 id="product-name" className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
            
            <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
            
            <div className="flex items-baseline mb-6">
              <p className="text-3xl font-bold text-blue-600">Rs. {product.price.toLocaleString()}</p>
              <p className="text-lg text-gray-400 line-through ml-3">Rs. {product.originalPrice.toLocaleString()}</p>
            </div>
            
            <div className="flex items-center gap-4">
                <button className="flex-grow bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
                    Add to Cart
                </button>
                <button 
                    onClick={() => onToggleWishlist(product.id)}
                    className={`p-3 rounded-lg border-2 transition-colors duration-300 transform hover:scale-105 ${isWishlisted ? 'bg-red-500 border-red-500 text-white' : 'border-gray-300 text-gray-600 hover:border-red-500 hover:text-red-500'}`}
                    aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                    {isWishlisted ? <HeartIconFilled /> : <HeartIcon />}
                </button>
            </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        
        @keyframes fade-out {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        .animate-fade-out { animation: fade-out 0.4s ease-in forwards; }
        
        @keyframes slide-up {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }

        @keyframes slide-down {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(50px); opacity: 0; }
        }
        .animate-slide-down { animation: slide-down 0.4s ease-in forwards; }
      `}</style>
    </div>
  );
};

export default ProductDetailModal;