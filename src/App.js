import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      {/* <Navbar title="Util" aboutText="about" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtil" />

      <div className="container">
        <Textform heading="Enter Text To Analyze : "/>
      </div>
    </>
  );
}

export default App;
