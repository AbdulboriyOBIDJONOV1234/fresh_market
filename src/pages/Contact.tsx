import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Manzil",
      content: "Toshkent shahar, Chilonzor tumani, Bunyodkor ko'chasi, 42-uy",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+998 90 123 45 67",
      link: "tel:+998901234567",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@freshmarket.uz",
      link: "mailto:info@freshmarket.uz",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Clock,
      title: "Ish vaqti",
      content: "Dushanba - Shanba: 9:00 - 20:00",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="w-full section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 bg-[#ff4b2f]/10 text-[#ff4b2f] rounded-full text-sm font-medium mb-4">
            Biz bilan bog'laning
          </span>
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-[#121212] mb-4">
            Aloqa <span className="text-gradient">ma'lumotlari</span>
          </h1>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-600 max-w-2xl mx-auto">
            Savollaringiz bormi? Biz bilan bog'laning, biz sizga yordam berishdan mamnunmiz!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center mb-4`}>
                <info.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg text-[#121212] mb-2">{info.title}</h3>
              {info.link ? (
                <a 
                  href={info.link}
                  className="text-gray-600 hover:text-[#ff4b2f] transition-colors duration-300"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-gray-600">{info.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="reveal opacity-0 translate-x-8 transition-all duration-700 bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#121212] mb-6">Xabar yuborish</h2>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-[#121212] mb-2">Rahmat!</h3>
                <p className="text-gray-600">Xabaringiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ismingiz</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff4b2f] focus:ring-2 focus:ring-[#ff4b2f]/20 outline-none transition-all duration-300"
                      placeholder="Ismingizni kiriting"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff4b2f] focus:ring-2 focus:ring-[#ff4b2f]/20 outline-none transition-all duration-300"
                      placeholder="+998 90 123 45 67"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff4b2f] focus:ring-2 focus:ring-[#ff4b2f]/20 outline-none transition-all duration-300"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mavzu</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff4b2f] focus:ring-2 focus:ring-[#ff4b2f]/20 outline-none transition-all duration-300"
                  >
                    <option value="">Mavzuni tanlang</option>
                    <option value="order">Buyurtma haqida</option>
                    <option value="product">Mahsulot haqida</option>
                    <option value="delivery">Yetkazib berish</option>
                    <option value="partnership">Hamkorlik</option>
                    <option value="other">Boshqa</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Xabar</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#ff4b2f] focus:ring-2 focus:ring-[#ff4b2f]/20 outline-none transition-all duration-300 resize-none"
                    placeholder="Xabaringizni yozing..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-[#ff4b2f] text-white rounded-xl font-medium hover:bg-[#e5432a] transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Yuborish
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="reveal opacity-0 translate-x-8 transition-all duration-700 delay-200 bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="h-full min-h-[400px] bg-gray-100 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.6387425581234!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzU4LjIiTiA2OcKwMTQnMjQuNCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fresh Market Location"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#ff4b2f] rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#121212]">Fresh Market</p>
                    <p className="text-sm text-gray-500">Toshkent, Chilonzor tumani</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="reveal opacity-0 translate-y-8 transition-all duration-700 text-3xl font-bold text-[#121212]">
              Ko'p so'raladigan savollar
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Yetkazib berish qancha vaqt oladi?",
                a: "Buyurtmalaringizni 24 soat ichida yetkazib beramiz. Toshkent shahri ichida bepul yetkazib berish."
              },
              {
                q: "Qanday to'lov usullari mavjud?",
                a: "Naqd pul, karta, Click, Payme va boshqa elektron to'lov usullarini qabul qilamiz."
              },
              {
                q: "Mahsulotlar qayerdan olinadi?",
                a: "Barcha mahsulotlarimiz mahalliy fermerlardan to'g'ridan-to'g'ri olinadi va sifat nazoratidan o'tadi."
              },
              {
                q: "Buyurtmani qanday bekor qilish mumkin?",
                a: "Buyurtmani yetkazib berishdan oldin istalgan vaqtda bekor qilish mumkin."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-2xl p-6 shadow-lg"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="font-bold text-[#121212] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
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

export default Contact;
