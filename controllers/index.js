const { Aisle, Shelf, Product } = require('../models')

const getAllAisles = async (req, res) => {
  try {
    const aisles = await Aisle.find()
    return res.status(200).json({ aisles })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllShelves = async (req, res) => {
  try {
    const shelves = await Shelf.find()
    return res.status(200).json({ shelves })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    return res.status(200).json({ products })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAisle = async (req, res) => {
  try {
    const { num } = req.params
    const aisle = await Aisle.find({ aisle_number: num })
    return res.status(200).send(...aisle)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getShelf = async (req, res) => {
  try {
    const { num } = req.params
    const shelf = await Shelf.find({ shelf_number: num })
    return res.status(200).json({ shelf })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    return res.status(200).json({ product })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createProduct = async (req, res) => {
  try {
    const product = await new Product(req.body)
    await product.save()
    return res.status(201).json({
      product
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllAisles,
  getAllShelves,
  getAllProducts,
  getAisle,
  getShelf,
  getProduct,
  createProduct
}
