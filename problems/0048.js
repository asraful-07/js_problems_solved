function findAveragePhonePrice(phones) {
  if (!Array.isArray) {
    return 0;
  }

  let minPrice = phones.reduce(
    (min, phone) => (phone.price < min ? phone.price : min),
    phones[0].price
  );

  return minPrice;
}

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

console.log(findAveragePhonePrice(phones));
