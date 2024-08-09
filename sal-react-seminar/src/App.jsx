// import './App.css'

import { Fragment } from "react"
import Products from "./components/Products"
import Header from "./components/Header"
import MyContext from "./MyContext"
import Cart from "./components/Cart"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"

function App() {
  return (
    <Fragment>    
      <MyContext>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </MyContext>
    </Fragment>
  )
}

export default App
