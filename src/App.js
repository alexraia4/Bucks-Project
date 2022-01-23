import "./styles/App.css";
import Product from "./components/Product";
import Easiest from "./components/Easiest";
import Help from "./components/Help";
import Works from "./components/Works";
import Choose from "./components/Choose";
import Yourself from "./components/Yourself";
import Contact from "./components/Contact";
import Bottom from "./components/Bottom";

function App() {
  return (
    <div className="App">
      <Product />
      <Easiest />
      <Help />
      <Works />
      <Choose />
      <Yourself />
      <Contact />
      <Bottom />
    </div>
  );
}

export default App;
