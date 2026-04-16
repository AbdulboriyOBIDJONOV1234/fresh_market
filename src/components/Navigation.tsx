import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: "Bosh sahifa" },
    { path: '/products', label: "Mahsulotlar" },
    { path: '/about', label: "Biz haqimizda" },
    { path: '/contact', label: "Biz bilan bog'laning" },
    { path: '/payment', label: "To'lov" },
    { path: '/warehouse', label: "Ombor" },
    { path: '/reviews', label: "Mijozlar fikri" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#ff4b2f] rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className={`font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-[#121212]' : 'text-[#121212]'
            }`}>
              Fresh Market
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-[#ff4b2f] text-white'
                    : isScrolled
                    ? 'text-[#121212] hover:bg-[#ff4b2f]/10 hover:text-[#ff4b2f]'
                    : 'text-[#121212] hover:bg-[#ff4b2f]/10 hover:text-[#ff4b2f]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+998901234567"
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#0e9f9f]/10 text-[#0e9f9f] hover:bg-[#0e9f9f] hover:text-white'
                  : 'bg-[#0e9f9f]/10 text-[#0e9f9f] hover:bg-[#0e9f9f] hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+998 90 123 45 67</span>
            </a>
            <button className="relative p-2 rounded-full bg-[#ff4b2f] text-white hover:bg-[#e5432a] transition-colors duration-300">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#0e9f9f] text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-[#ff4b2f] text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[500px] mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'bg-[#ff4b2f] text-white'
                    : 'text-[#121212] hover:bg-[#ff4b2f]/10 hover:text-[#ff4b2f]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+998901234567"
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0e9f9f]/10 text-[#0e9f9f]"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+998 90 123 45 67</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
