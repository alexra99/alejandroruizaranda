
import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import styled from 'styled-components';
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import PortfoliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch'
import { IconButton } from "@material-ui/core";
import { Route, Switch as Switching } from "react-router";













function App() {

  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(()=>{
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () =>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false)
    }else{
      setTheme('light-theme');
      setChecked(true)
    }
  }

  return (
    <div className="App">
        <div className="theme">
          <div className="light-dark-mode">
              <div className="left-content">
                <Brightness4Icon />
              </div>
              <div className="right-content">
                <Switch
                  value=""
                  checked={checked}
                  inputProps={{ 'aria-label': '' }}
                  size="medium"
                  onClick={themeToggler}
                  
                />
              </div>
            </div>
        </div>

        <div className="ham-burger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
          </IconButton>
        </div>
        <div>
        <Navbar />
        
        <Switching>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/sobremi" exact>
              <AboutPage />
            </Route>
            <Route path="/formacion" exact>
              <ResumePage />
            </Route>
            <Route path="/proyectos" exact>
              <PortfoliosPage />
            </Route>
            <Route path="/cursos" exact>
           <BlogsPage />
            </Route>
            <Route path="/contacto" exact>
              <ContactPage />
            </Route>
        </Switching>
        <Footer />
           
      </div>
      
















    </div>
    
      
  );
}



export default App;
