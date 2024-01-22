import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

export default function App() {
  
  return (
    <div className="App">
      <div className='App-wrapper'>
        <div className="App-header">
          <Header></Header>
        </div>
        <Outlet />
      </div>
      <div className="App-footer">
        <p>Мы - магазин модных футболок!</p>
      </div>
    </div>
  )
}
