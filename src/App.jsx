/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CreateEmp from './CreateEmp';
import Delete from './Delete';
import Home from './Home';
import Navbar from './Navbar';
import ReadEmp from './ReadEmp';
import Update from './Update';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Router>   
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/createemp" element={<CreateEmp/>} />
          <Route path="/reademp" element={<ReadEmp/>} />
          <Route path="/update" element={<Update/>} />
          <Route path="/delete" element={<Delete/>} />
          <Route path="/employees" element={<ReadEmp/>} />
       
          <Route path="/edit-employee/:id" element={<Update/>} />
     
        </Routes>
      
     </Router>
       
    </>
  )
}
export default App