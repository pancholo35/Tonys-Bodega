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
        `Would you like to delete all instances of this product? (if No then only the instance in shelf #${props.selectedShelf.shelf_number} will be deleted)`
      )
      isDeleted
        ? (response = await axios.delete(
            `http://localhost:3001/aisle/shelf/${props.selectedShelf.shelf_number}/product/${props.product.product_id}/delete`
          ))
        : (response = await axios.delete(
            `http://localhost:3001/aisle/shelf/${props.selectedShelf.shelf_number}/product/${props.product.product_id}/delete`
          ))

      props.setSelectedShelf(response.data)
    }
  }

  useEffect(() => {
    getProduct()
  }, [props.selectedShelf])

  return (
    <div>
      <div className="product">
        <section>
          <h1 className="heading">{product && product.name}</h1>
          <img
            src={product && product.image}
            alt={product && product.name}
            width="200"
            height="200"
          />
          <p>product id: {product && product._id}</p>
        </section>
        <section>
          {formToggle && (
            <Form
              product_data={product}
              update={true}
              setFormToggle={setFormToggle}
              setProduct={setProduct}
              selectedShelf={props.selectedShelf}
              setSelectedShelf={props.setSelectedShelf}
              product_quantity={props.product.quantity}
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
