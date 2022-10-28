import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import Aisle from './pages/Aisle'
import Home from './pages/Home'
import Shelf from './pages/Shelf'

const App = () => {
  const [aisleData, setAisleData] = useState(null)
  const [shelfData, setShelfData] = useState(null)
  const [productData, setProductData] = useState(null)

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/aisle"
            element={<Aisle setAisleData={setAisleData} />}
          />
          <Route
            path="/aisle/shelf"
            element={
              <Shelf
                aisle_data={aisleData}
                product_data={productData}
                shelf_data={shelfData}
                setProductData={setProductData}
              />
            }
          />
          <Route
            path="/aisle/shelf/:num/product/create"
            element={
              <Form
                setProductData={setProductData}
                setShelfData={setShelfData}
                update={false}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
