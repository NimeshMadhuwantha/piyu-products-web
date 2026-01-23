export type FoodItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  images?: string[]; // Multiple images for slider
  description: string;
  descriptionSinhala?: string; // Description in Sinhala
  detailedDescription?: string; // Extended description
  detailedDescriptionSinhala?: string; // Extended description in Sinhala
  badge?: string;
  category: string;
  weight: number;
  ingredients?: string; // Ingredients list
  nutritionalInfo?: string; // Nutritional information
  sourceInfo?: {
    english: string; // Source information in English
    sinhala: string; // Source information in Sinhala
  };
  allergenInfo?: string; // Allergen information
  storageInstructions?: string; // How to store the product
};

export const foodItems: FoodItem[] = [
  {
    id: "item-1",
    name: "Spicy nut sgsgsd s gsrg srs",
    price: 2300,
    image: "/assets/images/piti.webp",
    images: ["/assets/images/piti.webp", "/assets/images/kosBite.webp", "/assets/images/piti.webp"],
    description: "Crunchy peanuts coated in spicy masalunchy peanuts coated in spicy masalaa.",
    descriptionSinhala: "කුළුබඩු රස සහිත හපන රටකජු වලින් සාදන ලද විශේෂ ආහාරයකි.",
    detailedDescription: "Our premium spicy nuts are carefully selected and roasted to perfection. Each nut is coated with a special blend of aromatic spices that create an unforgettable taste experience. Perfect for snacking or as a side dish with your favorite beverage.",
    detailedDescriptionSinhala: "අපගේ උසස් තත්ත්වයේ කුළුබඩු රස සහිත රටකජු ප්‍රවේශමින් තෝරාගෙන පරිපූර්ණත්වයට රෝස්ට් කර ඇත. සෑම රටකජුවක්ම විශේෂ සුවඳ කුළුබඩු මිශ්‍රණයකින් ආලේප කර ඇති අතර එය අමතක නොවන රස අත්දැකීමක් ලබා දෙයි. සුලු කෑමක් ලෙස හෝ ඔබේ ප්‍රියතම පානයක් සමඟ පැත්තක කෑමක් ලෙස පරිපූර්ණයි.",
    category: "Spicy",
    weight: 250,
    ingredients: "Peanuts, Spices (Chili, Cumin, Coriander), Salt, Oil",
    nutritionalInfo: "Per 100g: Energy 567kcal, Protein 26g, Carbohydrates 16g, Fat 49g",
    sourceInfo: {
      english: "Sourced from local farmers in Sri Lanka's central province. Our nuts are carefully selected and processed using traditional methods to ensure maximum flavor and quality.",
      sinhala: "ශ්‍රී ලංකාවේ මධ්‍යම පළාතේ ප්‍රාදේශීය ගොවීන්ගෙන් ලබාගත් අතර, උපරිම රසය සහ ගුණාත්මකභාවය සහතික කිරීම සඳහා සාම්ප්‍රදායික ක්‍රම භාවිතා කරමින් සකස් කරනු ලැබේ."
    },
    allergenInfo: "Contains: Peanuts. May contain traces of other nuts.",
    storageInstructions: "Store in a cool, dry place. Once opened, consume within 7 days for best quality."
  },
  {
    id: "item-2",
    name: "Spicy",
    price: 450,
    image: "/assets/images/piti.webp",
    images: ["/assets/images/piti.webp", "/assets/images/kosBite.webp", "/assets/images/piti.webp"],
    description: "Crunchy peanuts coated in spicy masala.",
    descriptionSinhala: "කුළුබඩු රස සහිත හපන රටකජු.",
    detailedDescription: "A delightful blend of spices and crunch in every bite. Perfect for those who love a kick in their snacks.",
    detailedDescriptionSinhala: "සෑම කටක්ම කුළුබඩු සහ හපනය අතිශයින් රසවත් ලෙස එකතු වී ඇත. ඔබේ සුලු කෑමවල තියුණු රසයකට කැමති අය සඳහා පරිපූර්ණයි.",
    category: "Spicy",
    weight: 100,
    ingredients: "Peanuts, Spice Mix, Salt, Vegetable Oil",
    nutritionalInfo: "Per 100g: Energy 550kcal, Protein 24g, Carbohydrates 15g, Fat 47g",
    sourceInfo: {
      english: "Made with locally sourced ingredients and traditional Sri Lankan spice blends.",
      sinhala: "ප්‍රාදේශීයව ලබාගත් අමුද්‍රව්‍ය සහ සාම්ප්‍රදායික ශ්‍රී ලාංකික කුළුබඩු මිශ්‍රණයකින් සාදා ඇත."
    },
    allergenInfo: "Contains: Peanuts",
    storageInstructions: "Keep in airtight container after opening."
  },
  {
    id: "item-3",
    name: "Peanuts",
    price: 350,
    image: "/assets/images/kosBite.webp",
    images: ["/assets/images/kosBite.webp", "/assets/images/piti.webp", "/assets/images/kosBite.webp"],
    description: "Crunchy peanuts coated in spicy masala.",
    descriptionSinhala: "කුළුබඩු රස සහිත හපන රටකජු.",
    detailedDescription: "Classic roasted peanuts with a savory twist. Our special coating makes these peanuts irresistibly delicious.",
    detailedDescriptionSinhala: "රසවත් විශේෂත්වයක් සහිත සම්භාව්‍ය රෝස්ට් කළ රටකජු. අපගේ විශේෂ ආලේපනය මෙම රටකජු නැවත නොහැරී රසවත් කරයි.",
    category: "Savory",
    weight: 150,
    ingredients: "Roasted Peanuts, Savory Spice Mix, Sea Salt",
    nutritionalInfo: "Per 100g: Energy 560kcal, Protein 25g, Carbohydrates 14g, Fat 48g",
    sourceInfo: {
      english: "Premium quality peanuts sourced from certified farms in Sri Lanka.",
      sinhala: "ශ්‍රී ලංකාවේ සහතික කළ ගොවිපලවල්වලින් ලබාගත් උසස් තත්ත්වයේ රටකජු."
    },
    allergenInfo: "Contains: Peanuts",
    storageInstructions: "Store in cool and dry place away from direct sunlight."
  },
  {
    id: "item-4",
    name: "Spanuts",
    price: 500,
    image: "/assets/images/piti.webp",
    images: ["/assets/images/piti.webp", "/assets/images/kosBite.webp", "/assets/images/piti.webp"],
    description: "Crunchy peanuts coated in spicy masala.",
    descriptionSinhala: "කුළුබඩු රස සහිත හපන රටකජු.",
    detailedDescription: "Experience the perfect blend of spice and crunch with our signature Spanuts.",
    detailedDescriptionSinhala: "අපගේ සුවිශේෂී Spanuts සමග කුළුබඩු සහ හපනයේ පරිපූර්ණ මිශ්‍රණය අත්විඳින්න.",
    category: "Spicy",
    weight: 200,
    ingredients: "Peanuts, Special Spice Blend, Salt, Palm Oil",
    nutritionalInfo: "Per 100g: Energy 570kcal, Protein 26g, Carbohydrates 16g, Fat 50g",
    sourceInfo: {
      english: "Handcrafted using traditional methods passed down through generations of Sri Lankan food artisans.",
      sinhala: "ශ්‍රී ලාංකික ආහාර ශිල්පීන්ගේ පරම්පරා ගණනාවක් තිස්සේ සම්ප්‍රේෂණය වී ඇති සාම්ප්‍රදායික ක්‍රම භාවිතයෙන් අතින් සාදා ඇත."
    },
    allergenInfo: "Contains: Peanuts",
    storageInstructions: "Best consumed within 14 days of opening."
  },
  {
    id: "item-5",
    name: "art1",
    price: 600,
    image: "/assets/images/piti.webp",
    images: ["/assets/images/piti.webp", "/assets/images/kosBite.webp", "/assets/images/piti.webp"],
    description: "Crunchy peanuts coated in spicy masala.",
    descriptionSinhala: "කුළුබඩු රස සහිත හපන රටකජු.",
    detailedDescription: "A sweet delight that combines traditional flavors with modern taste preferences.",
    detailedDescriptionSinhala: "සාම්ප්‍රදායික රස නවීන රස මනාපයන් සමඟ ඒකාබද්ධ කරන මිහිරි ප්‍රමෝදයක්.",
    category: "Sweet",
    weight: 300,
    ingredients: "Peanuts, Sugar, Honey, Cinnamon, Cardamom",
    nutritionalInfo: "Per 100g: Energy 580kcal, Protein 22g, Carbohydrates 25g, Fat 45g",
    sourceInfo: {
      english: "Made with natural honey from Sri Lankan beekeepers and organic spices.",
      sinhala: "ශ්‍රී ලාංකික මී මැසි පාලකයන්ගෙන් ලබාගත් ස්වාභාවික මී පැණි සහ කාබනික කුළුබඩු භාවිතයෙන් සාදා ඇත."
    },
    allergenInfo: "Contains: Peanuts, Honey",
    storageInstructions: "Store in airtight container in cool place."
  },
  {
    id: "item-6",
    name: "Ats",
    price: 250,
    image: "/assets/images/piti.webp",
    images: ["/assets/images/piti.webp", "/assets/images/kosBite.webp", "/assets/images/piti.webp"],
    description: "Crunchy peanuts coated in spicy masala.",
    detailedDescription: "Light and sweet snack perfect for any time of the day.",
    category: "Sweet",
    weight: 75,
    ingredients: "Peanuts, Sugar Coating, Natural Flavors",
    nutritionalInfo: "Per 100g: Energy 540kcal, Protein 20g, Carbohydrates 28g, Fat 42g",
    sourceInfo: {
      english: "Small batch production ensures consistency and quality in every pack.",
      sinhala: "සෑම පැකට්ටුවකම ස්ථාවරභාවය සහ ගුණාත්මකභාවය සහතික කිරීම සඳහා කුඩා කණ්ඩායම් නිෂ්පාදනය."
    },
    allergenInfo: "Contains: Peanuts",
    storageInstructions: "Consume within 5 days after opening."
  },
  {
    id: "item-7",
    name: "Spicy nut sgsgsd s gsrg srs",
    price: 2300,
    image: "/assets/images/piti.webp",
    images: ["/assets/images/piti.webp", "/assets/images/kosBite.webp", "/assets/images/piti.webp"],
    description: "Crunchy peanuts coated in spicy masalunchy peanuts coated in spicy masalaa.",
    detailedDescription: "Premium quality spicy nuts for the true connoisseur. Rich in flavor and packed with nutrition.",
    category: "Spicy",
    weight: 250,
    ingredients: "Select Peanuts, Premium Spice Mix, Herbs, Salt",
    nutritionalInfo: "Per 100g: Energy 567kcal, Protein 26g, Carbohydrates 16g, Fat 49g",
    sourceInfo: {
      english: "Ethically sourced from sustainable farms supporting local communities.",
      sinhala: "ප්‍රාදේශීය ප්‍රජාවන්ට සහාය වන තිරසාර ගොවිපලවල්වලින් සදාචාරාත්මකව ලබාගෙන ඇත."
    },
    allergenInfo: "Contains: Peanuts, Spices",
    storageInstructions: "Store in cool, dry place away from moisture."
  },
  {
    id: "item-8",
    name: "Spicy",
    price: 450,
    image: "/assets/images/piti.webp",
    images: ["/assets/images/piti.webp", "/assets/images/kosBite.webp", "/assets/images/piti.webp"],
    description: "Crunchy peanuts coated in spicy masala.",
    detailedDescription: "Bold flavors in a convenient pack size. Perfect for on-the-go snacking.",
    category: "Spicy",
    weight: 100,
    ingredients: "Peanuts, Red Chili, Spices, Salt",
    nutritionalInfo: "Per 100g: Energy 550kcal, Protein 24g, Carbohydrates 15g, Fat 47g",
    sourceInfo: {
      english: "Prepared fresh daily to maintain the authentic taste and crunchiness.",
      sinhala: "සත්‍ය රසය සහ හපනය පවත්වා ගැනීම සඳහා දිනපතා නැවුම්ව සකස් කරනු ලැබේ."
    },
    allergenInfo: "Contains: Peanuts",
    storageInstructions: "Keep sealed when not in use."
  },
  {
    id: "item-9",
    name: "Peanuts",
    price: 350,
    image: "/assets/images/kosBite.webp",
    images: ["/assets/images/kosBite.webp", "/assets/images/piti.webp", "/assets/images/kosBite.webp"],
    description: "Crunchy peanuts coated in spicy masala.",
    detailedDescription: "Savory goodness in every handful. A family favorite for generations.",
    category: "Savory",
    weight: 150,
    ingredients: "Premium Peanuts, Savory Seasoning, Sea Salt",
    nutritionalInfo: "Per 100g: Energy 560kcal, Protein 25g, Carbohydrates 14g, Fat 48g",
    sourceInfo: {
      english: "Roasted to perfection using traditional methods for authentic taste.",
      sinhala: "සත්‍ය රසය සඳහා සාම්ප්‍රදායික ක්‍රම භාවිතයෙන් පරිපූර්ණත්වයට රෝස්ට් කර ඇත."
    },
    allergenInfo: "Contains: Peanuts",
    storageInstructions: "Store in airtight container after opening."
  },
  {
    id: "item-10",
    name: "Spanuts",
    price: 500,
    image: "/assets/images/piti.webp",
    images: ["/assets/images/piti.webp", "/assets/images/kosBite.webp", "/assets/images/piti.webp"],
    description: "Crunchy peanuts coated in spicy masala.",
    detailedDescription: "The perfect balance of heat and flavor in every piece.",
    category: "Spicy",
    weight: 200,
    ingredients: "Peanuts, Spice Mixture, Salt, Coconut Oil",
    nutritionalInfo: "Per 100g: Energy 570kcal, Protein 26g, Carbohydrates 16g, Fat 50g",
    sourceInfo: {
      english: "Made with pride using 100% natural ingredients without artificial preservatives.",
      sinhala: "කෘතිම කල් තබා ගන්නා ද්‍රව්‍ය රහිතව 100% ස්වාභාවික අමුද්‍රව්‍ය භාවිතයෙන් ආඩම්බරයෙන් සාදා ඇත."
    },
    allergenInfo: "Contains: Peanuts, Coconut",
    storageInstructions: "Best stored in refrigerator after opening."
  },
  {
    id: "item-11",
    name: "art1",
    price: 600,
    image: "/assets/images/piti.webp",
    images: ["/assets/images/piti.webp", "/assets/images/kosBite.webp", "/assets/images/piti.webp"],
    description: "Crunchy peanuts coated in spicy masala.",
    detailedDescription: "A sweet treat that brings back childhood memories with every bite.",
    category: "Sweet",
    weight: 300,
    ingredients: "Peanuts, Natural Sugar, Honey, Spices",
    nutritionalInfo: "Per 100g: Energy 580kcal, Protein 22g, Carbohydrates 25g, Fat 45g",
    sourceInfo: {
      english: "Created using grandmother's secret recipe passed down for three generations.",
      sinhala: "පරම්පරා තුනක් පුරා සම්ප්‍රේෂණය වී ඇති ආච්චිගේ රහස් වට්ටෝරුව භාවිතයෙන් නිර්මාණය කර ඇත."
    },
    allergenInfo: "Contains: Peanuts, Honey",
    storageInstructions: "Keep in cool place away from heat."
  },
  {
    id: "item-12",
    name: "Ats",
    price: 250,
    image: "/assets/images/piti.webp",
    images: ["/assets/images/piti.webp", "/assets/images/kosBite.webp", "/assets/images/piti.webp"],
    description: "Crunchy peanuts coated in spicy masala.",
    detailedDescription: "Lightly sweetened for those who prefer a subtle taste.",
    category: "Sweet",
    weight: 75,
    ingredients: "Peanuts, Sugar, Natural Vanilla",
    nutritionalInfo: "Per 100g: Energy 540kcal, Protein 20g, Carbohydrates 28g, Fat 42g",
    sourceInfo: {
      english: "Small portions, big taste. Perfect for portion control snacking.",
      sinhala: "කුඩා කොටස්, විශාල රසය. කොටස් පාලන සුලු කෑම සඳහා පරිපූර්ණයි."
    },
    allergenInfo: "Contains: Peanuts",
    storageInstructions: "Seal tightly after use."
  },
  {
    id: "item-13",
    name: "Spicy nut sgsgsd s gsrg srs",
    price: 2300,
    image: "/assets/images/piti.webp",
    images: ["/assets/images/piti.webp", "/assets/images/kosBite.webp", "/assets/images/piti.webp"],
    description: "Crunchy peanuts coated in spicy masalunchy peanuts coated in spicy masalaa.",
    detailedDescription: "Ultimate spicy experience for heat lovers. Not for the faint of heart!",
    category: "Spicy",
    weight: 250,
    ingredients: "Peanuts, Extra Hot Chili, Spices, Salt, Oil",
    nutritionalInfo: "Per 100g: Energy 567kcal, Protein 26g, Carbohydrates 16g, Fat 49g",
    sourceInfo: {
      english: "Carefully crafted to deliver maximum flavor while maintaining nutritional value.",
      sinhala: "පෝෂණ වටිනාකම පවත්වා ගනිමින් උපරිම රසය ලබා දීමට ප්‍රවේශමින් සාදා ඇත."
    },
    allergenInfo: "Contains: Peanuts, Hot Spices",
    storageInstructions: "Store in cool, dry place. Handle with care - very spicy!"
  },
];
