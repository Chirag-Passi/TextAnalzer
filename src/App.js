import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import Alert from "./Alert";

function App() {
  const [mode, setMode] = useState("light"); // Whether Dark Mode Enabled
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Has Been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
    }
  };

  return (
    <>
      {/* <Navbar title="Util" aboutText="about" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <About /> */}
      <div className="container">
        <Textform showAlert={showAlert} heading="Enter Text To Analyze : " />
      </div>
    </>
  );
}

export default App;
