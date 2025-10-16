import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import { products } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const handleToggleWishlist = (productId: number) => {
    setWishlist(prevWishlist => {
      if (prevWishlist.includes(productId)) {
        return prevWishlist.filter(id => id !== productId);
      } else {
        return [...prevWishlist, productId];
      }
    });
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header onSearch={setSearchQuery} wishlistCount={wishlist.length} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Featured Products</h1>
        <p className="text-gray-500 mb-8">Discover our handpicked collection of products</p>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product: Product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={handleProductClick}
                onToggleWishlist={handleToggleWishlist}
                isWishlisted={wishlist.includes(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-700">No Products Found</h2>
            <p className="text-gray-500 mt-2">Try adjusting your search to find what you're looking for.</p>
          </div>
        )}
      </main>
      <Footer />
      <ProductDetailModal 
        product={selectedProduct} 
        onClose={handleCloseModal}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
      />
    </div>
  );
};

export default App;