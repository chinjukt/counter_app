
import './App.css';
import Counter1 from './components/Counter1';

function App() {
  return (
    <div className='d-flex align-items-center w-100 justify-content-center flex-column' style={{height:'100vh',backgroundColor:'black'}}>
      <div className='d-flex align-items-center  justify-content-center flex-column p-5 rounded' style={{backgroundColor:'white'}}>
        <h1 className='text-primary'> Counter Application</h1>
        <Counter1/>
      </div>
    </div>
  );
}

export default App;
