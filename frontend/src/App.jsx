import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/HomePage';
import StudentForm from './components/StudentForm';
import StudentSearch from './components/StudentSearch';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<StudentForm />} />
        <Route path="/search-student" element={<StudentSearch />} />
      </Routes>
    </Router>
  );
};

export default App;
