import { motion } from 'framer-motion';
//import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React from 'react'

export default function Navbar() {
  return (
    <motion.nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <div className="text-xl font-bold">AgriAI</div>
            <div className="space-x-6 hidden md:flex">
              <Link to="/" className="hover:text-gray-200">Home</Link>
              <Link to="/products" className="hover:text-gray-200">Products</Link>
              <Link to="/info" className="hover:text-gray-200">Info</Link>
              <Link to="/disease" className="hover:text-gray-200">Disease</Link>
              <Link to="/test" className="hover:text-gray-200">Test</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/signin" className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-100">Sign In</Link>
              <FaUserCircle size={28} className="cursor-pointer" />
            </div>
          </motion.nav>
        );
}
