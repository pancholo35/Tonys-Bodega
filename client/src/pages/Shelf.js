import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Product from '../components/Product'

const Shelf = (props) => {
  const navigate = useNavigate()
  const [selectedShelf, setSelectedShelf] = useState(null)

  const handleClick = (shelf) => {
    if (selectedShelf) {
      setSelectedShelf(null)
      navigate('product/create')
    } else {
      setSelectedShelf(shelf)
    }
  }

  return selectedShelf ? (
    <div>
      <Product
        products={selectedShelf.products}
        setRelData={props.setRelData}
      />
      <button type="button" onClick={handleClick}>
        Create a product?
      </button>
    </div>
  ) : (
    <div>
      <h1>
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
