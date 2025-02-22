export interface News {
  date: string;
  title: string;
  description: string;
  link?: string;
}

export const newsData: News[] = [
  {
    date: "July 2024",
    title: "Research at PAL Lab",
    description: "Started research at Penn Autonomous Learning (PAL) Lab under Prof. Dinesh Jayaraman",
    link: "https://www.seas.upenn.edu/~dineshj",
  },
  {
    date: "June 2024",
    title: "Research Internship at IDEA",
    description: "Started internship at IDEA: Computer Vision & Robotics Department",
    link: "https://www.idea.edu.cn/",
  },
  {
    date: "June 2024",
    title: "Dual Degree Graduation",
    description: "Graduated from ZJU and UIUC with dual degree of B.S. in CompE + B.Eng. in ECE",
  },
  // {
  //   date: "March 2024",
  //   title: "Undergraduate Senior Design Project",
  //   description: "Leading a four-man team in constructing an Intelligent Pour-Over Coffee Machine from scratch",
  //   link: "https://courses.grainger.illinois.edu/ece445zjui/projects.asp",
  // },
  // {
  //   date: "January 2024",
  //   title: "Oral Presentation at ICICT2024",
  //   description: "Completed an oral presentation on behalf of our team at ICICT2024",
  //   link: "https://9thinternationalcongressoni.sched.com/artist/jie_wang.26guiec1",
  // },
  {
    date: "January 2024",
    title: "Paper Accepted at ICICT2024",
    description: "Research paper accepted as Oral at ICICT2024 conference in London",
    link: "https://icict.co.uk/",
  },
  // {
  //   date: "January 2024",
  //   title: "Teaching Assistant Position",
  //   description: "Became Teaching Assistant for PHIL 206: Early Modern Philosophy at ZJU-UIUC Institute",
  // },
  // // {
  // //   date: "December 2023",
  // //   title: "PhiloCoffee Club Verification",
  // //   description: "PhiloCoffee Club officially verified as formal club in ZJU International Campus",
  // //   link: "https://philocoffee.github.io/",
  // // },
  // {
  //   date: "December 2023",
  //   title: "Outstanding Research Internship Award",
  //   description: "Received Outstanding Awards for summer research internship at ZJU-UIUC Institute",
  // },
  // {
  //   date: "September 2023",
  //   title: "Head Teaching Assistant Position",
  //   description: "Became Head Teaching Assistant for MATH 213: Introduction to Discrete Math at ZJU-UIUC Institute",
  // },
  {
    date: "August 2023",
    title: "PhiloCoffee Club Launch",
    description: "Launched PhiloCoffee Club as club founding president",
    link: "https://philocoffee.github.io/",
  },
];