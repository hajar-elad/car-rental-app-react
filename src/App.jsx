import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { LuxuryCarsPage } from './pages/cars-page/LuxuryCarsPage' 
import { RegularCarsPage } from './pages/cars-page/RegularCarsPage'
import { Checkout } from './pages/checkout/checkout' 

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/luxurycarspage" element={<LuxuryCarsPage category = 'LuxuryCars'/>} />
      <Route path="/regularcarspage" element={<RegularCarsPage category = 'RegularCars'/>} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
    </>
  )
}

export default App
