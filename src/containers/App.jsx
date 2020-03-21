import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import "../assets/styles/App.scss";

const API = "http://localhost:3000/initalState";

const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Categories title="Mi Lista">
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>
    <Footer />
  </div>
);

export default App;
