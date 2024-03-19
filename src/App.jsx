
import AboutUs from './AboutUs';
import './App.css'
import Blog from './Blog';
import Home from "./Home";
import Services from './Services';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';


function App() {


  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutUs></AboutUs>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
