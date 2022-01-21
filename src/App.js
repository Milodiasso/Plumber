import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Components/Accueil/Home.js";
import Produits from "./Components/Produits/Produits.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact/Contact';
import About from './Components/Apropos/About';
import { useState, useEffect } from 'react';
// import Realisation from './Components/Realisations/Realisation';

function App() {
  const [showMenu, setShowMenu] = useState('nav-menu nav-menu-hidden');
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1100);
  const [toggleLight, setToggleLight] = useState(localStorage.getItem('light') ?? "dark")

  let toggle_cover = toggleLight === undefined || 'light' ? " light_cover " : " dark_cover "

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [toggleLight, toggle_cover]);


  const show = () => {
    showMenu === 'nav-menu' ? setShowMenu('nav-menu nav-menu-hidden') : setShowMenu('nav-menu')
  }

  const close_menu = () => {
    if (showMenu === 'nav-menu') {
      setShowMenu('nav-menu nav-menu-hidden')

    }
  }

  useEffect(() => {
    if (toggleLight === 'light') {
      document.body.classList.remove('dark')
      document.body.classList.add('light')

    } else {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
  })


  const handleLight = () => {
    if (toggleLight === "light") {
      localStorage.setItem('light', 'dark')
      document.body.classList.remove('light')
      document.body.classList.add('dark')
      setToggleLight("dark");
    }
    else {
      localStorage.setItem('light', 'light')
      document.body.classList.remove('dark')
      document.body.classList.add('light')
      setToggleLight("light");
    }
  }




  return (
    <div className="App" onClick={close_menu}>
      <div className={showMenu}  >
        <button className='close btn_btn dark-border' onClick={show} >fermer</button>
        <a href="/" className="lien">ACCUEIL</a>
        {/* <a href="/realisation" className="lien">RÉALISATIONS</a> */}
        <a href="/produits" className="lien">PRODUITS</a>
        <a href="/apropos" className="lien">À PROPOS</a>
        <a href="/contact" className="lien">CONTACT</a>
      </div>
      <div className={"menu sticky-nav " + toggleLight}>
        <div className="logo" >
          <a href="/"><img src='/assets/plumber_logo2.png' alt="logo_plaster" width="120px" /></a>
        </div>
        <div className={"trigger " + toggleLight + toggle_cover} onClick={handleLight}>
          <span className={"btn_btn "}></span>
        </div>
        {isDesktop ?
          <div className="nav-links">
            <a href="/" className={"lien " + toggleLight}><span>ACCUEIL </span> </a>
            {/* <a href="/realisation" className={ "lien " + toggleLight}><span>RÉALISATIONS </span> </a> */}
            <a href="/produits" className={"lien " + toggleLight}><span>PRODUITS </span> </a>
            <a href="/apropos" className={"lien " + toggleLight}><span>À PROPOS </span> </a>
            <a href="/contact" className={"lien " + toggleLight}><span>CONTACT </span> </a>
          </div> :
          <div className="navbar-btn">

            <button className=" btn_btn dark-border" onClick={show}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAKElEQVRIiWNgGAXDHjAisf/TwmwmKhs6CgYhGE1Fo4ByMJqKRsEQAADWCQMKYvEFtQAAAABJRU5ErkJggg==" alt='menu' /></button>
          </div>}
      </div>
      <div className="main">
        <Router basename='plumber.lu/'>
          <Route path='/' exact component={Home} />
          <Route path='/produits' component={Produits} />
          {/* <Route path='/realisation' component={Realisation} /> */}
          <Route path='/contact' component={Contact} />
          <Route path='/apropos' component={About} />
          <footer>
            <div className="links">
              <a href="/"> <span className={"lien " + toggleLight}>Home</span></a>
              <a href="/produits"> <span className={"lien " + toggleLight}>Product</span></a>
              <a href="/contact"> <span className={"lien " + toggleLight}>Contact</span></a>
              <a href="/apropos"> <span className={"lien " + toggleLight}>About</span></a>
            </div>
          </footer>
        </Router>
      </div>
    </div >

  );
}

export default App;
