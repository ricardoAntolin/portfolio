import * as React from "react";

import "./contact.scss";
import SocialIcon, { ISocialIcon } from "../../shared/social/social";
import ReactGA from 'react-ga';

interface IProps {
  socialIconList: ISocialIcon[];
}

const onSendClickEvent = () => {
  ReactGA.event({
    category: 'User',
    action: `Message sent clicked`
  })
};

const Contact: React.StatelessComponent<IProps> = ({socialIconList}) => {
  return (
    <section className="section section-theme">
      <h2>Contact</h2>

      <div className="contact-container">
        <div className="social-container">
          {socialIconList.map((social, i) => (
            <SocialIcon key={i} social={social} />
          ))}
        </div>

        <div className="form-container">
          <h2>Send me a message</h2>
          <form method="POST" className="form" action="https://formspree.io/hello@ricardoantolin.dev">
            <input type="hidden" name="_subject" value="Contact request from personal website" required/>
            <input type="email" name="_replyto" placeholder="Your email" required/> 
            <textarea name="message" placeholder="Your message" />
            <button type="submit" onClick={onSendClickEvent}>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
