import * as React from "react";
import "./App.scss";

import Landing from "./sections/landing/landing";
import About from "./sections/about/about";
import Experience from "./sections/experience/experience";
import Projects from "./sections/projects/projects";
import Skills from "./sections/skills/skills";
import Contact from "./sections/contact/contact";
import Footer from "./sections/footer/footer";
import PortfolioDataService from "../services/portfolio-data.service";
import ReactGA from 'react-ga';
import { Element, Events, scrollSpy } from 'react-scroll'


ReactGA.initialize('UA-139875082-1');


class App extends React.Component {

  public componentDidMount() {
    Events.scrollEvent.register('end', function(to, element) {
      console.log(to);
      console.log(element);
      ReactGA.pageview(`/${to}`);
    });

    scrollSpy.update();
  }

  public render() {
    return (
      <div className="app-container">
        <Landing userDetails={PortfolioDataService.userDetails} />
        <About aboutTextList={PortfolioDataService.aboutTextList} userDetails={PortfolioDataService.userDetails} />
        <Projects projectList={PortfolioDataService.projectList} />
        <Experience experienceList={PortfolioDataService.experienceList} />
        <Skills skillList={PortfolioDataService.skillList} />
        <Element name="contact"><Contact socialIconList={PortfolioDataService.socialIconList} /></Element>
        <Footer />
      </div>
    );
  }
}

export default App;
