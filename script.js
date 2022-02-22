// The Knapsack Problem
function knapsack(items, cap, itemIndex) {
  console.log(items[itemIndex].weight);

  for (let i = 0; i < items.length; i++) {}

  return {};
}

const items = [
  { name: "a", value: 3, weight: 3 },
  { name: "b", value: 6, weight: 8 },
  { name: "c", value: 10, weight: 3 },
];
const maxCap = 8;

const sack = knapsack(items, maxCap);
console.log(sack);

console.log("hello");
