const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/aisle/shelf/product/create', controllers.createProduct)

router.get('/aisle/shelf/product/:id', controllers.getProduct)

router.post('/aisle/shelf/product/:id/update', controllers.updateProduct)

router.get('/aisle/shelf/:num', controllers.getShelf)

router.get('/aisle/:num', controllers.getAisle)

router.get('/aisles/show', controllers.getAllAisles)

router.get('/shelves/show', controllers.getAllShelves)

router.get('/products/show', controllers.getAllProducts)

//router.get('/aisle/shelf', )

module.exports = router
