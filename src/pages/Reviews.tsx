import { useEffect, useState } from 'react';
import { Star, Quote, ThumbsUp, MessageCircle, User, Send } from 'lucide-react';

const Reviews = () => {
  const [newReview, setNewReview] = useState({ name: '', rating: 5, text: '' });
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Aziza Karimova",
      avatar: "A",
      rating: 5,
      text: "Fresh Marketdan har doim mamnunman. Mevlar har doim yangi va sifatli keladi. Yetkazib berish tez va professional. Maxsus olma va uzumlarini tavsiya qilaman!",
      date: "2024-01-15",
      likes: 12,
      product: "Qizil Olma"
    },
    {
      id: 2,
      name: "Bobur Aliyev",
      avatar: "B",
      rating: 5,
      text: "Restoranimiz uchun mevalar har doim Fresh Marketdan olamiz. Sifat va xizmatdan juda mamnunmiz. 2 yildan beri hamkorlik qilamiz.",
      date: "2024-01-10",
      likes: 8,
      product: "Banan"
    },
    {
      id: 3,
      name: "Gulnora Rahimova",
      avatar: "G",
      rating: 5,
      text: "Bolalarim uchun eng yaxshi mevalarni shu yerdan olaman. Hammasi tabiy va foydali. Mango va ananaslari ajoyib!",
      date: "2024-01-08",
      likes: 15,
      product: "Mango"
    },
    {
      id: 4,
      name: "Jasur Toshmatov",
      avatar: "J",
      rating: 4,
      text: "Yaxshi xizmat, tez yetkazib berish. Mevlar yangi. Narxlar biroz yuqori, lekin sifatga arziydi.",
      date: "2024-01-05",
      likes: 6,
      product: "Apelsin"
    },
    {
      id: 5,
      name: "Nodira Saidova",
      avatar: "N",
      rating: 5,
      text: "Qulupnaylari juda mazali! Tort tayyorlash uchun oldim, mehmonlar juda maqtashdi. Rahmat Fresh Market!",
      date: "2024-01-03",
      likes: 10,
      product: "Qulupnay"
    },
    {
      id: 6,
      name: "Kamoliddin Rahimov",
      avatar: "K",
      rating: 5,
      text: "Kivi va anorlari ajoyib. Har doim shu yerdan olaman. Yetkazib beruvchilar juda muloyim.",
      date: "2023-12-28",
      likes: 7,
      product: "Kivi"
    }
  ]);

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
    if (newReview.name && newReview.text) {
      const review = {
        id: reviews.length + 1,
        name: newReview.name,
        avatar: newReview.name.charAt(0).toUpperCase(),
        rating: newReview.rating,
        text: newReview.text,
        date: new Date().toISOString().split('T')[0],
        likes: 0,
        product: "Barcha mahsulotlar"
      };
      setReviews([review, ...reviews]);
      setNewReview({ name: '', rating: 5, text: '' });
    }
  };

  const stats = {
    average: 4.8,
    total: 1247,
    five: 980,
    four: 180,
    three: 60,
    two: 15,
    one: 12
  };

  const getRatingPercentage = (count: number) => (count / stats.total) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="w-full section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal opacity-0 translate-y-8 transition-all duration-700 inline-block px-4 py-2 bg-[#ff4b2f]/10 text-[#ff4b2f] rounded-full text-sm font-medium mb-4">
            Mijozlar fikri
          </span>
          <h1 className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 text-4xl md:text-5xl font-bold text-[#121212] mb-4">
            Nima deyishadi <span className="text-gradient">mijozlarimiz?</span>
          </h1>
          <p className="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 text-gray-600 max-w-2xl mx-auto">
            Bizning xizmatlarimiz haqida mijozlarimizning fikrlari
          </p>
        </div>

        {/* Rating Overview */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl shadow-xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Average Rating */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <span className="text-6xl font-bold text-[#121212]">{stats.average}</span>
                <div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${i < Math.floor(stats.average) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-500 mt-1">{stats.total} ta baho</p>
                </div>
              </div>
              <p className="text-gray-600">
                Mijozlarimizning {Math.round((stats.five / stats.total) * 100)}% 5 yulduz baho berdi
              </p>
            </div>

            {/* Right - Rating Bars */}
            <div className="space-y-2">
              {[
                { stars: 5, count: stats.five },
                { stars: 4, count: stats.four },
                { stars: 3, count: stats.three },
                { stars: 2, count: stats.two },
                { stars: 1, count: stats.one }
              ].map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 w-8">{item.stars}</span>
                  <Star className="w-4 h-4 text-gray-400" />
                  <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                      style={{ width: `${getRatingPercentage(item.count)}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-12 text-right">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add Review Form */}
        <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-gradient-to-r from-[#ff4b2f] to-[#ff6b4f] rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Fikringizni qoldiring</h2>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/80 text-sm mb-2">Ismingiz</label>
              <input
                type="text"
                value={newReview.name}
                onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-white focus:ring-2 focus:ring-white/30 outline-none transition-all duration-300"
                placeholder="Ismingizni kiriting"
              />
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-2">Bahongiz</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                    className="p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-300"
                  >
                    <Star
                      className={`w-6 h-6 ${star <= newReview.rating ? 'fill-yellow-300 text-yellow-300' : 'text-white/60'}`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-white/80 text-sm mb-2">Fikringiz</label>
              <textarea
                value={newReview.text}
                onChange={(e) => setNewReview(prev => ({ ...prev, text: e.target.value }))}
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 focus:border-white focus:ring-2 focus:ring-white/30 outline-none transition-all duration-300 resize-none"
                placeholder="Fikringizni yozing..."
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="px-8 py-3 bg-white text-[#ff4b2f] rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Yuborish
              </button>
            </div>
          </form>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500"
              style={{ transitionDelay: `${(index % 6) * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-[#ff4b2f]/20 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 mb-6 leading-relaxed">{review.text}</p>

              {/* Product Tag */}
              <div className="mb-4">
                <span className="px-3 py-1 bg-[#ff4b2f]/10 text-[#ff4b2f] rounded-full text-sm">
                  {review.product}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#ff4b2f] to-[#0e9f9f] rounded-full flex items-center justify-center text-white font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-[#121212]">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <button className="flex items-center gap-1 text-gray-400 hover:text-[#ff4b2f] transition-colors duration-300">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">{review.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16">
          <div className="reveal opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-3xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: User, label: "5000+ mijoz", sublabel: "Bizga ishonadi" },
                { icon: Star, label: "4.8/5 o'rtacha", sublabel: "Baho" },
                { icon: MessageCircle, label: "1200+ sharh", sublabel: "Mijozlardan" },
                { icon: ThumbsUp, label: "98%", sublabel: "Tavsiya etadi" }
              ].map((badge, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 bg-[#ff4b2f]/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <badge.icon className="w-7 h-7 text-[#ff4b2f]" />
                  </div>
                  <p className="font-bold text-[#121212]">{badge.label}</p>
                  <p className="text-sm text-gray-500">{badge.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
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

export default Reviews;
