//model
const products = [
];
// product: title, cost

class Product {
  constructor(title, cost) {
    this.title = title;
    this.cost = cost;
  }

  save() {
    // console.log(this);
    products.push(this)
    console.log(products);
  }

  static getAll() {
    return products;
  }
}

module.exports = Product;