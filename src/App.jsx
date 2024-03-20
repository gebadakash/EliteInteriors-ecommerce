
import AboutUs from './AboutUs';
import './App.css'
import Blog from './Blog';
import Home from "./Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';



function App() {

  return (
    <BrowserRouter>
    <CartProvider>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
