import React from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Collections from './Components/Collections';
import Categories from './Components/Categories';
import BestSellingProducts from './Components/BestSellingProducts';
import TopCollections from './Components/TopCollections';
import BestShops from './Components/BestShops';
import FutureProducts from './Components/FutureProducts';
import Review from './Components/Review';
import NavBarMin from './Components/NavBar(min)';
import Carousel from './Components/Carousel';
import Header from './Components/Header';
import Navitems from './Components/Navitems';
import HeadPhones from './Components/HeadPhones';
import Brands from './Components/Brands';
import ReviewData from './Components/Review-Data';
import OnlineSupport from './Components/OnlineSupport';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='app' >
      <Header/>
      <Navitems/>
      <Carousel/>
      <Collections/>
      <OnlineSupport/>
      <Categories/>
      <BestSellingProducts/>
      <HeadPhones/>
      <TopCollections/>
      <BestShops/>
      <FutureProducts/>
      <Review/>
      <ReviewData/>
      <Brands/>
      <NavBarMin/>
      <Footer/>
    </div>
  )
}

export default App