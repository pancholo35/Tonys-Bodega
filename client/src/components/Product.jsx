import axios from 'axios'

const Product = (props) => {
  const handleClick = async (action) => {
    if (action === 'update') {
      //let response = await axios.get(`http://localhost:3001/aisle/shelf/product/${props}`)
    } else if (action === 'delete') {
      console.log('im melting! melttiiiinnnnnggggg...')
    }
  }

  return (
    <div>
      {props.products &&
        props.products.map((product) => (
          <div key={product.product_id} className="product">
            <h4>product id: {product.product_id}</h4>
            <button type="button" onClick={() => handleClick('update')}>
              Update?
            </button>
            <button type="button" onClick={() => handleClick('delete')}>
              Delete?
            </button>
          </div>
        ))}
    </div>
  )
}

export default Product
