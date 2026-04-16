import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Send, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: "Bosh sahifa" },
    { path: '/products', label: "Mahsulotlar" },
    { path: '/about', label: "Biz haqimizda" },
    { path: '/contact', label: "Aloqa" },
  ];

  const serviceLinks = [
    { path: '/payment', label: "To'lov usullari" },
    { path: '/warehouse', label: "Ombor" },
    { path: '/reviews', label: "Mijozlar fikri" },
    { path: '/products', label: "Yetkazib berish" },
  ];

  return (
    <footer className="bg-[#121212] text-white">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 bg-[#ff4b2f] rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="font-bold text-2xl">Fresh Market</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Eng sifatli va yangi mevalarni bizdan xarid qiling. 
              Tabiy mahsulotlar - sog'lom hayot uchun!
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff4b2f] transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff4b2f] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff4b2f] transition-colors duration-300"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff4b2f] transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Tezkor havolalar</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#ff4b2f] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff4b2f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Xizmatlar</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#ff4b2f] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff4b2f] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Aloqa ma'lumotlari</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ff4b2f] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Toshkent shahar, Chilonzor tumani, 
                  Bunyodkor ko'chasi, 42-uy
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#ff4b2f] flex-shrink-0" />
                <a href="tel:+998901234567" className="text-gray-400 hover:text-[#ff4b2f] transition-colors duration-300 text-sm">
                  +998 90 123 45 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#ff4b2f] flex-shrink-0" />
                <a href="mailto:info@freshmarket.uz" className="text-gray-400 hover:text-[#ff4b2f] transition-colors duration-300 text-sm">
                  info@freshmarket.uz
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#ff4b2f] flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Dushanba - Shanba: 9:00 - 20:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Fresh Market. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-gray-400 hover:text-[#ff4b2f] text-sm transition-colors duration-300">
                Maxfiylik siyosati
              </Link>
              <Link to="#" className="text-gray-400 hover:text-[#ff4b2f] text-sm transition-colors duration-300">
                Foydalanish shartlari
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
