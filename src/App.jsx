import { useEffect, useState } from 'react'
import TaskGrid from './components/TaskGrid'
import LocalDashboard from './components/LocalDashbord'
import './App.css'


export default function App() {
  return (
    <div>
      <header className={`pt-30 text-center text-9xl text-shadow-2xs font-bold text-black`}>
        To-Do List...
      </header>
      <LocalDashboard />
      <TaskGrid />
    </div>
  )
}
