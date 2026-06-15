import { useState } from 'react'
import './App.css'
import LoginPage from '../src/pages/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>

  )
}
export default App
