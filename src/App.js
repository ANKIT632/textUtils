import './App.css';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';
import TextF from './Components/TextForm';

// import TextF from "./Components/TextForm";


function App() {
  return (
<>
<Navbar title="Textutils"></Navbar>

<div className='container'>

<TextF heading="Enter the Text to analyze below"/>
</div>

<AboutUs/>
</>   

  );
}

export default App;
