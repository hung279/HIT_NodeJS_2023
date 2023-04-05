//model
let products = require('./db.json');
// product: title, cost


const saveData = (data) => {
  //code ghi lai file
  
};

class Product {
  constructor(id, title, cost) {
    this.id = id;
    this.title = title;
    this.cost = cost;
  }

  save() {
    // console.log(this);
    products.push(this);
    saveData(products);
    console.log(JSON.stringify(products));
  }

  static getAll() {
    return products;
  }

  static getById(id) {
    const product = products.find((product) => product.id == id);

    return product;
  }

  static deleteById(id) {
    const index = products.findIndex(product => product.id == id);

    products.splice(index, 1);
    
    saveData(products);
  }
}

module.exports = Product;
