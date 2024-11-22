import React from 'react';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">Welcome to the Student Management System</h1>
        <p className="mt-4 text-gray-700">
          Manage student data efficiently. Use the navigation links above to add or search for student details.
        </p>
      </div>
    </div>
  );
};

export default Home;
