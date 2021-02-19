// import { React } from "React";
import './App.css';
import Header from './Components/Header.js';
import Hero from './Components/Hero.js';
import Clients from './Components/Clients.js';
import Features from './Components/Features.js';
import Products from './Components/Products.js';
import Contacts from './Components/Contacts.js';
import Footer from './Components/Footer.js';
function App() {

  return (
    <div>
      <Header />

      <Hero />

      <main id="main">
        <Clients />

        <Features />

        <Products />

        <Contacts />

      </main>

      <Footer />

      <a href="#" className="back-to-top" style={{ display: 'none' }}><i className="icofont-simple-up"></i></a>

      <nav className="mobile-nav d-lg-none">
        <ul>
          <li className="active"><a href="index.html">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#team">Team</a></li>
          <li className="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="drop-down"><a href="#">Drop Down 2</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
              <li><a href="#">Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact Us</a></li>

          <li className="get-started"><a href="#about">Get Started</a></li>
        </ul>
      </nav>
      {/* <div className="mobile-nav-overly" style={{ display: 'none' }}>

      </div> */}

    </div>
  );
}

export default App;
