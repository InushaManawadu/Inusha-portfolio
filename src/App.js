import React from "react";
import Banner from "./components/Banner";
import "./styles/reset.css";
import "./styles/banner.css";
import "./styles/footer.css";
import Talents from "./components/Talents";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Talents />
      <Footer />
    </div>
  );
}

export default App;
