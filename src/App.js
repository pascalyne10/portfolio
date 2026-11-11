
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Navigation from './pages/Navigtion/Navigation';

function App() {
  return (
    <>
     <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </>
  );
}

export default App;
