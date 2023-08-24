import logo from './logo.svg';
import './App.css';
import NavBar from './Pages/LandingPage/Navbar/NavBar';
import MainPage from './Pages/LandingPage/MainPage/MainPage';
import BoxOne from './Pages/LandingPage/MainPage/Box-Section/Box-one/BoxOne';
import AboutUs from './Pages/About-Us/AboutUs';
import Professionals from './Pages/Professionals/Professionals';
import Portfolio from './Pages/Portfolio/Portfolio';

function App() {
  return (
    <>
    <NavBar/>
    <MainPage/>
    <BoxOne/>
    <AboutUs/>
    <Professionals/>
    <Portfolio/>
    </>
  );
}

export default App;
