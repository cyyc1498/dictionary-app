
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictionary from './dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="initial-page">
        <h1 className='title'>Dictionary</h1>
        <Dictionary/>
       </div>
      </div>
      
      
    </div>
  );
}

export default App;
