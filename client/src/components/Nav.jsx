import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>NavBar</h4>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/aisle">Aisles</Link>
        <Link to="/aisle/shelf/product/create">Create Product</Link>
      </div>
    </nav>
  )
}

export default Nav
