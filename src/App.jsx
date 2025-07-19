import { useEffect, useState } from 'react'
import TaskGrid from './components/TaskGrid'
import LocalDashboard from './components/LocalDashbord'
import './App.css'


export default function App() {
  return (
    <div>
      <header className={`p-20 text-center text-9xl text-shadow-2xs font-bold text-black`}>
        To-Do List...
      </header>
      <p className='text-center text-6xl font-bold text-black text-shadow-2xs my-20'>Личные дашборд</p>
      <LocalDashboard />
      <p className='text-center text-6xl font-bold text-black text-shadow-2xs my-20'>Общий дашборд</p>
      <TaskGrid />
    </div>
  )
}
