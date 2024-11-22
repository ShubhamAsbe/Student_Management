import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar/Navbar';
const StudentSearch = () => {
  const [prn, setPrn] = useState('');
  const [student, setStudent] = useState(null);

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/students/${prn}`);
      setStudent(data);
    } catch (error) {
      console.error('Error fetching student data:', error);
      setStudent(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md mt-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Search Student by PRN
        </h2>
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Enter PRN Number"
            value={prn}
            onChange={(e) => setPrn(e.target.value)}
            className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white py-2 px-6 rounded shadow hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>

        {student ? (
          <div className="mt-8 p-4 bg-green-100 rounded">
            <h3 className="text-xl font-bold mb-4 text-green-700">Student Details</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Name:</strong> {student.name}</li>
              <li><strong>Age:</strong> {student.age}</li>
              <li><strong>Number:</strong> {student.number}</li>
              <li><strong>Gender:</strong> {student.gender}</li>
              <li><strong>10th Marks:</strong> {student.tenthMarks}</li>
              <li><strong>12th Marks:</strong> {student.twelfthMarks}</li>
              <li><strong>CET Marks:</strong> {student.cetMarks}</li>
              <li><strong>PRN:</strong> {student.prn}</li>
            </ul>
          </div>
        ) : prn ? (
          <p className="mt-8 text-red-600">No student found for the given PRN number.</p>
        ) : null}
      </div>
    </div>
  );
};

export default StudentSearch;
