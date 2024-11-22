import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar/Navbar';
import { StudentAPI } from './ApiCall/ApiCallEndpoints';

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    number: '',
    gender: '',
    tenthMarks: '',
    twelfthMarks: '',
    cetMarks: '',
    prn: '',
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(StudentAPI.STUDENT_ADD_API, student);
      alert('Student data saved successfully!');
    } catch (error) {
      console.error('Error saving student data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md mt-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Add Student
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {Object.keys(student).map((field) => (
            <div key={field} className="flex flex-col">
              <label className="mb-2 text-gray-700 font-medium">
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                type={field === 'number' || field === 'age' ? 'number' : 'text'}
                name={field}
                value={student[field]}
                onChange={handleChange}
                required
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded shadow hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
