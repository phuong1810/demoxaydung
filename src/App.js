import logo from './logo.svg';
import './App.css';
import './assets/css/animate.min.css';
import './assets/css/bootstrap.css';
import './assets/css/all.css';
import './assets/css/mmenu.css';
import './assets/css/jquery.fancybox.css';
import './assets/css/jquery.fancybox.style.css';
import './assets/css/magiczoomplus.css';
import './assets/css/owl.carousel.css';
import './assets/css/owl.theme.default.css';
import './assets/css/style.css';
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from'./commons/components/Header';
import Footer from './commons/components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
