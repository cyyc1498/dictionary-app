
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictionary from './dictionary';

function App() {
  return (
    <div className="App"> 
    <div className="container-fluid">
      <Dictionary/>
     
      <hr></hr>  
      <div className='footer'><a href="https://github.com/cyyc1498/dictionary-apps" className="github">Open-source</a> code by Chloe Chan</div>
      </div>
    </div>
  );
}

export default App;
