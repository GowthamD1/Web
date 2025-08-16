import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
