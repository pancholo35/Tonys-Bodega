const { Schema } = require('mongoose')

const aisleSchema = new Schema(
  {
    aisle_number: { type: Number, required: true },
    shelves: { type: Array, required: true }
  },
  { timestamps: true }
)

module.exports = aisleSchema
