import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Header from './containers/header/header';
import Routes from './containers/routes/routes';
import About from './containers/about/about';
import Gallery from './containers/gallery/gallery';
import Footer from './containers/footer/footer';

const App = () => {
  return (
    <div>
          <Navbar/>
          <Header />
          <Routes />
          <About />
          <Gallery />
          <Footer />
    </div>
  )
}

export default App