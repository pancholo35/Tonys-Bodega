import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h3>Tony's muthafukin' Bodega</h3>
      <button type="button" onClick={() => navigate('aisle')}>
        OPEN FOR BUSINESS
      </button>
    </div>
  )
}

export default Home
