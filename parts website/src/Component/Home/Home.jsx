import React from 'react'
import './Home.css';
import LowerHeader from '../Includes/LowerHeader';
import HomeForm from './HomeForm';
import Discount_home from './Discount_home';
import Speciality from './Speciality';
import BuyAutoParts from './BuyAutoParts';
import AllPArts from './AllPArts';
import ShowParts from './ShowParts';
import DiscountParts from './DiscountParts';
import ShopMake from './ShopMake';
import ShopModels from './ShopModels';
import FeaturedBrands from './FeaturedBrands';
import PopularProducts from './PopularProducts';
import Satisfied_customer from './Satisfied_customer';
import CustomerReview from './CustomerReview';
import HomeHeader from './HomeHeader';

export default function Home() {
  return (
    <>
    <HomeHeader/>
      <BuyAutoParts/>
      <AllPArts/>
      <ShowParts/>
      <DiscountParts/>
      <ShopMake/>
      <ShopModels/>
      <FeaturedBrands/>
      <PopularProducts/>
      <Satisfied_customer/>
      <CustomerReview/>
    </>
  )
}
