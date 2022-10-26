const db = require('../db')
const { Aisle, Shelf } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const allShelves = await Shelf.find()

  const aisles = [
    {
      aisle_number: 1,
      shelves: allShelves.slice(0, 10)
    },
    {
      aisle_number: 2,
      shelves: allShelves.slice(10, 20)
    },
    {
      aisle_number: 3,
      shelves: allShelves.slice(20)
    }
  ]

  await Aisle.insertMany(aisles)
}

const run = async () => {
  await main()
  db.close()
}

run()
