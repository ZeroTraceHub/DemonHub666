const products = [
  {
    name: "Spyroid v7.7",
    price: "$49",
    image: "https://media-hosting.imagekit.io/c1193cf35c424ac8/1000008877.jpg"
  },
  {
    name: "BTMOB RAT",
    price: "$45",
    image: "https://media-hosting.imagekit.io/65825fb759114b78/1000008879.jpg"
  },
  {
    name: "Ghost RAT",
    price: "$39",
    image: "https://media-hosting.imagekit.io/df28559e56be4ca5/1000008876.jpg"
  },
  {
    name: "Craxs RAT v7.6",
    price: "$79",
    image: "https://media-hosting.imagekit.io/9de25cd5229a4e38/1000008871.jpg"
  },
  {
    name: "Big Shark RAT",
    price: "$59",
    image: "https://media-hosting.imagekit.io/4f463e12cc97426c/1000008872.jpg"
  },
  {
    name: "Violet RAT",
    price: "$65",
    image: "https://media-hosting.imagekit.io/d2654da1b38c4617/1000008874.jpg"
  },
  {
    name: "Tianxian66 License RAT",
    price: "$75",
    image: "https://media-hosting.imagekit.io/38c629e7bafc4630/1000008875.jpg"
  },
  {
    name: "G700 RAT",
    price: "$99",
    image: "https://media-hosting.imagekit.io/c1193cf35c424ac8/1000008877.jpg"
  },
  {
    name: "DEMONIC RAT",
    price: "$60",
    image: "https://media-hosting.imagekit.io/12c5a4b5581645e8/1000008887.jpg"
  },
  {
    name: "G5 RAT",
    price: "$75",
    image: "https://media-hosting.imagekit.io/07303cb3fc154431/1000008888.jpg"
  }
];

const container = document.getElementById("products");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Price: ${product.price}</p>
    <button onclick="buyNow('${product.name}')">Buy on Telegram</button>
  `;
  container.appendChild(div);
});

function buyNow(productName) {
  window.open("https://t.me/CIPHERNOVAX909", "_blank");
}