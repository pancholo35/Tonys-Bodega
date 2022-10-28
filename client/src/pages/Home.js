import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div id="home-page">
      <h1 className="heading" id="home-title">
        Tony's Bodega
      </h1>
      <button id="home-button" type="button" onClick={() => navigate('aisle')}>
        OPEN FOR BUSINESS
      </button>
    </div>
  )
}

export default Home
