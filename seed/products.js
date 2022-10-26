const db = require('../db')
const { Product } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const products = [
    {
      name: 'Tide PODS Laundry Detergent Packs',
      brand: 'Tide',
      price: 20,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.influenster.com%2FeyJlZGl0cyI6IHsicmVzaXplIjogeyJiYWNrZ3JvdW5kIjogeyJiIjogMSwgImciOiAxLCAiciI6IDEsICJhbHBoYSI6IDB9LCAiaGVpZ2h0IjogNzUwLCAid2lkdGgiOiA3NTAsICJ3aXRob3V0RW5sYXJnZW1lbnQiOiB0cnVlLCAiZml0IjogImluc2lkZSJ9fSwgImV4dGVuZCI6IHt9LCAia2V5IjogIm1lZGlhL3Byb2R1Y3QvaW1hZ2UvODAzMTA0ODFfOTE1Mjc0ODRfUERQLnBuZyIsICJidWNrZXQiOiAiaW5mbHVlbnN0ZXJfcHJvZHVjdGlvbiJ9&f=1&nofb=1&ipt=13ebeb18ff7d7ed70dcb15abee31ee99ffdb214a4aa646a8b405a82bfebac555&ipo=images', //insert image url
      product_link: 'https://tide.com/en-us/shop/type/laundry-pods'
    },
    {
      name: 'Maruchan Ramen Noodle Soup: Chicken Flavor',
      brand: 'Maruchan',
      price: 0.3,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F608-6086551_maruchan-ramen-noodle-soup-chicken-flavor-3-oz.png&f=1&nofb=1&ipt=adeef28334792418666ae1e3bc2e5f1433f3f11bdc5fc59a9488befd130bfa63&ipo=images', //insert image url
      product_link: 'https://www.maruchan.com/products/ramen/chicken-flavor/'
    },
    {
      name: 'Maruchan Ramen Noodle Soup: Shrimp Flavor',
      brand: 'Maruchan',
      price: 0.3,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fucarecdn.com%2F5bdd3a3c-e0c5-4948-ba93-c2b48f768281%2F&f=1&nofb=1&ipt=e5bb04dcc5ac0f4e861617060ef00ab11f20113358f3b03e340e6a2a65f48445&ipo=images', //insert image url
      product_link: 'https://www.maruchan.com/products/ramen/shrimp-flavor/'
    },
    {
      name: 'Maruchan Ramen Noodle Soup: Beef Flavor',
      brand: 'Maruchan',
      price: 0.3,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fucarecdn.com%2Fbbd451dd-6ad8-4edf-8916-425f55858f90%2F-%2Fformat%2Fauto%2F&f=1&nofb=1&ipt=a06aa8d1247450be530dfa378c2bc2c3391099e02457bf4582db681cd494caa2&ipo=images', //insert image url
      product_link: 'https://www.maruchan.com/products/ramen/beef-flavor/'
    },
    {
      name: 'Chef Boyardee Beef Ravioli Can',
      brand: 'Chef Boyardee',
      price: 0.3,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Famericanmarketliquor.com%2Fwp-content%2Fuploads%2F2019%2F11%2Fbeef-ravioli-can-13003-480x480.png&f=1&nofb=1&ipt=141c6c071a7d2fb71ac46e5c58416a140f4e36098f6f12da36364dfd57848970&ipo=images', //insert image url
      product_link:
        'https://www.chefboyardee.com/products/classics/beef-ravioli-can'
    },
    {
      name: 'Chef Boyardee Beefaroni Can',
      brand: 'Chef Boyardee',
      price: 0.3,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpowellsnl.ca%2Fmedia%2Fuploads%2Fitemmaster%2F.thumbnails%2F06414404302_E_A1R1_600x600.png%2F06414404302_E_A1R1_600x600-650x0-padded-%2523fff.png&f=1&nofb=1&ipt=905434aa5feda5b0f938d2f8c5d49884f3071e4862c566f47f769c06e5c7611c&ipo=images', //insert image url
      product_link:
        'https://www.chefboyardee.com/products/classics/beefaroni-can'
    }
  ]

  await Product.insertMany(products)
}
const run = async () => {
  await main()
  db.close()
}

run()
