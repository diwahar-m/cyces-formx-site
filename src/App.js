
import './App.css'; 
import Home from './components/Home'; 
import Features from './components/Features';
import Pricing from './components/Pricing'; 
import Support from './components/Support'; 
import Blog from './components/Blog';  
import Agency from './components/Agency';
import Login from './components/Login';  

import Refund from './components/Refund';

import Register from './components/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/agency" element={<Agency/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/refund" element={<Refund/>}/>
      </Routes>
    </Router>
  );
}

export default App;
