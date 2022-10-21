const { Schema } = require('mongoose')

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    product_link: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = productSchema
