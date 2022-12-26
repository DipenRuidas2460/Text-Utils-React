// import logo from './logo.svg';
// import './App.css';

import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


// let name = "Dipen Ruidas";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode('dark');
  //     document.body.style.backgroundColor = "#042743"
  //     showAlert("Dark mode has been enabled", "success")
  //   } else {
  //     setMode('light');
  //     document.body.style.backgroundColor = "white"
  //     showAlert("Light mode has been enabled", "success")
  //   }
  // }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* <About /> */}
      </div>
      {/* <Navbar/> */}
    </>
  );
}

export default App;


// return (
//   <>
//   <nav>
//     <li> Home </li>
//     <li> About </li>
//     <li> Contact </li>
//   </nav>
//   <div className="container">
//     <h1> Hello {name} </h1>
//     <h2> Hello World </h2>
//     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//       Suscipit dolorum asperiores deleniti nulla adipisci alias, 
//       inventore maxime corporis mollitia commodi odio dolorem quas ratione accusantium, 
//       veniam sed est ad! Ut.
//     </p>
//   </div>
//   <div className="blank">Lovely</div>
//   </>
// );


// return (
//   <>
//   <h1> This is me</h1>
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React with Dipen Ruidas
//       </a>
//     </header>
//   </div>
//   </>
// );

