import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import Aisle from './pages/Aisle'
import Home from './pages/Home'
import Shelf from './pages/Shelf'

const App = () => {
  const [relData, setRelData] = useState(null)

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aisle" element={<Aisle setRelData={setRelData} />} />
          <Route
            path="/aisle/shelf"
            element={<Shelf aisle_data={relData} setRelData={setRelData} />}
          />
          <Route
            path="/aisle/shelf/product/create"
            element={<Form isUpdate={false} />}
          />
          <Route
            path="/aisle/shelf/product/:id/update"
            element={<Form product_data={relData} isUpdate={true} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
