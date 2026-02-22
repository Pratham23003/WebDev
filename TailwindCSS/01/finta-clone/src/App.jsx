import "./App.css";
import Container from "./components/container";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

function App() {
  return (
    <div className="layout">
      <Container>
        <div className="layout-lines-container">
          <div className="left-line"></div>
          <div className="right-line"></div>
        </div>
        <Navbar></Navbar>
        <Hero></Hero>
      </Container>
      <div className="hero-image-container">
        <div className="horizontal-line"></div>
        <img className="hero-img" src="./hero-ui-v6.webp" alt="" />
      </div>
    </div>
  );
}

export default App;
