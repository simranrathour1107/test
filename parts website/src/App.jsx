import React from "react"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import GeneralHeader from "./Component/Includes/GeneralHeader"
import Header from "./Component/Includes/Header"
import Home from "./Component/Home/Home"
import Footer from "./Component/Includes/Footer"
import OnlineCatalog from "./Component/OnlineCatalog/OnlineCatalog"
import Brands from "./Component/Brands/Brands"
import ShopByMake from "./Component/ShopByMake/ShopByMake"

function App() {


  return (
    <>
      <BrowserRouter>
        <GeneralHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onlinecatalog" element={<OnlineCatalog />} />
          <Route path="/brand" element={<Brands />} />
          <Route path="/shopbymake" element={<ShopByMake />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
