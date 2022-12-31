// import logo from './logo.svg';
// import './App.css';

import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";


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

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtills'
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      // document.title = 'TextUtils - Light Mode'
    }
  }


  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   // document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }

  // const toggleMode = (cls) => {
  //   removeBodyClasses()
  //   // console.log(cls);
  //   document.body.classList.add('bg-' + cls)
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

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="textUtils" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm mode={mode} heading="Try TextUtils - Word Counter, Character Counter, 
            Remove extra Spaces" showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  )

  // return (
  //   <>
  //     {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> 
  //   <Navbar/>  */}
  //     <Alert alert={alert} />
  //     <Router>
  //       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  //       <div className="container my-3">
  //         <Routes>
  //           <Route exact path="/about" element={<About />} />
  //           <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
  //         </Routes>
  //       </div>
  //     </Router>
  //   </>
  // );
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

