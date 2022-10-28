import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h2 className="heading">Tony's Bodega</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/aisle">Aisles</Link>
        <Link to="/aisle/shelf/product/create">Create Product</Link>
      </div>
    </nav>
  )
}

export default Nav
