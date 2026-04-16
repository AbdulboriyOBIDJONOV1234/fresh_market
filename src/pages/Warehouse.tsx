import { useEffect, useState } from 'react';
import { Package, Thermometer, Droplets, Wind, CheckCircle, AlertCircle, TrendingUp, Calendar } from 'lucide-react';
import { fruits } from '../data/fruits';

const Warehouse = () => {
  const [filter, setFilter] = useState<'all' | 'inStock' | 'lowStock' | 'outOfStock'>('all');

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
  }, []);

  const warehouseStats = [
    {
      icon: Package,
      title: "Jami mahsulotlar",
      value: fruits.length,
      unit: "tur",
      color: "bg-blue-500",
      trend: "+5%"
    },
    {
      icon: CheckCircle,
      title: "Sotuvda mavjud",
      value: fruits.filter(f => f.quantity > 20).length,
      unit: "tur",
      color: "bg-green-500",
      trend: "+12%"
    },
    {
      icon: AlertCircle,
      title: "Kam qoldi",
      value: fruits.filter(f => f.quantity <= 20 && f.quantity > 0).length,
      unit: "tur",
      color: "bg-yellow-500",
      trend: "-3%"
    },
    {
      icon: TrendingUp,
      title: "Oylik aylanma",
      value: "2.5",
      unit: "tonna",
      color: "bg-purple-500",
      trend: "+8%"
    }
  ];

  const storageConditions = [
    {
      icon: Thermometer,
      title: "Harorat",
      value: "2-8°C",
      description: "Mevlar uchun optimal harorat",
      status: "normal",
      color: "bg-orange-500"
    },
    {
      icon: Droplets,
      title: "Namlik",
      value: "85-95%",
      description: "Nisbiy namlik darajasi",
      status: "normal",
      color: "bg-blue-500"
    },
    {
      icon: Wind,
      title: "Ventilyatsiya",
      value: "Faol",
      description: "Doimiy havo almashinuvi",
      status: "normal",
      color: "bg-teal-500"
    }
  ];

  const filteredFruits = fruits.filter(fruit => {
    if (filter === 'inStock') return fruit.quantity > 20;
    if (filter === 'lowStock') return fruit.quantity <= 20 && fruit.quantity > 0;
    if (filter === 'outOfStock') return fruit.quantity === 0;
    return true;
  });

  const getStockStatus = (quantity: number) => {
    if (quantity > 50) return { label: 'Ko\'p', color: 'bg-green-500' };
    if (quantity > 20) return { label: 'O\'rtacha', color: 'bg-blue-500' };
    if (quantity > 0) return { label: 'Kam', color: 'bg-yellow-500' };
    return { label: 'Yo\'q', color: 'bg-red-500' };
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="w-full section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 bg-[#ff4b2f]/10 text-[#ff4b2f] rounded-full text-sm font-medium mb-4">
            Ombor holati
          </span>
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-[#121212] mb-4">
            Real vaqt <span className="text-gradient">ombor monitoringi</span>
          </h1>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-600 max-w-2xl mx-auto">
            Barcha mahsulotlarimizning ombordagi holatini real vaqtda kuzatib boring
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {warehouseStats.map((stat, index) => (
            <div
              key={index}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl p-6 shadow-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {stat.trend}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-1">{stat.title}</p>
              <p className="text-2xl font-bold text-[#121212]">
                {stat.value} <span className="text-sm font-normal text-gray-500">{stat.unit}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Storage Conditions */}
        <div className="mb-12">
          <h2 className="reveal opacity-0 translate-y-8 transition-all duration-700 text-2xl font-bold text-[#121212] mb-6">
            Saqlash sharoitlari
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {storageConditions.map((condition, index) => (
              <div
                key={index}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl p-6 shadow-lg"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 ${condition.color} rounded-2xl flex items-center justify-center`}>
                    <condition.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{condition.title}</p>
                    <p className="text-2xl font-bold text-[#121212]">{condition.value}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{condition.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${condition.status === 'normal' ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className="text-sm text-gray-500">
                    {condition.status === 'normal' ? 'Normal' : 'Ogohlantirish'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-[#121212]">Ombor qoldiqlari</h2>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {[
                  { key: 'all', label: 'Barchasi' },
                  { key: 'inStock', label: 'Mavjud' },
                  { key: 'lowStock', label: 'Kam qoldi' },
                  { key: 'outOfStock', label: 'Yo\'q' }
                ].map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key as any)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      filter === f.key
                        ? 'bg-[#ff4b2f] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Mahsulot</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Kategoriya</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Qoldiq</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Holat</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Yangilangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredFruits.map((fruit) => {
                  const status = getStockStatus(fruit.quantity);
                  return (
                    <tr key={fruit.id} className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={fruit.image}
                            alt={fruit.nameUz}
                            className="w-12 h-12 object-contain bg-gray-100 rounded-lg"
                          />
                          <div>
                            <p className="font-medium text-[#121212]">{fruit.nameUz}</p>
                            <p className="text-sm text-gray-500">{fruit.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          {fruit.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-[#121212]">{fruit.quantity}</span>
                          <span className="text-sm text-gray-500">{fruit.unit}</span>
                        </div>
                        <div className="w-24 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              fruit.quantity > 50 ? 'bg-green-500 w-full' :
                              fruit.quantity > 20 ? 'bg-blue-500 w-2/3' :
                              fruit.quantity > 0 ? 'bg-yellow-500 w-1/3' :
                              'bg-red-500 w-0'
                            }`}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 ${status.color} text-white rounded-full text-sm`}>
                          {status.label}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{new Date().toLocaleDateString('uz-UZ')}</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredFruits.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Mahsulotlar topilmadi</p>
            </div>
          )}
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Oxirgi yangilanish: {new Date().toLocaleString('uz-UZ')}
          </p>
        </div>
      </div>

      <style>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Warehouse;
