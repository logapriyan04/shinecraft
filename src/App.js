import Header from "./Components/Header";
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Video from "./Components/Video";
import Contact from "./Components/Contact";

import "./Styles/Style.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <About />
      <Portfolio />
      <Video />
      <Contact />
    </div>
  );
}

export default App;
