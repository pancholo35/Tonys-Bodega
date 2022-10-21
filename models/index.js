const mongoose = require('mongoose')
const aisleSchema = require('./Aisle')
const shelfSchema = require('./Shelf')
const productSchema = require('./Product')

const Aisle = mongoose.model('Aisle', aisleSchema)
const Shelf = mongoose.model('Shelf', shelfSchema)
const Product = mongoose.model('Product', productSchema)

module.exports = {
  Aisle,
  Shelf,
  Product
}
