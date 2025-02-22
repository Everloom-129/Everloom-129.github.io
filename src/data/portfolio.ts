export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Real-World Robot Learning Course Blogs",
    description: 
      "A comprehensive collection of paper reading notes and algorithm reproductions for ESE6800/CIS7000 at UPenn. " +
      "Learning from Prof. Antonio Loquercio and Prof. Dinesh Jayaraman on cutting-edge robotics research. 🤖📚",
    technologies: ["Robotics", "Machine Learning", "Research Seminar"],
    projectUrl: "https://everloom-129.github.io/CIS700-Real-World-Robot-Learning/",
    imageUrl: "/images/cis700-data.png",
    codeUrl: "https://github.com/Everloom-129/CIS700-Real-World-Robot-Learning",
  },
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
      "/images/Philocoffee_Vision.jpg",
    codeUrl: "https://github.com/orgs/PhiloCoffee/repositories",
  },

  
  {
    title: "Wireless Network Analysis Tool",
    description: 
      "A Python-based analytical tool for comprehensive wireless network analysis, featuring signal strength heatmaps and roaming mechanisms analysis. " +
      "Developed in collaboration with UIUC IT Network team to study campus Wi-Fi infrastructure. 📡",
    technologies: ["Python", "UIUC Network Analysis"],
    projectUrl: "https://github.com/Everloom-129/CS438_Communication_Networks_Hub/tree/main/mini_project",
    imageUrl: "/images/CS438_heatmap_F1.png",   
    codeUrl: "https://github.com/Everloom-129/CS438_Communication_Networks_Hub",
  },

];
