import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Layout} from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import CloudCompute from './pages/CloudCompute';
import ExtraCPUOptimized from './pages/ExtraCPUOptimized';
import CPUOptimized from './pages/CPUOptimized';
import Balance from './pages/Balance';
import MemoryDense from './pages/MemoryDense';
import MemoryDensePlus from './pages/MemoryDensePlus';
import { useRef } from "react";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cloudcompute" element={<CloudCompute />} />
          <Route path="/extra-cpu-optimized" element={<ExtraCPUOptimized/>} />
          <Route path='/cpu-optimized' element={<CPUOptimized/>} />
          <Route path='/balance' element={<Balance/>} />
          <Route path='/memory-dense' element={<MemoryDense/>} />
          <Route path='/memory-dense-plus' element={<MemoryDensePlus/>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
