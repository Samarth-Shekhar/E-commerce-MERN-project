const Product = require("./models/productModel");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const products = require("./data/products.json");

// Config
dotenv.config({ path: "./config/config.env" });

// Connect Database
connectDatabase();

// Import Data
const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("All products deleted");

    await Product.insertMany(products);
    console.log("All products added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedProducts();
