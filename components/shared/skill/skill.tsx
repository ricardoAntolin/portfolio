import * as React from "react";

import "./skill.scss";
import { SkillEnum } from "../../../constants";

interface IProps {
  skill: SkillEnum;
  size: string;
}

export interface ISkill {
  name: string;
  icon: string;
  showAsDefault?: boolean;
  faIcon?: string;
}

export const skillMap: Map<SkillEnum, ISkill>  = new Map<SkillEnum, ISkill> ([
  [SkillEnum.ios, { name: "iOS", icon: "apple" }],
  [SkillEnum.android, { name: "Android", icon: "android" }],
  [SkillEnum.swift, { name: "Swift", icon: "", faIcon: "code"  }],
  [SkillEnum.kotlin, { name: "Kotlin", icon: "", faIcon: "code"  }],
  [SkillEnum.java, { name: "Java", icon: "java" }],
  [SkillEnum.objectivec, { name: "Objective-C", icon: "", faIcon: "code"  }],
  [SkillEnum.ionic, { name: "Ionic", icon: "", faIcon: "code" }],
  [SkillEnum.node, { name: "Node", icon: "nodejs" }],
  [SkillEnum.git, { name: "Git", icon: "git" }],
  [SkillEnum.js, { name: 'JavaScript', icon: 'javascript'}],
  [SkillEnum.ts, { name: "TypeScript", icon: "typescript" }],
  [SkillEnum.react, { name: "React", icon: "react" }],
  [SkillEnum.redux, { name: "Redux", icon: "", faIcon: "code" }],
  [SkillEnum.angular2, { name: "Angular 2+", icon: "angularjs" }],
  [SkillEnum.webpack, { name: "Webpack", icon: "webpack" }],
  [SkillEnum.mongodb, { name: "Mongo DB", icon: "mongodb" }],
  [SkillEnum.html5, { name: 'HTML 5', icon: 'html5'}],
  [SkillEnum.css3, { name: 'CSS 3', icon: 'css3'}],
  [SkillEnum.sass, { name: 'Sass', icon: 'sass'}],
  [SkillEnum.nginx, { name: "Nginx", icon: "nginx" }],
  [SkillEnum.websockets, { name: "Websockets", icon: "", faIcon: "plug" }],
]);

const Skill: React.StatelessComponent<IProps> = props => {
  const { skill, size } = props; 

  const skillDetails = skillMap.get(skill);

  if (!skillDetails) {
    return null;
  }

  const { name, icon, faIcon } = skillDetails;

  return (
    <div className={`skill-container ${size}`}>
      <i className={'icon ' + (faIcon ? `fas fa-${faIcon}` : `devicon-${icon}-plain`)} />
      <span className="name">{name}</span>
    </div>
  );
};

export default Skill;
