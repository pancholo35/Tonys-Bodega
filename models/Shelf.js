const { Schema } = require('mongoose')

const shelfSchema = new Schema(
  {
    shelf_number: { type: Number, required: true },
    amount_products: { type: Number, required: true },
    products: [Schema.Types.ObjectId]
  },
  { timestamps: true }
)

module.exports = shelfSchema
