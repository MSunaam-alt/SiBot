import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Section2 from "./Components/section2";
import Section3 from "./Components/section3";
import Team from "./Components/team";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="">
      <div className="container px-20 mx-auto hidden md:block">
        <Nav />
        <Hero />
        <Section2 />
        <Section3 />
        <Team />
      </div>
      <div className=" md:hidden h-screen w-screen flex text-center items-center justify-center text-xl font-bold">
        This site is not yet optimized for mobile devices
      </div>
      <Footer />
    </div>
  );
}

export default App;
