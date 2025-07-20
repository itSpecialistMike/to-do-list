import { Link } from 'react-router-dom';
import Header from '../components/Header'
import Carousel from "../components/Carousel";
import '../App.css'
import Footer from '../components/Footer';
import LoadingModal from '../components/LoadingModal';
import ProjectDescription from '../components/ProjectDescription';


export default function Main() {
  return (
    <div>
      <LoadingModal />
      <Header />
      <Carousel />
      <ProjectDescription />
      <Footer />
    </div>
  )
}
