const data = {
  products: [
    {
      id: 1,
      image: "https://www.supervaluecart.com/image/Package49List.jpg",
      englishname: "Package $49",
      tamilname: "பேக்கேஜ் $49 பொருட்கள்",
      price: 49.0,
    },
    {
      id: 2,
      image: "https://www.supervaluecart.com/image/Package59List.jpg",
      englishname: "Package $59",
      tamilname: "பேக்கேஜ் $59 பொருட்கள்",
      price: 59.0,
    },
    {
      id: 3,
      image: "https://www.supervaluecart.com/image/Package99List.jpg",
      englishname: "Package $99",
      tamilname: "பேக்கேஜ் $99 பொருட்கள்",
      price: 99.0,
    },
    {
      id: 4,
      image:
        "https://www.supervaluecart.com/image/FortuneOilTeaPowderPackage.jpg",
      englishname:
        "Fortune Sun Flower Oil (2 Bottles X 2 Ltrs) + Red Label Tea Powder (500 Gm)",
      tamilname: "சூரியகாந்தி எண்ணெய் + ரெட் லேபில் டீ தூள்",
      price: 13.9,
    },
    {
      id: 5,
      image: "https://www.supervaluecart.com/image/OotyPonniRice.jpg",
      englishname: "Ooty Ponni Rice | 5 Kg",
      tamilname: "பொன்னி அரிசி",
      price: 8.1,
    },
    {
      id: 6,
      image: "https://www.supervaluecart.com/image/KitchenKingPonniRice5Kg.jpg",
      englishname: "Kitchen King Ponni Rice | 5 Kg",
      tamilname: "பொன்னி அரிசி",
      price: 7.5,
    },
    {
      id: 7,
      image: "https://www.supervaluecart.com/image/RusiBasmatiRice.jpg",
      englishname: "Rusi Basmati Rice | 1 Kg",
      tamilname: "பாஸ்மதி அரிசி",
      price: 3.9,
    },
    {
      id: 8,
      image: "https://www.supervaluecart.com/image/KitchenKingIdlyRice5Kg.jpg",
      englishname: "Kitchen King Idly Rice | 5 Kg",
      tamilname: "இட்லி அரிசி",
      price: 7.5,
    },
    {
      id: 9,
      image: "https://www.supervaluecart.com/image/JannathBasmatiRice5kg.jpg",
      englishname: "Jannath Premium Basmati Rice | 5 Kg",
      tamilname: "ஜன்னத் பாஸ்மதி அரிசி",
      price: 19.2,
    },
    {
      id: 10,
      image:
        "https://www.supervaluecart.com/image/AmbikaKuthiraivaliRice1kg.jpg",
      englishname: "Ambikas Kuthiraivali Rice | 1 Kg",
      tamilname: "அம்பிகா குதிரை வாலி அரிசி",
      price: 3.9,
    },
    {
      id: 11,
      image:
        "https://www.supervaluecart.com/image/AmbikaSonaMasooriRice1kg.jpg",
      englishname: "Ambika Sona Masoori Rice | 1 Kg",
      tamilname: "அம்பிகா பச்சரிசி",
      price: 1.95,
    },
    {
      id: 12,
      image: "https://www.supervaluecart.com/image/IndiaGateBasmatiRice1kg.jpg",
      englishname: "India Gate Basmati Rice | 1 Kg",
      tamilname: "இந்தியா கேட் பாஸ்மதி அரிசி",
      price: 4.8,
    },
    {
      id: 13,
      image: "https://www.supervaluecart.com/image/AmbikaSago200gm.jpg",
      englishname: "Ambikas Sago | 200 Gm",
      tamilname: "அம்பிகா ஜவ்வரிசி",
      price: 1.2,
    },
    {
      id: 14,
      image: "https://www.supervaluecart.com/image/ThaiHomeMaliRice.jpg",
      englishname: "Thai Hom Mali Rice - AH | 5 Kg",
      tamilname: "ஹோம் மாலி அரிசி",
      price: 14.3,
    },
    {
      id: 15,
      image: "https://www.supervaluecart.com/image/ToorDal.jpg",
      englishname: "Rusi Toor Dal | 1 Kg",
      tamilname: "துவரம் பருப்பு",
      price: 4.0,
    },
    {
      id: 16,
      image: "https://www.supervaluecart.com/image/Ulundu.jpg",
      englishname: "Rusi Urid Gota White | 500 Gm",
      tamilname: "உளுந்து",
      price: 2.2,
    },
    {
      id: 17,
      image: "https://www.supervaluecart.com/image/Ulundu.jpg",
      englishname: "Rusi Urid Gota White | 1 Kg",
      tamilname: "உளுந்து",
      price: 3.9,
    },
    {
      id: 18,
      image: "https://www.supervaluecart.com/image/RusiMoongDal.jpg",
      englishname: "Rusi Green Moong Dal | 500 Gm",
      tamilname: "ருசி பாசி பயறு",
      price: 2.2,
    },
    {
      id: 19,
      image: "https://www.supervaluecart.com/image/RusiMoongDalSplit.jpg",
      englishname: "Rusi Moong Dal Split | 500 Gm",
      tamilname: "ருசி பாசி பருப்பு",
      price: 2.1,
    },
    {
      id: 20,
      image: "https://www.supervaluecart.com/image/RusiGramDal500gm.jpg",
      englishname: "Rusi Gram Dal | 500 Gm",
      tamilname: "ருசி கடலை பருப்பு",
      price: 1.8,
    },
    {
      id: 21,
      image: "https://www.supervaluecart.com/image/PottuKadalai500gm.jpg",
      englishname: "Rusi Roasted Gram | 500 Gm",
      tamilname: "ருசி பொட்டுக் கடலை",
      price: 2.5,
    },
    {
      id: 22,
      image: "https://www.supervaluecart.com/image/ToorDal.jpg",
      englishname: "Rusi Toor Dal | 500 Gm",
      tamilname: "துவரம் பருப்பு",
      price: 2.1,
    },
    {
      id: 23,
      image: "https://www.supervaluecart.com/image/OotyUridWhole500gm.jpg",
      englishname: "Ooty Urid Gota Whole | 500 Gm",
      tamilname: "ஊட்டி உளுந்து",
      price: 2.1,
    },
    {
      id: 24,
      image: "https://www.supervaluecart.com/image/TataSalt.jpg",
      englishname: "TATA Salt | 1 Kg",
      tamilname: "உப்பு",
      price: 1.1,
    },
    {
      id: 25,
      image: "https://www.supervaluecart.com/image/GaramSalt.jpg",
      englishname: "Garam Salt - AH | 500 Gm",
      tamilname: "பாக்கெட் உப்பு",
      price: 0.7,
    },
  ],
};

export default data;