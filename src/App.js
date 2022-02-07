import { useState } from "react";
import { useEffect } from "react";
import Footer from "./Components/Footer";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import PortfoliosPage from "./Pages/PortfoliosPage";
import BlogsPage from "./Pages/BlogsPage";
import ContactPage from "./Pages/ContactPage";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import { IconButton } from "@material-ui/core";
import Navbar from "./Components/Navbar";

function App() {
  const [theme, setTheme] = useState("light-theme");
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(true);
    } else {
      setTheme("light-theme");
      setChecked(false);
    }
  };

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{ "aria-label": "" }}
              size="medium"
              onClick={themeToggler}
            />
          </div>
        </div>
      </div>

      <MainContentStyled>
        <HomePage />
        <AboutPage />
        <PortfoliosPage />
        <ResumePage />
        <BlogsPage />
              <ContactPage />
              <Footer />
        </MainContentStyled>
        
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
