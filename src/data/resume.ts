export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  url?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export const personalInfo = {
  firstName: "Ricardo",
  lastName: "Antolin",
  title: "Software Engineer",
  tagline:
    "18+ years of experience across engineering, product and leadership. From mobile to backend to managing teams — always building things that matter.",
  email: "hello@ricardoantolin.dev",
};

export const about = [
  "Software engineer with a broad trajectory — from native mobile development to backend systems in Go and Elixir, to leading engineering teams. I care deeply about product quality, clean architecture, and empowering the people I work with.",
  "Currently at Barkibu, building the tech behind pet health insurance. Previously at Cabify, where I grew from mobile engineer to engineering manager for the Logistics division, shipping a delivery service from scratch.",
];

export const experience: Experience[] = [
  {
    company: "Barkibu",
    role: "Software Engineer",
    period: "May 2025 — Present",
    description:
      "Helping pet parents give their pets the best healthcare possible. Building the systems that connect pet families with the care they need.",
  },
  {
    company: "Cabify",
    role: "Engineering Manager — Logistics",
    period: "Jan 2023 — May 2025",
    description:
      "Managed the engineering team for Cabify's logistics division. Focused on team growth, delivery processes, and scaling the platform.",
  },
  {
    company: "Cabify",
    role: "Software Engineer — Logistics",
    period: "Jul 2021 — Jan 2023",
    description:
      "Created a new delivery service from scratch using the ride-hailing platform.",
  },
  {
    company: "Cabify",
    role: "Mobile Engineer",
    period: "Jul 2019 — Jul 2021",
    description:
      "Worked on the rider experience across both platforms, improving reliability and user satisfaction.",
  },
  {
    company: "Wunder",
    role: "Lead iOS Engineer",
    period: "Feb 2018 — Jan 2020",
    description:
      "Led iOS development for a community app focused on personal growth. Based in Atlanta, US.",
  },
  {
    company: "Square1 Software",
    role: "Mobile Engineer",
    period: "Sep 2018 — Jun 2019",
    description:
      "Designed company-wide mobile architecture for Android and iOS. Delivered native apps across multiple client projects.",
  },
  {
    company: "Lynx View",
    role: "Senior Mobile Developer",
    period: "Mar 2017 — Sep 2018",
    description:
      "Built a non-emergency medical transportation app for the Valencian community ambulance network.",
  },
  {
    company: "everis",
    role: "Software Engineer & Mobile Team Lead",
    period: "Aug 2015 — Mar 2017",
    description:
      "Led the iOS and Android team. Also worked as full-stack engineer on banking projects with AngularJS and Java microservices.",
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Go", icon: "devicon-go-original-wordmark" },
      { name: "Elixir", icon: "devicon-elixir-plain" },
      { name: "Kotlin", icon: "devicon-kotlin-plain" },
      { name: "Swift", icon: "devicon-swift-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "Ruby", icon: "devicon-ruby-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Java", icon: "devicon-java-plain" },
    ],
  },
  {
    name: "Mobile",
    skills: [
      { name: "iOS", icon: "devicon-apple-original" },
      { name: "Android", icon: "devicon-android-plain" },
      { name: "Flutter", icon: "devicon-flutter-plain" },
    ],
  },
  {
    name: "Backend & Frameworks",
    skills: [
      { name: "Rails", icon: "devicon-rails-plain" },
      { name: "Spring", icon: "devicon-spring-original" },
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "React", icon: "devicon-react-original" },
    ],
  },
  {
    name: "Data & Infrastructure",
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "MongoDB", icon: "devicon-mongodb-plain" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
      { name: "AWS", icon: "devicon-amazonwebservices-original-wordmark" },
      { name: "Firebase", icon: "devicon-firebase-plain" },
      { name: "Git", icon: "devicon-git-plain" },
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Barkibu",
    description: 
      "Making pet healthcare accessible and affordable. A full-stack insurance platform — from the app in your pocket to the payment at the vet.",
    tags: ["Ruby on Rails", "Kotlin", "Python", "Flutter"],
  },
  {name: "Cabify Logistics", description: "Built a new delivery service from scratch on top of Cabify's ride-hailing platform. From architecture to production.", tags: ["Go", "Elixir", "Android"]},
  {
    name: "Cabify Rider",
    description:
      "Improved the rider experience across iOS and Android, focusing on reliability and usability at scale.",
    tags: ["iOS", "Android"],
  },
  {
    name: "Wunder",
    description:
      "Community app for personal growth. Led the iOS development from early stages to launch.",
    tags: ["iOS", "Node.js"],
  },
  {
    name: "Medical Transport (ASV)",
    description:
      "Route management app for ambulance drivers handling non-urgent medical transportation in Valencia.",
    tags: ["Android", "Kotlin", "Java"],
  },
  {
    name: "Nike Storebook",
    description:
      "Internal social network for Nike store managers and staff. Native iOS app.",
    tags: ["iOS"],
  },
  {
    name: "Banking Apps (everis)",
    description:
      "Worked on mobile and web apps for Banc Sabadell and TSB, including AngularJS + Java microservices.",
    tags: ["iOS", "Android", "AngularJS", "Java"],
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ricardo-antolin-serrano/",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "GitHub",
    url: "https://github.com/ricardoAntolin",
    icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
];
