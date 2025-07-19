import { useEffect, useState } from 'react'
import TaskGrid from './components/TaskGrid'
import Header from './components/Header'
import LocalDashboard from './components/LocalDashbord'
import Carousel from "./components/Carousel";
import './App.css'


export default function App() {
  return (
    <div>
      <Header />
      <Carousel />
      {/* <LocalDashboard />
      <TaskGrid /> */}
    </div>
  )
}
