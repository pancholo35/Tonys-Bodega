const db = require('../db')
const { Shelf, Product } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const allProducts = await Product.find()
  const allProductIds = allProducts.map((product) => {
    return product._id
  })
  /*console.log('--------------\n')
  console.log(allProducts)
  console.log('--------------\n')
  console.log(allProductIds[0].$oid)*/

  const shelves = [
    {
      shelf_number: 1,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[0]
        }
      ]
    },
    {
      shelf_number: 2,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[1]
        }
      ]
    },
    {
      shelf_number: 3,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[2]
        }
      ]
    },
    {
      shelf_number: 4,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[3]
        }
      ]
    },
    {
      shelf_number: 5,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[4]
        }
      ]
    },
    {
      shelf_number: 6,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[5]
        }
      ]
    },
    {
      shelf_number: 7,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[0]
        }
      ]
    },
    {
      shelf_number: 8,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[1]
        }
      ]
    },
    {
      shelf_number: 9,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[2]
        }
      ]
    },
    {
      shelf_number: 10,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[3]
        }
      ]
    },
    {
      shelf_number: 11,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[4]
        }
      ]
    },
    {
      shelf_number: 12,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[5]
        }
      ]
    },
    {
      shelf_number: 13,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[0]
        }
      ]
    },
    {
      shelf_number: 14,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[1]
        }
      ]
    },
    {
      shelf_number: 15,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[2]
        }
      ]
    },
    {
      shelf_number: 16,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[3]
        }
      ]
    },
    {
      shelf_number: 17,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[4]
        }
      ]
    },
    {
      shelf_number: 18,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[5]
        }
      ]
    },
    {
      shelf_number: 19,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[0]
        }
      ]
    },
    {
      shelf_number: 20,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[1]
        }
      ]
    },
    {
      shelf_number: 21,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[2]
        }
      ]
    },
    {
      shelf_number: 22,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[3]
        }
      ]
    },
    {
      shelf_number: 23,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[4]
        }
      ]
    },
    {
      shelf_number: 24,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[5]
        }
      ]
    },
    {
      shelf_number: 25,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[0]
        }
      ]
    },
    {
      shelf_number: 26,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[1]
        }
      ]
    },
    {
      shelf_number: 27,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[2]
        }
      ]
    },
    {
      shelf_number: 28,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[3]
        }
      ]
    },
    {
      shelf_number: 29,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[4]
        }
      ]
    },
    {
      shelf_number: 30,
      amount_products: 10,
      products: [
        {
          quantity: 10,
          product_id: allProductIds[5]
        }
      ]
    }
  ]

  await Shelf.insertMany(shelves)
}

const run = async () => {
  await main()
  db.close()
}

run()
