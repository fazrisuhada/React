import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import "./data.css"
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Home.jsx'
import About from './About.jsx'
import Product from './Product.jsx'
import Costumer from './Costumer.jsx'
import Seller from './Seller.jsx'
import Data from './Data.jsx'
import DataLayout from './DataLayot.jsx'
import ProductDetail from './ProductDetail.jsx'
import Image from './Image.jsx'
import NotFound from './NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/images/*" element={<Image />} />
        <Route path="/data" element={<DataLayout />}>
          <Route index element={<Data />} />
          <Route path="products" element={<Product />} />
          <Route path="product/:productId" element={<ProductDetail />} />
          <Route path="customers" element={<Costumer />} />
          <Route path="sellers" element={<Seller />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
