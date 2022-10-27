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
  const [productData, setProductData] = useState(null)

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aisle" element={<Aisle setRelData={setAisleData} />} />
          <Route
            path="/aisle/shelf"
            element={
              <Shelf aisle_data={aisleData} setRelData={setProductData} />
            }
          />
          <Route
            path="/aisle/shelf/product/create"
            element={<Form update={false} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
