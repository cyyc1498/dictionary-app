
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictionary from './dictionary';

function App() {
  return (
    <div className="App">
      <div className="initial-page row">
          <span className='col'><h1 className='title'>Dictionary</h1></span>
          <span className='col'><Dictionary/></span>
        </div>
      <div className="container">
        
      </div>
      
      
    </div>
  );
}

export default App;
