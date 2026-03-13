import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { LuxuryCarsPage } from './pages/cars-page/LuxuryCarsPage' 
import { RegularCarsPage } from './pages/cars-page/RegularCarsPage'
import { Checkout } from './pages/checkout/checkout' 

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/LuxuryCarsPage" element={<LuxuryCarsPage category = 'LuxuryCars'/>} />
      <Route path="/RegularCarsPage" element={<RegularCarsPage category = 'RegularCars'/>} />
      <Route path="/Checkout" element={<Checkout />} />
    </Routes>
    </>
  )
}

export default App
