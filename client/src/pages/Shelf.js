import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Product from '../components/Product'

const Shelf = (props) => {
  const navigate = useNavigate()
  const [selectedShelf, setSelectedShelf] = useState(null)

  const handleClick = (shelf) => {
    if (selectedShelf) {
      navigate(`${selectedShelf.shelf_number}/product/create`)
    } else {
      setSelectedShelf(shelf)
      !props.product_data &&
        props.setProductData(selectedShelf && selectedShelf.products)
    }
  }

  return selectedShelf ? (
    <div className="product-list-body">
      <h1 className="heading">
        Shelf #{selectedShelf && selectedShelf.shelf_number}
      </h1>
      {selectedShelf.products &&
        selectedShelf.products.map((product) => (
          <div className="product-listing" key={product.product_id}>
            <p id="product-quantity">{product.quantity}x</p>
            <Product
              product={product}
              product_data={props.product_data}
              setProductData={props.setProductData}
              selectedShelf={selectedShelf}
              setSelectedShelf={setSelectedShelf}
            />
          </div>
        ))}
      <button id="create-button" type="button" onClick={handleClick}>
        Create a product?
      </button>
    </div>
  ) : (
    <div className="shelf-list">
      <h1 className="heading">
        {props.aisle_data &&
          props.aisle_data.shelves.map((shelf) => (
            <button key={shelf.shelf_number} onClick={() => handleClick(shelf)}>
              {shelf.shelf_number}
            </button>
          ))}
      </h1>
    </div>
  )
}

export default Shelf
