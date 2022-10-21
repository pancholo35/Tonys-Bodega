const Aisle = require('./models/Aisle')
const Shelf = require('./models/Shelf')
const Product = require('./models/Product')

const getAllAisles = async (req, res) => {
  try {
    const aisles = await Aisle.find()
    return res.status(200).send(aisles)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllAisles
}
