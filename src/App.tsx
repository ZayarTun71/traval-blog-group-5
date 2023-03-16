import React from 'react';
import Header from "./components/header/header";
import Banner from "./components/main_visual/banner";
import Bagan from "./components/ad1/ad1";
import Footer from "./components/footer/footer";
import Blog from "./components/blog/blog";
import About from "./components/aboutus/About";
import Login from './components/login/Login';
import Resgister from './components/register/Resgister';
import Myanmar from "./components/detail_page/myanmar/myanmar"
import './App.css';

function App() {
  return(
    <>
      <div>
      <div className="main_visual">
        <Header/>
        <Banner/>
      </div>

        <Bagan/>
        <Blog/>
        <About/>
        <Footer/>
        <Myanmar/>
        <Login/>
        <Resgister/>
    </div>
    </>
  )
}

export default App;
