import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Data from './Data'
import CountryData from './CountryData'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Data/>} />
        <Route path='/:name' element={<CountryData/>} />
      </Routes>
    </div>
  )
}

export default App
