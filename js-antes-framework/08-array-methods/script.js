const data = ["Credit", "$ 200", "$ 400", "Bills", "$ 300", "$ 400", "My data"];

const prices = data.filter((item) => item.includes("$"));

// const priceNumbers = prices.map(price => +price.replace("$ ", ""));
const priceNumbers = prices.map(price => Number(price.replace("$ ", "")));

const total = priceNumbers.reduce((acc, price) => acc + price);
// default initial value for reduce is 0.

console.log(prices);
console.log(priceNumbers);
console.log(total);

// An external API or CSV of a bank commonly returns a bit
// messed data, so you need to organize these data.
