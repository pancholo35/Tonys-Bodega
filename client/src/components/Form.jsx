import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Form = (props) => {
  const { num } = useParams()
  let initCounter = props.update ? parseInt(props.product_quantity) : 0
  let initialState = {
    name: props.product_data.name,
    brand: props.product_data.brand,
    price: props.product_data.price,
    image: props.product_data.image,
    product_link: props.product_data.product_link
  }

  const [formState, setFormState] = useState(initialState)
  const [counter, setCounter] = useState(initCounter)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res
    if (!props.update) {
      await axios.post(
        `http://localhost:3001/aisle/shelf/${num}/product/create/${counter}`,
        formState
      )
    } else {
      res = await axios.post(
        `http://localhost:3001/aisle/shelf/${props.selectedShelf.shelf_number}/product/${props.product_data._id}/update/${counter}`,
        formState
      )
      props.setProduct(res.data[0])
      props.setSelectedShelf(res.data[1])
      props.setFormToggle(false)
    }
    setFormState({
      name: '',
      brand: '',
      price: '',
      image: '',
      product_link: ''
    })
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={formState.name}
        onChange={handleChange}
      />
      <label htmlFor="subject">Brand:</label>
      <input
        type="text"
        id="brand"
        value={formState.brand}
        onChange={handleChange}
      />
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        value={formState.price}
        onChange={handleChange}
      />
      <label htmlFor="image">Image:</label>
      <input
        type="url"
        id="image"
        value={formState.image}
        onChange={handleChange}
      />
      <label htmlFor="product_link">Product Link:</label>
      <input
        type="url"
        id="product_link"
        value={formState.product_link}
        onChange={handleChange}
      />
      <section id="quanity-counter">
        <button type="button" onClick={() => setCounter(counter + 1)}>
          +
        </button>
        {counter && counter}
        <button type="button" onClick={() => setCounter(counter - 1)}>
          -
        </button>
      </section>
      <button type="submit">Send</button>
    </form>
  )
}

export default Form
