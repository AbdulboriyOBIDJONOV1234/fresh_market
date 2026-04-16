import { useEffect, useState } from 'react';
import { CreditCard, Wallet, Smartphone, Building2, Check, Shield, Truck, RefreshCw } from 'lucide-react';

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

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

  const paymentMethods = [
    {
      id: "card",
      icon: CreditCard,
      title: "Bank kartasi",
      description: "Visa, Mastercard, Uzcard, Humo",
      color: "bg-blue-500",
      details: [
        "Xavfsiz to'lov",
        "Tez va oson",
        "Barcha kartalar qabul qilinadi"
      ]
    },
    {
      id: "cash",
      icon: Wallet,
      title: "Naqd pul",
      description: "Yetkazib berish vaqtida to'lash",
      color: "bg-green-500",
      details: [
        "Yetkazib beruvchiga to'lang",
        "Qo'shimcha to'lov yo'q",
        "Tekshirgandan keyin to'lang"
      ]
    },
    {
      id: "click",
      icon: Smartphone,
      title: "Click",
      description: "Click ilovasi orqali to'lash",
      color: "bg-purple-500",
      details: [
        "Telefon raqami orqali",
        "Tez va qulay",
        "Avtomatik tasdiqlash"
      ]
    },
    {
      id: "payme",
      icon: Smartphone,
      title: "Payme",
      description: "Payme ilovasi orqali to'lash",
      color: "bg-orange-500",
      details: [
        "QR-kod orqali to'lash",
        "Tezkor operatsiya",
        "Xavfsiz tranzaksiya"
      ]
    },
    {
      id: "transfer",
      icon: Building2,
      title: "Bank o'tkazmasi",
      description: "Hisob raqamiga o'tkazma",
      color: "bg-teal-500",
      details: [
        "Korporativ mijozlar uchun",
        "Cheksiz summa",
        "Rasmiy hujjatlar"
      ]
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "Xavfsiz to'lov",
      description: "Barcha tranzaksiyalar SSL shifrlash bilan himoyalangan"
    },
    {
      icon: RefreshCw,
      title: "Qaytarish kafolati",
      description: "Sifatli mahsulotlar va qoniqarsiz xaridlar uchun qaytarish"
    },
    {
      icon: Truck,
      title: "Bepul yetkazib berish",
      description: "50 000 so'mdan ortiq buyurtmalarga bepul yetkazib berish"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Mahsulotni tanlang",
      description: "Saytimizdan yoqtirgan mevalaringizni tanlang"
    },
    {
      number: "02",
      title: "Savatga qo'shing",
      description: "Tanlangan mahsulotlarni savatga qo'shing"
    },
    {
      number: "03",
      title: "To'lov usulini tanlang",
      description: "Sizga qulay to'lov usulini tanlang"
    },
    {
      number: "04",
      title: "Buyurtmani tasdiqlang",
      description: "Buyurtma ma'lumotlarini tekshiring va tasdiqlang"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="w-full section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 bg-[#ff4b2f]/10 text-[#ff4b2f] rounded-full text-sm font-medium mb-4">
            To'lov usullari
          </span>
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-[#121212] mb-4">
            Qulay <span className="text-gradient">to'lov usullari</span>
          </h1>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-600 max-w-2xl mx-auto">
            Sizga qulay bo'lgan usulda to'lang. Barcha to'lov usullari xavfsiz va tez.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {paymentMethods.map((method, index) => (
            <div
              key={method.id}
              className={`reveal opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl p-6 shadow-lg cursor-pointer transition-all duration-500 ${
                selectedMethod === method.id 
                  ? 'ring-2 ring-[#ff4b2f] shadow-xl' 
                  : 'hover:shadow-xl hover:-translate-y-1'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedMethod(method.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 ${method.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-[#121212] mb-1">{method.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{method.description}</p>
                  <ul className="space-y-1">
                    {method.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to Order Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="reveal opacity-0 translate-y-8 transition-all duration-700 text-3xl font-bold text-[#121212]">
              Qanday buyurtma berish mumkin?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 relative"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-3xl p-6 shadow-lg text-center h-full">
                  <span className="text-5xl font-bold text-[#ff4b2f]/20">{step.number}</span>
                  <h3 className="font-bold text-lg text-[#121212] mt-4 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#ff4b2f]/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees Section */}
        <div className="mb-16">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-[#121212] rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">Bizning kafolatlarimiz</h2>
              <p className="text-gray-400">Har bir xarid xavfsiz va himoyalangan</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#ff4b2f]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <guarantee.icon className="w-8 h-8 text-[#ff4b2f]" />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">{guarantee.title}</h3>
                  <p className="text-gray-400 text-sm">{guarantee.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="reveal opacity-0 translate-x-8 transition-all duration-700 bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[#121212] mb-6">Yetkazib berish narxlari</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                <div>
                  <p className="font-bold text-[#121212]">50 000 so'mdan ortiq</p>
                  <p className="text-sm text-gray-600">Bepul yetkazib berish</p>
                </div>
                <span className="text-green-600 font-bold">Bepul</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-bold text-[#121212]">30 000 - 50 000 so'm</p>
                  <p className="text-sm text-gray-600">Standart yetkazib berish</p>
                </div>
                <span className="text-[#ff4b2f] font-bold">10 000 so'm</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-bold text-[#121212]">30 000 so'mgacha</p>
                  <p className="text-sm text-gray-600">Standart yetkazib berish</p>
                </div>
                <span className="text-[#ff4b2f] font-bold">15 000 so'm</span>
              </div>
            </div>
          </div>

          <div className="reveal opacity-0 translate-x-8 transition-all duration-700 delay-200 bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[#121212] mb-6">Yetkazib berish vaqti</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-[#ff4b2f]/10 rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-[#ff4b2f]" />
                </div>
                <div>
                  <p className="font-bold text-[#121212]">Toshkent shahri</p>
                  <p className="text-sm text-gray-600">24 soat ichida</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-[#0e9f9f]/10 rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-[#0e9f9f]" />
                </div>
                <div>
                  <p className="font-bold text-[#121212]">Toshkent viloyati</p>
                  <p className="text-sm text-gray-600">1-2 kun ichida</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-bold text-[#121212]">Boshqa viloyatlar</p>
                  <p className="text-sm text-gray-600">2-3 kun ichida</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-16 text-center">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-700 rounded-full">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Barcha to'lovlar SSL shifrlash bilan himoyalangan</span>
          </div>
        </div>
      </div>

      <style>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }
      `}</style>
    </div>
  );
};

export default Payment;
