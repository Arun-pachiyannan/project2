import React from 'react'
import Hero from './Components/Hero/Hero'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <main className=''>
        <BrowserRouter>
          <Routes>
            <Route path='/Arun-Project' element={<Hero />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App
