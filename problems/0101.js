const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

const result = sales.reduce((acc, curr) => {
  if (!acc[curr.category]) {
    acc[curr.category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }

  acc[curr.category].totalRevenue += curr.price * curr.quantity;
  acc[curr.category].itemCount += curr.quantity;

  return acc;
}, {});

console.log(result);
