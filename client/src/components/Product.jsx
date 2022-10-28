import axios from 'axios'
import { useEffect, useState } from 'react'
import Form from './Form'

const Product = (props) => {
  const [product, setProduct] = useState(null)
  const [formToggle, setFormToggle] = useState(null)

  const getProduct = async () => {
    let response = await axios.get(
      `http://localhost:3001/aisle/shelf/product/${props.product.product_id}`
    )
    setProduct(response.data.product)
  }

  const handleClick = async (action) => {
    if (action === 'update') {
      setFormToggle(true)
    } else if (action === 'delete') {
      let response
      const isDeleted = window.confirm(
        `Are you sure you want to delete this product from this shelf? (shelf ${props.selectedShelf.shelf_number})`
      )
      isDeleted
        ? (response = await axios.delete(
            `http://localhost:3001/aisle/shelf/${props.selectedShelf.shelf_number}/product/${props.product.product_id}/delete`
          ))
        : console.log('Delete Operation Cancelled')

      props.setSelectedShelf(response)
    }
  }

  useEffect(() => {
    getProduct()
  }, [props.selectedShelf])

  return (
    <div>
      <div className="product">
        <section>
          <h1>{product && product.name}</h1>
          <img
            src={product && product.image}
            alt={product && product.name}
            width="200"
            height="200"
          />
          <h4>product id: {product && product._id}</h4>
        </section>
        <section>
          {formToggle && (
            <Form
              product_data={product}
              update={true}
              setFormToggle={setFormToggle}
              setProduct={setProduct}
            />
          )}
        </section>
      </div>
      <div className="crud">
        <button type="button" onClick={() => handleClick('update')}>
          Update?
        </button>
        <button type="button" onClick={() => handleClick('delete')}>
          Delete?
        </button>
      </div>
    </div>
  )
}

export default Product
