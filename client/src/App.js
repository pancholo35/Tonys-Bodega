import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Form from './components/Form'
import Aisles from './pages/Aisles'

const App = () => {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" />
          <Route path="/aisles" element={<Aisles />} />
          <Route path="/aisle/shelf/product/create" element={<Form />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
