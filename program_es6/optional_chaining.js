// optional chaining use so no here than output undefined no error best pacts
const myInfo = {
  name: "Rahat",
  age: 21,
  address: "rajshahi",
  sosurNames: "katappa",
  sosurBari: "B.Bariya",
  phone: 123456789,
  email: "kata@04050gmail.com",
  pet: {
    name: "lofie",
    info: {
      color: "blck",
      wight: 2.5,
    },
  },
};

console.log(myInfo["sosurNames"]);
console.log(myInfo.addres?.houses);
