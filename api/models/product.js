const mongoose = require('mongoose');
const schema = mongoose.Schema;

const productSchema = new schema({
  title:       { type: String, required: true },
  description: { type: String },
  posterUrl:   { type: String },
  trailerUrl:  { type: String },
  rating:      { type: Number },
  genre:       { type: [String] },
  type:        { type: String },
  platform:    { type: String },
  trending:    { type: Boolean }
});


const Product = mongoose.model("Product",productSchema);

module.exports=Product;
