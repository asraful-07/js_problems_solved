function findAveragePhonePrice(phones) {
  if (!Array.isArray) {
    return 0;
  }

  let totalPrice = phones.reduce((sum, phone) => {
    return sum + phone.price;
  }, 0);

  return totalPrice / phones.length;
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
