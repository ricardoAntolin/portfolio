import * as React from "react";

import "./landing.scss";
import { Link } from 'react-scroll';
import ReactGA from 'react-ga';

interface IAnimated {
  currentClass: string;
  animationClass: string;
  delay: number;
}

interface IState {
  name?: IAnimated;
  title?: IAnimated;
  findOutMore?: IAnimated;
  hireMeButton?: IAnimated;
}

interface IProps {
  userDetails: IUserDetails;
}

export interface IUserDetails {
  firstName: string;
  lastName: string;
  title: string;
}

const onHireClickEvent = () => {
  ReactGA.event({
    category: 'User',
    action: `Clicked Hire on landing`
  })
};

class Landing extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: { currentClass: "hide-down", animationClass: "show", delay: 150 },
      title: { currentClass: "hide-down", animationClass: "show", delay: 450 },
      findOutMore: {
        currentClass: "hide-down",
        animationClass: "show",
        delay: 650
      },
      hireMeButton: {
        currentClass: "hide-down",
        animationClass: "show",
        delay: 600
      }
    };
  }

  public componentDidMount() {
    Object.keys(this.state).forEach(key => {
      const obj: IAnimated = this.state[key];

      this.animateWithDelay(key, obj);
    });
  }

  public render() {
    const { userDetails } = this.props;
    const { name, title, findOutMore, hireMeButton } = this.state;

    return (
      <section className="landing-container">
        <div className="landing-overlay" />

        <div className="container container-heading">
          <h1 className={`heading-name ${name && name.currentClass}`}>
            {userDetails.firstName} {userDetails.lastName}
          </h1>
          <h2 className={`heading-title ${title && title.currentClass}`}>
            {userDetails.title}
          </h2>
        </div>

        <div className="container hire-me-container">
          <Link
            href="#"
            to="contact"
            onClick={onHireClickEvent}
            className={`hire-me-button ${hireMeButton &&
              hireMeButton.currentClass}`}
            spy={true}
            smooth={true}
            duration={500}
          >
            HIRE ME!
          </Link>
        </div>

        <div
          className={`container container-footer ${findOutMore &&
            findOutMore.currentClass}`}
        >
          <span className="find-out">
            Find out more about {userDetails.firstName}
          </span>
          <Link className="fa fa-chevron-down"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            />
        </div>
      </section>
    );
  }

  private animateWithDelay(key: string, animateObj: IAnimated) {
    setTimeout(() => {
      this.setState({
        [key]: { ...animateObj, currentClass: animateObj.animationClass }
      });
    }, animateObj.delay);
  }
}

export default Landing;
