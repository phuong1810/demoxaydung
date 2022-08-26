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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from'./commons/components/Header';
import Footer from './commons/components/Footer';
import NotFound from './commons/components/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import ServiceDetail from './pages/Service/detail';
import News from './pages/News';
import NewsDetail from './pages/News/detail';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Routes>
            <Route path="/xaydung-anphat" element={<Home />} />
            <Route path="/xaydung-anphat/gioi-thieu" element={<About />} />
            <Route path="/xaydung-anphat/dich-vu" element={<Service />} />
            <Route path="/xaydung-anphat/dich-vu/:id" element={<ServiceDetail />} />
            <Route path="/xaydung-anphat/tin-tuc" element={<News />} />
            <Route path="/xaydung-anphat/tin-tuc/:id" element={<NewsDetail />} />
            <Route path="/xaydung-anphat/lien-he" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
