import React from 'react';
import './App.css';

import Intro from './components/home/inrto/intro';
import Navbar from './components/nav-bar/nav';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects'
import Footer from "./components/footer/footer";
class App extends React.Component
{
  constructor ()
  {
    super();
    this.state = {
      nav: {
        home: "home",
        work: "work",
        about: "about",
        skills: "skills",
      },
      intro: {
        name: "Enas Awad",
        jobTitle: "Full stack Web Developer",
        stack:"Mearn Stak , Ui Ux Desiner",
      },
      about: {
        name: "Enas"
      },

    };
  }
  render ()
  {
    const { nav, intro, about } = this.setState;
    return (
      <>
        <Navbar nav ={this.state.nav} />
        <Intro intro ={this.state.intro} />
        <About about ={this.state.about} />
        <Skills />
        <Projects />
        <Footer />
      </>
    );
  }
}

export default App;
