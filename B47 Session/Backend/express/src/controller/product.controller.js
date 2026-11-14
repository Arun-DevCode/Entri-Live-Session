const Product = require("../models/products");

async function getAllProducts(req, res) {
  try {
    // const productData = await Product.find();
    const productData = await Product.aggregate([
      // stage 1 : Filter products
      {
        $match: {},
      },
      // stage 2 : sort products in asc
      {
        $sort: {
          price: 1,
        },
      },
      // stage 3 : skip
      {
        $skip: 2,
      },
      // stage 4 : limit documents
      {
        $limit: 5,
      },
      // stage 5 : remove unneccessary fields
      {
        $project: { title: 1, desc: 1, price: 1, rating: 1 },
      },
    ]);
    res.json(productData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = getAllProducts;
