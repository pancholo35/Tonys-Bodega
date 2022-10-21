const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Aisle = new Schema(
  {
    aisle_number: { type: Number, required: true },
    shelves: { type: Array, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Aisle', Aisle)
