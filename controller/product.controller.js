// controller
const Product = require('../models/product');

const getProducts = (req, res) => {
  const products = Product.getAll();

  res.json(products);
};

const getProductById = (req, res) => {
  const id = req.params.id;

  const product = Product.getById(id);
  if (!product) {
    res.json({err: "Khong tim thay san pham"});
  }
  res.json(product);
};

const createProduct = (req, res) => {
  const data = req.body;
  // tao lai doi tuong tu data request
  // save lai vao trong DB
  const newProduct = new Product(data.id, data.title, data.cost);

  newProduct.save();

  res.json(newProduct);
};

const updateProductById = (req, res) => {
  const id = req.params.id;

  const product = Product.getById(id);
  if (!product) {
    res.json({err: "Khong tim thay san pham"});
  }

  //code update ....
  
  res.json();
};

const deleteProductById = (req, res) => {
  const id = req.params.id;

  const product = Product.getById(id);
  if (!product) {
    res.json({err: "Khong tim thay san pham"});
  }

  Product.deleteById(id);
  res.json();
};

module.exports = {
  getProducts,
  createProduct,
  updateProductById,
  deleteProductById,
  getProductById,
};
