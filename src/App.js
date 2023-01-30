import './App.css';
import Navbar from './components/Navbar';
import TypeForm from './components/TypeForm';

function App() {
  return (
    <>
    <div className="Main">
      <Navbar title="HelloFaizan"/>
      <div className="container">
      <TypeForm heading="Enter Text to convert in Capitals - By HelloFaizan"/>
      </div>
    </div>
    </>
  );
}

export default App;
