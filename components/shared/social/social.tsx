import * as React from "react";

import "./social.scss";
import ReactGA from 'react-ga';

interface IProps {
  social: ISocialIcon;
}

export interface ISocialIcon {
  id: string;
  name: string;
  icon: string;
  url: string;
}

const onClickEvent = (socialName: String) => {
  ReactGA.event({
    category: 'User',
    action: `Clicked on ${socialName} link`
  })
};

const SocialIcon: React.StatelessComponent<IProps> = props => {
  const {
    social: { id, name, icon, url }
  } = props;

  return (
    <a href={url} className={`social-item-container ${id}`} onClick={_ => onClickEvent(name)} >
      <div className="icon-container">
        <i className={`icon fab ${icon}`} />
      </div>
      <span className="name">{name}</span>
    </a>
  );
};

export default SocialIcon;
