import { useEffect, useState } from 'react'
import TaskGrid from './components/TaskGrid'
import './App.css'


export default function App() {
  return (
    <div>
      <header className={`custom-animate p-20 text-center text-9xl text-shadow-2xs font-bold text-black`}>
        To-Do List...
      </header>
      <TaskGrid />
    </div>
  )
}
