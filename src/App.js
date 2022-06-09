
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictionary from './dictionary';
import Definition from './definition';

function App() {
  return (
    <div className="App"> 
    <div className="container">
      <div className="row">
          <span className='col'><h1 className='title'>Dictionary</h1></span>
          <span className='col'><Dictionary/></span>
        </div>
     
       
      </div>
      
      
    </div>
  );
}

export default App;
