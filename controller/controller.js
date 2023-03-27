const Product = require('../models/product');

const getProducts = (req, res) => {
  //logic dfdfdfsdfgjshdjfsdhf
  const products = Product.getAll();
  // console.log(products);
  res.render('index.ejs', { products });
};

const createProduct = (req, res) => {
  // req.body...
  let data = {
    title: "Product 5",
    cost: 400
  };
  const newProduct = new Product(data.title, data.cost);
  
  newProduct.save();
  res.send('add thành công');
}

const getIndex2 = (req, res) => {
  
  res.render('index2.ejs');
};

module.exports = {
  getProducts,
  getIndex2,
  createProduct,
};