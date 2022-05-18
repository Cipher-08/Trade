import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import CoinPage from './CoinPage';
import Header from './components/Header';
import Homepage from './pages/Homepage';

function App() {
  return (
   <div className='classes'>
   <BrowserRouter>
 
    <Header/>
     <Routes>
     <Route path="/" element={<Homepage/>}/>
     <Route path="/coins/:id" element={<CoinPage/>}/>
     </Routes>
   
   </BrowserRouter>
   </div>
  );
}

export default App;
