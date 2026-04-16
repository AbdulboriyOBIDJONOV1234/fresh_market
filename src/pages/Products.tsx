import { useState, useEffect } from 'react';
import { Search, Filter, ShoppingCart, ChevronDown, X, Plus, Minus } from 'lucide-react';
import { fruits, categories, type Fruit } from '../data/fruits';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Barchasi");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFruits, setFilteredFruits] = useState<Fruit[]>(fruits);
  const [selectedFruit, setSelectedFruit] = useState<Fruit | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState<{fruit: Fruit, quantity: number}[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    let result = fruits;
    
    if (selectedCategory !== "Barchasi") {
      result = result.filter(fruit => fruit.category === selectedCategory);
    }
    
    if (searchQuery) {
      result = result.filter(fruit => 
        fruit.nameUz.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fruit.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredFruits(result);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredFruits]);

  const openModal = (fruit: Fruit) => {
    setSelectedFruit(fruit);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const addToCart = (fruit: Fruit, quantity: number = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.fruit.id === fruit.id);
      if (existing) {
        return prev.map(item => 
          item.fruit.id === fruit.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { fruit, quantity }];
    });
  };

  const removeFromCart = (fruitId: number) => {
    setCart(prev => prev.filter(item => item.fruit.id !== fruitId));
  };

  const updateCartQuantity = (fruitId: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.fruit.id === fruitId) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.fruit.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="w-full section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 text-4xl md:text-5xl font-bold text-[#121212] mb-4">
            Barcha <span className="text-gradient">mevalar</span>
          </h1>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-gray-600 max-w-2xl mx-auto">
            30 dan ortiq yangi va sifatli mevalar. Eng yaxshi narxlarda!
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 bg-white rounded-2xl shadow-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Meva qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff4b2f] focus:ring-2 focus:ring-[#ff4b2f]/20 outline-none transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-48 pl-12 pr-10 py-3 rounded-xl border border-gray-200 focus:border-[#ff4b2f] focus:ring-2 focus:ring-[#ff4b2f]/20 outline-none appearance-none cursor-pointer transition-all duration-300"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative px-6 py-3 bg-[#ff4b2f] text-white rounded-xl font-medium hover:bg-[#e5432a] transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Savat</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#0e9f9f] text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 mb-6">
          <p className="text-gray-600">
            <span className="font-bold text-[#121212]">{filteredFruits.length}</span> ta mahsulot topildi
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredFruits.map((fruit, index) => (
            <div
              key={fruit.id}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              style={{ transitionDelay: `${(index % 10) * 50}ms` }}
              onClick={() => openModal(fruit)}
            >
              <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                <img
                  src={fruit.image}
                  alt={fruit.nameUz}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-[#ff4b2f] text-white text-xs font-medium rounded-full">
                    {fruit.category}
                  </span>
                </div>
                {fruit.quantity < 20 && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
                      Kam qoldi
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base text-[#121212] mb-1 truncate">{fruit.nameUz}</h3>
                <p className="text-xs text-gray-500 mb-2">{fruit.name}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-[#ff4b2f]">{fruit.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-500"> so'm</span>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(fruit);
                    }}
                    className="w-8 h-8 bg-[#ff4b2f] text-white rounded-full flex items-center justify-center hover:bg-[#e5432a] transition-colors duration-300"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFruits.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-[#121212] mb-2">Hech narsa topilmadi</h3>
            <p className="text-gray-500">Boshqa so'rov bilan qidirib ko'ring</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {isModalOpen && selectedFruit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-300">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="grid md:grid-cols-2">
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                <img
                  src={selectedFruit.image}
                  alt={selectedFruit.nameUz}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="p-6 md:p-8">
                <span className="inline-block px-3 py-1 bg-[#ff4b2f]/10 text-[#ff4b2f] text-sm font-medium rounded-full mb-4">
                  {selectedFruit.category}
                </span>
                <h2 className="text-2xl font-bold text-[#121212] mb-2">{selectedFruit.nameUz}</h2>
                <p className="text-gray-500 mb-4">{selectedFruit.name}</p>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-[#ff4b2f]">{selectedFruit.price.toLocaleString()} so'm</span>
                  <span className="text-gray-500">/ {selectedFruit.unit}</span>
                </div>
                
                <p className="text-gray-600 mb-6">{selectedFruit.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-[#121212] mb-3">Foydali xususiyatlari:</h4>
                  <ul className="space-y-2">
                    {selectedFruit.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0e9f9f]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm ${selectedFruit.inStock ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {selectedFruit.inStock ? 'Sotuvda mavjud' : 'Sotuvda yo\'q'}
                  </span>
                  <span className="text-sm text-gray-500">Qoldiq: {selectedFruit.quantity} {selectedFruit.unit}</span>
                </div>
                
                <button
                  onClick={() => {
                    addToCart(selectedFruit);
                    closeModal();
                  }}
                  disabled={!selectedFruit.inStock}
                  className="w-full py-3 bg-[#ff4b2f] text-white rounded-xl font-medium hover:bg-[#e5432a] transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Savatga qo'shish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="relative bg-white w-full max-w-md h-full overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#121212]">Savat ({cartCount})</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Savat bo'sh</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.fruit.id} className="flex gap-4 bg-gray-50 rounded-2xl p-4">
                      <img
                        src={item.fruit.image}
                        alt={item.fruit.nameUz}
                        className="w-20 h-20 object-contain bg-white rounded-xl"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-[#121212]">{item.fruit.nameUz}</h4>
                        <p className="text-sm text-gray-500">{item.fruit.price.toLocaleString()} so'm</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateCartQuantity(item.fruit.id, -1)}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQuantity(item.fruit.id, 1)}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.fruit.id)}
                        className="text-red-500 hover:text-red-600 transition-colors duration-300"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {cart.length > 0 && (
              <div className="sticky bottom-0 bg-white border-t p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">Jami:</span>
                  <span className="text-2xl font-bold text-[#ff4b2f]">{cartTotal.toLocaleString()} so'm</span>
                </div>
                <button className="w-full py-3 bg-[#ff4b2f] text-white rounded-xl font-medium hover:bg-[#e5432a] transition-colors duration-300">
                  Buyurtma berish
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Products;
