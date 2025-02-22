export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "RainyBird",
    description:
      "A tiny white noise mixer aimed at the soothing sounds of nature. 🌧️🔥🐦 ",
    technologies: ["Python", "DSP", "VLMs"],
    projectUrl: "https://github.com/Everloom-129/RainyBird",
    // imageUrl:
    //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://github.com/Everloom-129/RainyBird",
  },
  {
    title: "PhiloCoffee Club",
    description:
      "A student club exploring the crossroads of coffee and philosophy, finding insights through the shared experience of a delicious cup of coffee. ",
    technologies: ["Coffee", "Philosophy", "Technology"],
    projectUrl: "https://github.com/Everloom-129/RainyBird",
    imageUrl:
      "/images/Philocoffee_ICON.png",
    codeUrl: "https://github.com/orgs/PhiloCoffee/repositories",
  },
  
];
