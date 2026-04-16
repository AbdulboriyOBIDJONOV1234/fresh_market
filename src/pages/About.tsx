import { useEffect } from 'react';
import { Check, Award, Users, Truck, Leaf, Heart } from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: Leaf,
      title: "Tabiylik",
      description: "Faqat tabiy va organik mahsulotlar"
    },
    {
      icon: Heart,
      title: "Sifat",
      description: "Har bir mahsulot qat'iy nazoratdan o'tadi"
    },
    {
      icon: Truck,
      title: "Tezlik",
      description: "24 soat ichida yetkazib berish"
    },
    {
      icon: Users,
      title: "Mijozlar",
      description: "Mijozlarimiz - bizning ustuvorligimiz"
    }
  ];

  const stats = [
    { number: "5+", label: "Yillik tajriba" },
    { number: "30+", label: "Meva turlari" },
    { number: "5000+", label: "Mamnun mijozlar" },
    { number: "50+", label: "Hamkor fermalar" }
  ];

  const team = [
    {
      name: "Azizbek Rahimov",
      role: "Asoschi va CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Dilnoza Karimova",
      role: "Marketing direktori",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Jasur Aliyev",
      role: "Operatsiya direktori",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Gulnora Saidova",
      role: "Sifat nazorati",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  const advantages = [
    "Fermadan to'g'ridan-to'g'ri yetkazib berish",
    "Har kuni yangi mahsulotlar",
    "Qat'iy sifat nazorati",
    "Qulay narxlar",
    "Bepul yetkazib berish (50 000 so'mdan)",
    "24/7 mijozlarni qo'llab-quvvatlash"
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Hero Section */}
      <section className="w-full section-padding mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="reveal opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 bg-[#ff4b2f]/10 text-[#ff4b2f] rounded-full text-sm font-medium">
              Biz haqimizda
            </span>
            <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-[#121212] leading-tight">
              Sog'lom hayot uchun <br />
              <span className="text-gradient">eng yaxshi mevalar</span>
            </h1>
            <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-lg text-gray-600 leading-relaxed">
              Fresh Market 2019-yildan beri O'zbekiston bo'ylab eng sifatli va yangi mevalarni 
              yetkazib berib kelmoqda. Bizning maqsadimiz - har bir oilaga tabiy va foydali 
              mahsulotlarni yetkazib berish.
            </p>
            <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 text-gray-600 leading-relaxed">
              Biz fermerlardan to'g'ridan-to'g'ri olinadigan mahsulotlarni sizning stolingizga 
              yetkazamiz. Har bir meva qat'iy sifat nazoratidan o'tadi va eng yaxshi holatda 
              sizga yetkaziladi.
            </p>
          </div>
          
          <div className="reveal opacity-0 translate-x-8 transition-all duration-700 delay-200 relative">
            <img
              src="/about-image.jpg"
              alt="Fresh Market team"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#ff4b2f] text-white rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold">2019</p>
              <p className="text-sm opacity-90">dan beri xizmatdamiz</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full section-padding mb-20">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-[#ff4b2f] mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full section-padding mb-20">
        <div className="text-center mb-12">
          <span className="reveal opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 bg-[#0e9f9f]/10 text-[#0e9f9f] rounded-full text-sm font-medium mb-4">
            Qadriyatlarimiz
          </span>
          <h2 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl md:text-4xl font-bold text-[#121212]">
            Nima uchun biz?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff4b2f] to-[#0e9f9f] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#121212] mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="w-full section-padding mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal opacity-0 translate-x-8 transition-all duration-700 order-2 lg:order-1">
            <img
              src="/fruits/mango.png"
              alt="Fresh fruits"
              className="rounded-3xl shadow-xl w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <span className="reveal opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 bg-[#ff4b2f]/10 text-[#ff4b2f] rounded-full text-sm font-medium">
              Afzalliklarimiz
            </span>
            <h2 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl md:text-4xl font-bold text-[#121212]">
              Bizning ustunliklarimiz
            </h2>
            <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-600">
              Fresh Market sifatli mahsulotlar va ajoyib xizmat ko'rsatish orqali 
              mijozlarimizning ishonchini qo'lga kiritdi.
            </p>
            
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li
                  key={index}
                  className="reveal opacity-0 translate-y-8 transition-all duration-700 flex items-center gap-3"
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full section-padding mb-20">
        <div className="text-center mb-12">
          <span className="reveal opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 bg-[#0e9f9f]/10 text-[#0e9f9f] rounded-full text-sm font-medium mb-4">
            Jamoamiz
          </span>
          <h2 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-3xl md:text-4xl font-bold text-[#121212]">
            Bizning jamoa
          </h2>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-600 mt-4 max-w-2xl mx-auto">
            Professional va tajribali jamoamiz sizga eng yaxshi xizmatni ko'rsatishga tayyor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg text-[#121212]">{member.name}</h3>
                <p className="text-[#0e9f9f]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section className="w-full section-padding">
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-[#121212] rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sertifikatlangan mahsulotlar
              </h2>
              <p className="text-gray-400 mb-6">
                Barcha mahsulotlarimiz xalqaro sifat standartlariga mos keladi va 
                tegishli sertifikatlarga ega.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-[#ff4b2f]" />
                  <span className="text-sm">ISO 9001</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-[#ff4b2f]" />
                  <span className="text-sm">HACCP</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 text-[#ff4b2f]" />
                  <span className="text-sm">Organic</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#ff4b2f] to-[#0e9f9f] rounded-full flex items-center justify-center">
                <Award className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .reveal.animate-in {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }
      `}</style>
    </div>
  );
};

export default About;
