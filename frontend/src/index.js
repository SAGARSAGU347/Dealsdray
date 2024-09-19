import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainCreateEmp from './landing_page/CreateEmp/MainCreateEmp'; // Ensure this path is correct
import EditEmp from './landing_page/CreateEmp/EditEmp';
import Header from './landing_page/CreateEmp/Header';
import DashBoard from './landing_page/CreateEmp/DashBoard'
import CreateEmp from './landing_page/CreateEmp/CreateEmp';
import Signup from './landing_page/CreateEmp/login/Signup';
import Login from './landing_page/CreateEmp/login/Login';
import Edit from './landing_page/CreateEmp/Edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<div>Home Page</div>} />
  <Route path="/createemployee" element={<MainCreateEmp />} />
  <Route path="/edit/:id" element={<EditEmp/>} />
  <Route path="/header" element={<Header/>} />
  <Route path="/dashboardemp" element={<DashBoard/>} />
  <Route path="/createmp" element={<CreateEmp/>} />
  <Route path="/signup" element={<Signup/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="update/:id" element={<Edit/>} />
  


  <Route path="*" element={<div>404 - Page Not Found</div>} />
</Routes>

    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <App />
  </React.StrictMode>
);
