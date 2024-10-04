import Login from './components/Login';
import Signup from './components/Signup';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-4'>
          <Login /> 
        </div>
        <div className='col-4'>
          <Signup />
        </div>
        <div className='col-2'></div>
      </div>
    </div>
  );
}

export default App;
