import Announcement from "../components/Announcement";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import More from "../components/More";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories/>
      <Banner />
      <Products/>
      <More />
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
