import NavBar from "../components/navbar";
import HomeCrausal from "../components/crousals";
import OurCourses from "./Courses";
import About from "./AboutUs";
import Footer  from "../components/Footer";

function Home() {
    
  return (
    <div>
      <NavBar />      
      <section id="home">
        <HomeCrausal />
      </section>
      <section id="ourCourses">
        <OurCourses />
      </section>
      <section id="about">
        <About />
      </section>
      
      <Footer/>
    </div>
  );
}

export default Home;
