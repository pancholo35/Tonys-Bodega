import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Aisles = (props) => {
  const navigate = useNavigate()

  const getAisle = async (num) => {
    let response = await axios.get(`http://localhost:3001/aisle/${num}`)
    props.setAisleData(response.data)
    navigate('shelf')
  }

  //const handleClick()

  return (
    <div className="aisles">
      <h2>Pick n aisle:</h2>
      <button type="button" onClick={() => getAisle(1)}>
        Aisle 1
      </button>
      <button type="button" onClick={() => getAisle(2)}>
        Aisle 2
      </button>
      <button type="button" onClick={() => getAisle(3)}>
        Aisle 3
      </button>
    </div>
  )
}

export default Aisles
