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
    const aisle = await Aisle.findOne({ aisle_number: num })
    return res.status(200).send(aisle)
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

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(product)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const shelves = await Shelf.find()
    shelves.forEach((shelf) => {
      shelf.products.forEach(async (product, i) => {
        if (product.product_id == req.params.id) {
          console.log('here!')
          shelf.products.splice(i, 1)
          await Shelf.updateOne(
            { _id: shelf._id },
            {
              $set: { products: shelf.products },
              $currentDate: { lastModified: true }
            }
          )
        }
      })
    })
    await Aisle.updateOne(
      { aisle_number: 1 },
      {
        $set: { shelves: shelves.slice(0, 10) },
        $currentDate: { lastModified: true }
      }
    )
    await Aisle.updateOne(
      { aisle_number: 2 },
      {
        $set: { shelves: shelves.slice(10, 20) },
        $currentDate: { lastModified: true }
      }
    )
    await Aisle.updateOne(
      { aisle_number: 3 },
      {
        $set: { shelves: shelves.slice(20) },
        $currentDate: { lastModified: true }
      }
    )
    await Product.deleteOne({ _id: req.params.id })
    res.status(200).send(shelves)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteShelfProduct = async (req, res) => {
  try {
    const shelf = await Shelf.findOne({ shelf_number: req.params.num })
    shelf.products.forEach((product, i) => {
      if (product.product_id == req.params.id) {
        shelf.products.splice(i, 1)
      }
    })
    await shelf.save()

    if (req.params.num <= 10) {
      const shelves = await Shelf.find()
      console.log(shelves)
      await Aisle.updateOne(
        { aisle_number: 1 },
        {
          $set: { shelves: shelves.slice(0, 10) },
          $currentDate: { lastModified: true }
        }
      )
    } else if (req.params.num <= 20) {
      const shelves = await Shelf.find()
      await Aisle.updateOne(
        { aisle_number: 2 },
        {
          $set: { shelves: shelves.slice(10, 20) },
          $currentDate: { lastModified: true }
        }
      )
    } else {
      const shelves = await Shelf.find()
      await Aisle.updateOne(
        { aisle_number: 3 },
        {
          $set: { shelves: shelves.slice(20) },
          $currentDate: { lastModified: true }
        }
      )
    }

    return res.status(200).send(shelf)
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
  createProduct,
  updateProduct,
  deleteProduct,
  deleteShelfProduct
}
