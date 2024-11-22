import React from 'react';

const Navbar = () => {
    return (
      <nav className="bg-blue-600 text-white p-4">
        <ul className="flex justify-between items-center">
          <li className="text-2xl font-bold">Student Management</li>
          <div className="flex space-x-6">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/add-student" className="hover:underline">
                Add Student
              </a>
            </li>
            <li>
              <a href="/search-student" className="hover:underline">
                Search Student
              </a>
            </li>
          </div>
        </ul>
      </nav>
    );
  };

export default Navbar;
