import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import "../assets/styles/App.scss";
import Header from "../components/Header";

// const API = "http://localhost:3000/initalState";

const Home = ({ myList, trends, originals }) => {
  /*
  const [videos, setVideos] = useState({
    myList: [],
    trends: [],
    originals: []
  });
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);
  */
  /*
  const initialState = useInitialState(API);

  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    */
  return (
    <>
      <Header />
      <Search isHome />
      {/* {initialState.myList.length > 0 && ( */}
      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map(item => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Video">
        <Carousel>
          {originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = state => {
  // only declare the elements from store that i need
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  };
};

// export default Home;
export default connect(mapStateToProps, null)(Home); // Connected to provider to use state
