import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Leaf, Headphones, Star, ChevronRight } from 'lucide-react';
import { getFeaturedFruits, getBestSellers } from '../data/fruits';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const featuredFruits = getFeaturedFruits();
  const bestSellers = getBestSellers();

  const features = [
    {
      icon: Truck,
      title: "Bepul yetkazib berish",
      description: "50 000 so'mdan ortiq buyurtmalarga bepul yetkazib berish",
      color: "bg-blue-500"
    },
    {
      icon: Leaf,
      title: "Yangi va organik",
      description: "Fermadan to'g'ridan-to'g'ri yangi va sifatli mevalar",
      color: "bg-green-500"
    },
    {
      icon: Headphones,
      title: "24/7 qo'llab-quvvatlash",
      description: "Kunning istalgan vaqtida biz bilan bog'laning",
      color: "bg-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Aziza Karimova",
      role: "Doimiy mijoz",
      text: "Fresh Marketdan har doim mamnunman. Mevlar har doim yangi va sifatli keladi. Yetkazib berish tez va professional.",
      rating: 5
    },
    {
      name: "Bobur Aliyev",
      role: "Biznes egasi",
      text: "Restoranimiz uchun mevalar har doim Fresh Marketdan olamiz. Sifat va xizmatdan juda mamnunmiz.",
      rating: 5
    },
    {
      name: "Gulnora Rahimova",
      role: "Uy bekasi",
      text: "Bolalarim uchun eng yaxshi mevalarni shu yerdan olaman. Hammasi tabiy va foydali.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #fff5f3 0%, #e8f8f8 50%, #fff 100%)'
        }}
      >
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff4b2f]/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0e9f9f]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#ff4b2f]/5 to-transparent rounded-full" />
        </div>

        {/* Floating Fruits */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/fruits/apple.png"
            alt=""
            className="absolute top-32 left-[10%] w-16 h-16 object-contain animate-float opacity-60"
          />
          <img
            src="/fruits/orange.png"
            alt=""
            className="absolute top-48 right-[15%] w-20 h-20 object-contain animate-float-delayed opacity-60"
          />
          <img
            src="/fruits/strawberry.png"
            alt=""
            className="absolute bottom-32 left-[20%] w-14 h-14 object-contain animate-float opacity-50"
          />
          <img
            src="/fruits/banana.png"
            alt=""
            className="absolute bottom-48 right-[10%] w-24 h-24 object-contain animate-float-delayed opacity-50"
          />
        </div>

        <div className="w-full section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="reveal opacity-0 translate-y-8 transition-all duration-700">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff4b2f]/10 text-[#ff4b2f] rounded-full text-sm font-medium">
                  <Leaf className="w-4 h-4" />
                  100% Tabiy va organik
                </span>
              </div>
              
              <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-[#121212]">Fermadan</span>
                <br />
                <span className="text-gradient">stolingizga</span>
                <br />
                <span className="text-[#121212]">yangi mevalar</span>
              </h1>
              
              <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg text-gray-600 max-w-lg">
                Eng sifatli va yangi mevalarni bizdan xarid qiling. 
                Tabiy mahsulotlar - sog'lom hayot uchun! 
                30 dan ortiq meva turlari sizni kutmoqda.
              </p>
              
              <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 flex flex-wrap gap-4">
                <Link to="/products" className="btn-primary inline-flex items-center gap-2 text-lg">
                  Xarid qilish
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-full font-medium border-2 border-[#121212] text-[#121212] hover:bg-[#121212] hover:text-white transition-all duration-300"
                >
                  Batafsil
                </Link>
              </div>

              {/* Stats */}
              <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-400 flex gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-[#ff4b2f]">30+</p>
                  <p className="text-sm text-gray-500">Meva turlari</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#0e9f9f]">5000+</p>
                  <p className="text-sm text-gray-500">Mamnun mijozlar</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#ff4b2f]">24/7</p>
                  <p className="text-sm text-gray-500">Xizmat</p>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="reveal opacity-0 translate-x-8 transition-all duration-1000 delay-300 relative">
              <div className="relative">
                {/* Decorative Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[90%] aspect-square rounded-full bg-gradient-to-br from-[#ff4b2f]/20 to-[#0e9f9f]/20 animate-pulse-slow" />
                </div>
                
                {/* Main Image */}
                <img
                  src="/hero-main.jpg"
                  alt="Fresh fruits"
                  className="relative z-10 w-full max-w-lg mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 z-20 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-[#121212]">100% Organic</p>
                      <p className="text-sm text-gray-500">Sertifikatlangan</p>
                    </div>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 z-20 animate-float-delayed">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold text-[#121212]">4.9</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">2000+ baholar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="w-full section-padding">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#121212] mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section ref={featuredRef} className="py-20 bg-gray-50">
        <div className="w-full section-padding">
          <div className="text-center mb-16">
            <span className="reveal opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 bg-[#ff4b2f]/10 text-[#ff4b2f] rounded-full text-sm font-medium mb-4">
              Maxsus takliflar
            </span>
            <h2 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-[#121212] mb-4">
              Tavsiya etilgan mevalar
            </h2>
            <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-600 max-w-2xl mx-auto">
              Eng mashhur va sifatli mevalarimiz bilan tanishing
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredFruits.map((fruit, index) => (
              <div
                key={fruit.id}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                  <img
                    src={fruit.image}
                    alt={fruit.nameUz}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#ff4b2f] text-white text-xs font-medium rounded-full">
                      {fruit.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-[#121212] mb-1">{fruit.nameUz}</h3>
                  <p className="text-sm text-gray-500 mb-3">{fruit.name}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-[#ff4b2f]">{fruit.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500"> so'm/{fruit.unit}</span>
                    </div>
                    <button className="w-10 h-10 bg-[#ff4b2f] text-white rounded-full flex items-center justify-center hover:bg-[#e5432a] transition-colors duration-300">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              Barcha mahsulotlar
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="w-full section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal opacity-0 translate-x-8 transition-all duration-700 relative">
              <div className="relative">
                <img
                  src="/about-image.jpg"
                  alt="About Fresh Market"
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-8 -right-8 bg-[#ff4b2f] text-white rounded-3xl p-8 shadow-xl">
                  <p className="text-4xl font-bold">5+</p>
                  <p className="text-sm opacity-90">yillik tajriba</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="reveal opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 bg-[#0e9f9f]/10 text-[#0e9f9f] rounded-full text-sm font-medium">
                Biz haqimizda
              </span>
              <h2 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-[#121212]">
                Sog'lom hayot uchun <br />
                <span className="text-gradient">tabiy mahsulotlar</span>
              </h2>
              <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-600 leading-relaxed">
                Fresh Market 2019-yildan beri O'zbekiston bo'ylab eng sifatli va yangi mevalarni 
                yetkazib berib kelmoqda. Biz fermerlardan to'g'ridan-to'g'ri olinadigan 
                mahsulotlarni sizning stolingizga yetkazamiz.
              </p>
              <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 text-gray-600 leading-relaxed">
                Har bir meva qat'iy sifat nazoratidan o'tadi va eng yaxshi holatda 
                sizga yetkaziladi. Bizning maqsadimiz - sog'lom turmush tarzini qo'llab-quvvatlash.
              </p>
              <div className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-400 flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                  Batafsil
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20 bg-[#121212]">
        <div className="w-full section-padding">
          <div className="text-center mb-16">
            <span className="reveal opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 bg-[#ff4b2f]/20 text-[#ff4b2f] rounded-full text-sm font-medium mb-4">
              Eng ko'p sotilgan
            </span>
            <h2 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-white mb-4">
              Mashhur mevalar
            </h2>
            <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-400 max-w-2xl mx-auto">
              Mijozlarimiz eng ko'p tanlagan mevalar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bestSellers.map((fruit, index) => (
              <div
                key={fruit.id}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 group bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square p-6">
                  <img
                    src={fruit.image}
                    alt={fruit.nameUz}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-lg text-white mb-1">{fruit.nameUz}</h3>
                  <p className="text-[#ff4b2f] font-bold">{fruit.price.toLocaleString()} so'm</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full section-padding">
          <div className="text-center mb-16">
            <span className="reveal opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 bg-[#0e9f9f]/10 text-[#0e9f9f] rounded-full text-sm font-medium mb-4">
              Mijozlar fikri
            </span>
            <h2 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-[#121212] mb-4">
              Nima deyishadi mijozlarimiz?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff4b2f] to-[#0e9f9f] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#121212]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="w-full section-padding">
          <div className="reveal opacity-0 scale-95 transition-all duration-700 bg-gradient-to-r from-[#ff4b2f] to-[#ff6b4f] rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Birinchi buyurtmangizga <br />
                <span className="text-yellow-300">20% chegirma</span>
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Hoziroq ro'yxatdan o'ting va birinchi xaridingizga 20% chegirma qo'lga kiriting!
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#ff4b2f] rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Xarid qilish
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0) translateX(0) scale(1);
        }
      `}</style>
    </div>
  );
};

export default Home;
