const { Aisle } = require('../models')
const Shelf = require('../models')
const Product = require('../models')

const getAllAisles = async (req, res) => {
  try {
    const aisles = await Aisle.find()
    return res.status(200).json({ aisles })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllAisles
}
