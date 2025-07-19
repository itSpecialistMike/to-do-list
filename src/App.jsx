import { useEffect, useState } from 'react'
import TaskGrid from './components/TaskGrid'
import Header from './components/Header'
import LocalDashboard from './components/LocalDashbord'
import Carousel from "./components/Carousel";
import './App.css'
import Footer from './components/Footer';


export default function App() {
  return (
    <div>
      <Header />
      <Carousel />
      {/* <LocalDashboard />
      <TaskGrid /> */}
      <Footer />
    </div>
  )
}
