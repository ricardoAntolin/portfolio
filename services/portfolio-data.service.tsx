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
    "Passionate Mobile software engineer.",
    `I have solid background on mobile software development in both platforms (iOS and Android), 
    loved with scrum, best on product development environment, 
    experienced on startups and big projects`
  ];

  public static readonly experienceList: IInfoCard[] = [
    {
      logo: "cabify.png",
      headings: {
        primary: "Cabify",
        secondary: "Mobile software engineer",
        tertiary: "July 2019 - Present"
      },
      description:
        "Mobile engineer at MaaS spanish company, helping to assure best possible experiencience for users"
    },
    {
      logo: "wunder.png",
      headings: {
        primary: "Wunder",
        secondary: "Lead Mobile engineer",
        tertiary: "February 2018 - January 2020"
      },
      description:
        "Leading the creation of an awesome mobile app, that wants to make best version of its users"
    },
    {
      logo: "square1.png",
      headings: {
        primary: "Square1 Software",
        secondary: "Mobile software engineer",
        tertiary: "September 2018 - July 2019"
      },
      description:
        "Mobile engineer on agency, design company architecture of Android and iOS, develop mobile native apps on several projects"
    },
    {
      logo: "employer-logo.svg",
      headings: {
        primary: "Freelance",
        secondary: "Mobile software engineer",
        tertiary: "June 2012 - Present"
      },
      description:
        "Creating and maintaining native apps on both platforms"
    },
    {
      logo: "lynx-view.png",
      headings: {
        primary: "LynxView",
        secondary: "Mobile software engineer",
        tertiary: "March 2017 - Present"
      },
      description:
        "Mobile engineer on agency, from march 2017 to September 2018 creating medical transportation app, then collaborating in some projects"
    },
    {
      logo: "everis.png",
      headings: {
        primary: "everis",
        secondary: "Mobile software engineer",
        tertiary: "August 2015 - March 2017"
      },
      description:
        "Leading Mobile engineering on agency working on bank mobile and web apps",
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
      name: "Wunder",
      description: {
        overview:
          "Comunity app to help to make best version of people",
        detailed:
          "Comunity app to help to make best version of people"
      },
      img: "wunder.jpg",
      tagList: [SkillEnum.ios, SkillEnum.swift, SkillEnum.node],
      url: {
        github: "",
        website: "https://www.getwunder.com",
        itunes: "",
        playStore: ""
      },
      releaseDate: "In progress"
    },
    {
      id: 1,
      name: "Nike Storebook",
      description: {
        overview:
          "Private app for Nike stores staff",
        detailed:
          "Private app for Nike stores staff"
      },
      img: "nike.jpg",
      tagList: [SkillEnum.ios, SkillEnum.objectivec, SkillEnum.swift],
      url: {
        github: "",
        website: "",
        itunes: "",
        playStore: ""
      },
      releaseDate: "2016"
    },
    {
      id: 2,
      name: "SETS driver for ASV",
      description: {
        overview:
          "App for ambulance driver, to manage routes of non urgent medical tansportation",
        detailed:
          "App for ambulance driver, to manage routes of non urgent medical tansportation"
      },
      img: "asv.jpg",
      tagList: [SkillEnum.android, SkillEnum.kotlin, SkillEnum.java, SkillEnum.mongodb],
      url: {
        github: "",
        website: "https://www.tsayuda.com",
        itunes: "",
        playStore: ""
      },
      releaseDate: "2018"
    },
    {
      id: 3,
      name: "Riide",
      description: {
        overview:
          "White labeled app for taxis",
        detailed:
          "White labeled app for taxis"
      },
      img: "riide.jpg",
      tagList: [SkillEnum.ios, SkillEnum.android, SkillEnum.swift, SkillEnum.kotlin],
      url: {
        github: "",
        website: "https://riide.co/",
        itunes: "https://itunes.apple.com/us/app/riide/id1131008247",
        playStore: "https://play.google.com/store/apps/details?id=uk.riide"
      },
      releaseDate: "2019"
    }
  ];

  public static readonly skillList: SkillEnum[] = Array.from(skillMap.entries())
    .filter(([_, value]) => value.showAsDefault !== false)
    .map(([key, _]) => key);

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
