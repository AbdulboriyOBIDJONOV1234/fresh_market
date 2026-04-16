export interface Fruit {
  id: number;
  name: string;
  nameUz: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  description: string;
  benefits: string[];
  inStock: boolean;
  quantity: number;
}

export const fruits: Fruit[] = [
  {
    id: 1,
    name: "Red Apple",
    nameUz: "Qizil Olma",
    price: 15000,
    unit: "kg",
    image: "/fruits/apple.png",
    category: "Yerli mevalar",
    description: "Shirin va shifobaxsh qizil olma",
    benefits:["Yurak sog'ligini yaxshilaydi", "Vitamin C ga boy", "Antioksidantlar bilan to'la"],
    inStock: true,
    quantity: 100
  },
  {
    id: 2,
    name: "Banana",
    nameUz: "Banan",
    price: 18000,
    unit: "kg",
    image: "/fruits/banana.png",
    category: "Tropik mevalar",
    description: "Energiya beruvchi mazali banan",
    benefits: ["Kaliyga boy", "Energiya beradi", "Oshqozon uchun foydali"],
    inStock: true,
    quantity: 150
  },
  {
    id: 3,
    name: "Orange",
    nameUz: "Apelsin",
    price: 20000,
    unit: "kg",
    image: "/fruits/orange.png",
    category: "Sitrus mevalar",
    description: "Shifobaxsh va sersuv apelsin",
    benefits: ["Vitamin C ombori", "Immunitetni kuchaytiradi", "Teri uchun foydali"],
    inStock: true,
    quantity: 120
  },
  {
    id: 4,
    name: "Strawberry",
    nameUz: "Qulupnay",
    price: 35000,
    unit: "kg",
    image: "/fruits/strawberry.png",
    category: "Yerli mevalar",
    description: "Shirin va xushbo'y qulupnay",
    benefits: ["Antioksidantlar bilan to'la", "Yurak uchun foydali", "Qon bosimini normallashtiradi"],
    inStock: true,
    quantity: 80
  },
  {
    id: 5,
    name: "Kiwi",
    nameUz: "Kivi",
    price: 25000,
    unit: "kg",
    image: "/fruits/kiwi.png",
    category: "Import mevalar",
    description: "Vitaminli va foydali kivi",
    benefits: ["Vitamin C ga boy", "Ovqat hazm qilishni yaxshilaydi", "Uyquni yaxshilaydi"],
    inStock: true,
    quantity: 90
  },
  {
    id: 6,
    name: "Grapes",
    nameUz: "Uzum",
    price: 22000,
    unit: "kg",
    image: "/fruits/grapes.png",
    category: "Yerli mevalar",
    description: "Shirin va sersuv uzum",
    benefits: ["Yurak-qon tomirlar uchun", "Antioksidantlar ombori", "Kasalliklardan himoya qiladi"],
    inStock: true,
    quantity: 110
  },
  {
    id: 7,
    name: "Mango",
    nameUz: "Mango",
    price: 45000,
    unit: "kg",
    image: "/fruits/mango.png",
    category: "Tropik mevalar",
    description: "Shirin va xushbo'y mango",
    benefits: ["Vitamin A ga boy", "Ko'z salomatligi uchun", "Immunitetni kuchaytiradi"],
    inStock: true,
    quantity: 60
  },
  {
    id: 8,
    name: "Pineapple",
    nameUz: "Ananas",
    price: 40000,
    unit: "dona",
    image: "/fruits/pineapple.png",
    category: "Tropik mevalar",
    description: "Shifobaxsh va mazali ananas",
    benefits: ["Bromelain fermenti", "Yallig'lanishga qarshi", "Ovqat hazm qilishni yaxshilaydi"],
    inStock: true,
    quantity: 70
  },
  {
    id: 9,
    name: "Watermelon",
    nameUz: "Tarvuz",
    price: 8000,
    unit: "kg",
    image: "/fruits/watermelon.png",
    category: "Yerli mevalar",
    description: "Sersuv va tetiklantiruvchi tarvuz",
    benefits: ["Suv bilan to'la", "Buyraklar uchun foydali", "Qon bosimini pasaytiradi"],
    inStock: true,
    quantity: 200
  },
  {
    id: 10,
    name: "Papaya",
    nameUz: "Papaya",
    price: 35000,
    unit: "kg",
    image: "/fruits/papaya.png",
    category: "Tropik mevalar",
    description: "Shifobaxsh papaya mevasi",
    benefits: ["Papain fermenti", "Ovqat hazm qilishni yaxshilaydi", "Teri uchun foydali"],
    inStock: true,
    quantity: 50
  },
  {
    id: 11,
    name: "Peach",
    nameUz: "Shaftoli",
    price: 25000,
    unit: "kg",
    image: "/fruits/peach.png",
    category: "Yerli mevalar",
    description: "Shirin va xushbo'y shaftoli",
    benefits: ["Vitamin A va C", "Antioksidantlar", "Yurak uchun foydali"],
    inStock: true,
    quantity: 85
  },
  {
    id: 12,
    name: "Pear",
    nameUz: "Nok",
    price: 18000,
    unit: "kg",
    image: "/fruits/pear.png",
    category: "Yerli mevalar",
    description: "Shirin va sersuv nok",
    benefits: ["Tolaga boy", "Oshqozon uchun foydali", "Vitamin K ga boy"],
    inStock: true,
    quantity: 95
  },
  {
    id: 13,
    name: "Lemon",
    nameUz: "Limon",
    price: 15000,
    unit: "kg",
    image: "/fruits/lemon.png",
    category: "Sitrus mevalar",
    description: "Nordon va shifobaxsh limon",
    benefits: ["Vitamin C ombori", "Immunitetni kuchaytiradi", "Detoks effekti"],
    inStock: true,
    quantity: 130
  },
  {
    id: 14,
    name: "Lime",
    nameUz: "Laym",
    price: 20000,
    unit: "kg",
    image: "/fruits/lime.png",
    category: "Sitrus mevalar",
    description: "Nordon va xushbo'y laym",
    benefits: ["Vitamin C ga boy", "Metabolizmi tezlashtiradi", "Teri uchun foydali"],
    inStock: true,
    quantity: 75
  },
  {
    id: 15,
    name: "Grapefruit",
    nameUz: "Greypfrut",
    price: 22000,
    unit: "kg",
    image: "/fruits/grapefruit.png",
    category: "Sitrus mevalar",
    description: "Shifobaxsh greypfrut",
    benefits: ["Vazn yo'qotishga yordam", "Vitamin C", "Yurak sog'ligini yaxshilaydi"],
    inStock: true,
    quantity: 65
  },
  {
    id: 16,
    name: "Blueberry",
    nameUz: "Ko'karinka",
    price: 55000,
    unit: "kg",
    image: "/fruits/blueberry.png",
    category: "Import mevalar",
    description: "Foydali va mazali ko'karinka",
    benefits: ["Antioksidantlar ombori", "Miya faoliyatini yaxshilaydi", "Ko'rishni mustahkamlaydi"],
    inStock: true,
    quantity: 40
  },
  {
    id: 17,
    name: "Raspberry",
    nameUz: "Malina",
    price: 50000,
    unit: "kg",
    image: "/fruits/raspberry.png",
    category: "Yerli mevalar",
    description: "Shirin va xushbo'y malina",
    benefits: ["Tolaga boy", "Vitamin C", "Qon aylanishini yaxshilaydi"],
    inStock: true,
    quantity: 55
  },
  {
    id: 18,
    name: "Blackberry",
    nameUz: "O'rik",
    price: 45000,
    unit: "kg",
    image: "/fruits/blackberry.png",
    category: "Yerli mevalar",
    description: "Shirin va foydali o'rik",
    benefits: ["Vitamin K ga boy", "Antioksidantlar", "Immunitetni kuchaytiradi"],
    inStock: true,
    quantity: 45
  },
  {
    id: 19,
    name: "Pomegranate",
    nameUz: "Anor",
    price: 30000,
    unit: "kg",
    image: "/fruits/pomegranate.png",
    category: "Yerli mevalar",
    description: "Shifobaxsh va sersuv anor",
    benefits: ["Antioksidantlar ombori", "Yurak uchun foydali", "Qonni tozalaydi"],
    inStock: true,
    quantity: 100
  },
  {
    id: 20,
    name: "Guava",
    nameUz: "Guava",
    price: 28000,
    unit: "kg",
    image: "/fruits/guava.png",
    category: "Tropik mevalar",
    description: "Vitaminli guava mevasi",
    benefits: ["Vitamin C ombori", "Immunitetni kuchaytiradi", "Teri uchun foydali"],
    inStock: true,
    quantity: 70
  },
  {
    id: 21,
    name: "Dragon Fruit",
    nameUz: "Ajdar mevasi",
    price: 60000,
    unit: "kg",
    image: "/fruits/dragonfruit.png",
    category: "Tropik mevalar",
    description: "Ekzotik ajdar mevasi",
    benefits: ["Antioksidantlar", "Oshqozon uchun foydali", "Vitamin B ga boy"],
    inStock: true,
    quantity: 35
  },
  {
    id: 22,
    name: "Passion Fruit",
    nameUz: "Strast mevasi",
    price: 55000,
    unit: "kg",
    image: "/fruits/passionfruit.png",
    category: "Tropik mevalar",
    description: "Nordon va xushbo'y strast mevasi",
    benefits: ["Vitamin A va C", "Immunitetni kuchaytiradi", "Uyquni yaxshilaydi"],
    inStock: true,
    quantity: 40
  },
  {
    id: 23,
    name: "Lychee",
    nameUz: "Lichi",
    price: 48000,
    unit: "kg",
    image: "/fruits/lychee.png",
    category: "Tropik mevalar",
    description: "Shirin va xushbo'y lichi",
    benefits: ["Vitamin C ga boy", "Qon aylanishini yaxshilaydi", "Immunitetni kuchaytiradi"],
    inStock: true,
    quantity: 50
  },
  {
    id: 24,
    name: "Apricot",
    nameUz: "O'rik",
    price: 20000,
    unit: "kg",
    image: "/fruits/apricot.png",
    category: "Yerli mevalar",
    description: "Shirin va foydali o'rik",
    benefits: ["Vitamin A ga boy", "Ko'z salomatligi uchun", "Teri uchun foydali"],
    inStock: true,
    quantity: 90
  },
  {
    id: 25,
    name: "Plum",
    nameUz: "Olcha",
    price: 18000,
    unit: "kg",
    image: "/fruits/plum.png",
    category: "Yerli mevalar",
    description: "Shirin va shifobaxsh olcha",
    benefits: ["Tolaga boy", "Oshqozon uchun foydali", "Vitamin K ga boy"],
    inStock: true,
    quantity: 100
  },
  {
    id: 26,
    name: "Cherry",
    nameUz: "Gilos",
    price: 40000,
    unit: "kg",
    image: "/fruits/cherry.png",
    category: "Yerli mevalar",
    description: "Shirin va xushbo'y gilos",
    benefits: ["Antioksidantlar", "Yallig'lanishga qarshi", "Uyquni yaxshilaydi"],
    inStock: true,
    quantity: 60
  },
  {
    id: 27,
    name: "Fig",
    nameUz: "Anjir",
    price: 35000,
    unit: "kg",
    image: "/fruits/fig.png",
    category: "Yerli mevalar",
    description: "Shirin va foydali anjir",
    benefits: ["Kaltsiyga boy", "Suyaklar uchun foydali", "Tolaga boy"],
    inStock: true,
    quantity: 55
  },
  {
    id: 28,
    name: "Dates",
    nameUz: "Xurmo",
    price: 45000,
    unit: "kg",
    image: "/fruits/dates.png",
    category: "Import mevalar",
    description: "Shirin va quvvat beruvchi xurmo",
    benefits: ["Energiya beradi", "Temirga boy", "Oshqozon uchun foydali"],
    inStock: true,
    quantity: 80
  },
  {
    id: 29,
    name: "Cantaloupe",
    nameUz: "Qovun",
    price: 12000,
    unit: "kg",
    image: "/fruits/cantaloupe.png",
    category: "Yerli mevalar",
    description: "Shirin va sersuv qovun",
    benefits: ["Vitamin A va C", "Suv bilan to'la", "Teri uchun foydali"],
    inStock: true,
    quantity: 150
  },
  {
    id: 30,
    name: "Honeydew",
    nameUz: "Kovun",
    price: 10000,
    unit: "kg",
    image: "/fruits/honeydew.png",
    category: "Yerli mevalar",
    description: "Shirin va tetiklantiruvchi kovun",
    benefits: ["Vitamin C ga boy", "Suv bilan to'la", "Buyraklar uchun foydali"],
    inStock: true,
    quantity: 140
  },
  {
    id: 31,
    name: "Nectarine",
    nameUz: "Nektarin",
    price: 28000,
    unit: "kg",
    image: "/fruits/nectarine.png",
    category: "Yerli mevalar",
    description: "Shirin va sersuv nektarin",
    benefits: ["Vitamin A va C", "Antioksidantlar", "Yurak uchun foydali"],
    inStock: true,
    quantity: 75
  },
  {
    id: 32,
    name: "Tangerine",
    nameUz: "Mandarin",
    price: 16000,
    unit: "kg",
    image: "/fruits/tangerine.png",
    category: "Sitrus mevalar",
    description: "Shirin va xushbo'y mandarin",
    benefits: ["Vitamin C ombori", "Immunitetni kuchaytiradi", "Teri uchun foydali"],
    inStock: true,
    quantity: 180
  },
  {
    id: 33,
    name: "Persimmon",
    nameUz: "Xurmo (Sharon)",
    price: 32000,
    unit: "kg",
    image: "/fruits/persimmon.png",
    category: "Import mevalar",
    description: "Shirin va xushbo'y xurmo",
    benefits: ["Vitamin A ga boy", "Ko'z salomatligi uchun", "Immunitetni kuchaytiradi"],
    inStock: true,
    quantity: 65
  },
  {
    id: 34,
    name: "Starfruit",
    nameUz: "Karambola",
    price: 50000,
    unit: "kg",
    image: "/fruits/starfruit.png",
    category: "Tropik mevalar",
    description: "Ekzotik karambola mevasi",
    benefits: ["Vitamin C ga boy", "Qon bosimini pasaytiradi", "Antioksidantlar"],
    inStock: true,
    quantity: 40
  },
  {
    id: 35,
    name: "Jackfruit",
    nameUz: "Jakkfruit",
    price: 55000,
    unit: "kg",
    image: "/fruits/jackfruit.png",
    category: "Tropik mevalar",
    description: "Katta va foydali jakkfruit",
    benefits: ["Oqsilga boy", "Tolaga boy", "Vitamin B ga boy"],
    inStock: true,
    quantity: 30
  },
  {
    id: 36,
    name: "Durian",
    nameUz: "Durian",
    price: 80000,
    unit: "kg",
    image: "/fruits/durian.png",
    category: "Tropik mevalar",
    description: "Ekzotik va nafis durian",
    benefits: ["Energiya beradi", "Vitamin B ga boy", "Oshqozon uchun foydali"],
    inStock: true,
    quantity: 25
  }
];

export const categories = [
  "Barchasi",
  "Yerli mevalar",
  "Tropik mevalar",
  "Sitrus mevalar",
  "Import mevalar"
];

export const getFruitById = (id: number): Fruit | undefined => {
  return fruits.find(fruit => fruit.id === id);
};

export const getFruitsByCategory = (category: string): Fruit[] => {
  if (category === "Barchasi") return fruits;
  return fruits.filter(fruit => fruit.category === category);
};

export const getFeaturedFruits = (): Fruit[] => {
  return fruits.slice(0, 8);
};

export const getBestSellers = (): Fruit[] => {
  return fruits.filter(fruit => [1, 2, 3, 7, 8, 16, 19, 32].includes(fruit.id));
};
