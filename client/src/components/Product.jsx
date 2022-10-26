const Product = (props) => {
  const handleClick = (action) => {
    if (action === 'update') {
      console.log('im updating...')
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
