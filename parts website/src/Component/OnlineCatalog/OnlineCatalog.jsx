import React from 'react'
import Home from '../Home/Home'
import HomeHeader from '../Home/HomeHeader'
import ShopModels from '../Home/ShopModels'
import CustomerReview from '../Home/CustomerReview'
import ShopParts from './ShopParts'

export default function OnlineCatalog() {
  return (
   <>
   <HomeHeader/>
   <ShopModels/>
   <ShopParts/>
   <CustomerReview/>
   </>
  )
}
