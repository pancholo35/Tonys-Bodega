const { Schema } = require('mongoose')

const shelfSchema = new Schema(
  {
    shelf_number: { type: Number, required: true },
    amount_products: { type: Number, required: true },
    products: { type: Array, required: true }
  },
  { timestamps: true }
)

module.exports = shelfSchema
