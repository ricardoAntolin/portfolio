import { IUserDetails } from "../components/sections/landing/landing";
import { IInfoCard } from "../components/shared/info-card/info-card";
import { SkillEnum } from "../constants";
import { IProject } from "../components/shared/project/project";
import { skillMap } from "../components/shared/skill/skill";
import { ISocialIcon } from "../components/shared/social/social";

export default class PortfolioDataService {
  public static readonly userDetails: IUserDetails = {
    firstName: "Ricardo",
    lastName: "Antolin",
    title: "Mobile Software Engineer"
  };

  public static readonly aboutTextList: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna.",
    `Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus.
		Fusce eget efficitur libero. 
		Morbi dapibus porta quam laoreet placerat. 
		Donec eu vehicula neque. Donec viverra lorem nunc, tempus euismod eros sollicitudin ut. 
		Quisque et tincidunt libero. Donec id pharetra justo.`,
    `Proin euismod lacinia dolor, eu scelerisque justo tempus pharetra. 
		Vivamus nunc justo, finibus ut nisl sed, euismod rhoncus nulla. 
		Proin sed magna egestas, egestas ante et, congue eros. 
		In consequat, mauris dapibus tincidunt suscipit, ex libero aliquet diam, at maximus risus enim non leo.`
  ];

  public static readonly experienceList: IInfoCard[] = [
    {
      logo: "square1.png",
      headings: {
        primary: "Square1 Software",
        secondary: "Mobile software engineer",
        tertiary: "September 2018 - Present"
      },
      description:
        "Mobile engineer on agency, design company architecture of Android and iOS, develop mobile native apps on several projects"
    },
    {
      logo: "wunder.png",
      headings: {
        primary: "Wunder",
        secondary: "Lead Mobile engineer",
        tertiary: "February 2018 - Present"
      },
      description:
        "Leading the creation from scratch of an awesome mobile app"
    },
    {
      logo: "employer-logo.svg",
      headings: {
        primary: "Freelance",
        secondary: "Mobile senior engineer",
        tertiary: "June 2012 - Present"
      },
      description:
        "Creating and maintaining native apps on both platforms",
      isLast: true
    }
  ];

  public static readonly educationList: IInfoCard[] = [
    {
      logo: "education-logo.svg",
      headings: {
        primary: "Education Institution",
        secondary: "Education Type",
        tertiary: "2013 - 2016"
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat."
    },
    {
      logo: "education-logo.svg",
      headings: {
        primary: "Education Institution",
        secondary: "Education Type",
        tertiary: "2007 - 2012"
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat.",
      isLast: true
    }
  ];

  public static readonly projectList: IProject[] = [
    {
      id: 0,
      name: "Project Name",
      description: {
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex.",
        detailed:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      img: "portfolio.jpg",
      tagList: [SkillEnum.ts, SkillEnum.react, SkillEnum.html5, SkillEnum.css3],
      url: {
        github: "https://github.com/HarveyD/seng-portfolio",
        website: "https://www.harveydelaney.com/seng-portfolio",
        itunes: "",
        playStore: ""
      },
      releaseDate: "13th Oct 2018"
    },
    {
      id: 1,
      name: "Project Name",
      description: {
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex.",
        detailed:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      img: "portfolio.jpg",
      tagList: [SkillEnum.ts, SkillEnum.react, SkillEnum.html5, SkillEnum.css3],
      url: {
        github: "https://github.com/HarveyD/seng-portfolio",
        website: "https://www.harveydelaney.com/seng-portfolio",
        itunes: "",
        playStore: ""
      },
      releaseDate: "13th Oct 2018"
    },
    {
      id: 2,
      name: "Project Name",
      description: {
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex.",
        detailed:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      img: "portfolio.jpg",
      tagList: [SkillEnum.ts, SkillEnum.react, SkillEnum.html5, SkillEnum.css3],
      url: {
        github: "https://github.com/HarveyD/seng-portfolio",
        website: "https://www.harveydelaney.com/seng-portfolio",
        itunes: "",
        playStore: ""
      },
      releaseDate: "13th Oct 2018"
    },
    {
      id: 3,
      name: "Project Name",
      description: {
        overview:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex.",
        detailed:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      img: "portfolio.jpg",
      tagList: [SkillEnum.ts, SkillEnum.react, SkillEnum.html5, SkillEnum.css3],
      url: {
        github: "https://github.com/HarveyD/seng-portfolio",
        website: "https://www.harveydelaney.com/seng-portfolio",
        itunes: "",
        playStore: ""
      },
      releaseDate: "13th Oct 2018"
    }
  ];

  public static readonly skillList: SkillEnum[] = Array.from(skillMap.entries())
    .filter(([key, value]) => value.showAsDefault !== false)
    .map(([key, value]) => key);

  public static readonly socialIconList: ISocialIcon[] = [
    {
      id: "ln",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ricardo-antolin-serrano/",
      icon: "fa-linkedin"
    },
    {
      id: "gh",
      name: "GitHub",
      url: "https://github.com/ricardoAntolin",
      icon: "fa-github"
    }
  ];
}
