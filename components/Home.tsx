import About from "./About";
import Hero from "./Hero";
import RecentImage from "./RecentImage";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <RecentImage />
      <About />
    </div>
  );
};
export default Home;
