import './App.css'
import { Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage'
import Home from './pages/Home'
import GlobalLoader from './components/GlobalLoader'

function App() {

  return (
    <>
      <GlobalLoader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App
