import { useState } from 'react';
import './App.css';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';
import TextF from './Components/TextForm';
import Alert from './Components/Alert';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  // functional state
  const [mode, setMode] = useState("light");

  const [alert, changeAlert] = useState(null);


  const setAlert = (mess, type) => {
    changeAlert({
      msg: mess,
      type: type
    })

    setTimeout(() => {
      changeAlert(null);
    }, 1200)

  }

  const toggleMode = () => {

    if (mode === 'light') {
      setMode("dark");
      document.body.style.background = '#042743';
      document.title = 'TextUtils-Dark-Mode';
      setAlert("dark mode has enabled", "success");

    }

    else {
      setMode('light')
      document.body.style.background = 'white';
      document.title = 'TextUtils-light-Mode';
      setAlert("light mode has enabled", "success");

    }
  }

  return (
    <>
      <Router >
        <Navbar title="Textutils" toggle={toggleMode} mode={mode}></Navbar>
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<AboutUs mode={mode} />} />
          <Route path="/" element={<TextF heading="Enter the Text to analyze below" mode={mode} />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
