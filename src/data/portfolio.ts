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
    title: "2025: Course Blogs of CIS7000: Real-World Robot Learning ",
    description: 
      "A comprehensive collection of paper reading notes and algorithm reproductions for ESE6800/CIS7000 at UPenn. " +
      "Learning from Prof. Antonio Loquercio and Prof. Dinesh Jayaraman on cutting-edge robotics research. 🤖📚",
    technologies: ["Robotics", "Machine Learning", "Research Seminar"],
    projectUrl: "https://everloom-129.github.io/CIS700-Real-World-Robot-Learning/",
    imageUrl: "/images/cis700-data.png",
    codeUrl: "https://github.com/Everloom-129/CIS700-Real-World-Robot-Learning",
  },
  {
    title: "2025: RainyBird",
    description:
      "A tiny white noise mixer aimed at the soothing sounds of nature. 🌧️🔥🐦 ",
    technologies: ["Python", "DSP", "VLMs"],
    projectUrl: "https://github.com/Everloom-129/RainyBird",
    imageUrl: "/images/rainybird.jpg",
    
    //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    codeUrl: "https://github.com/Everloom-129/RainyBird",
  },
  {
    title: "2024: CIS5190 RL-based High-Speed Drone Racing",
    description: 
      "Advisor: Prof. Antonio Loquercio" + 
      "Built a drone racing simulation with curriculum tracks (ellipse, split-S, UZH) using OmniDrones on IsaacSim & IssacLab. " +
      "Designed a PPO-based reward function, achieving 40.7% success rate and 7.94 m/s average speed on a 127m track. " +
      "Trained 150M frames across 250 parallel environments in 8 hours on 2 x NVIDIA A6000 GPUs. " +
      "Explored domain randomization and trajectory-based methods for robustness.",
    technologies: ["RL", "IsaacSim", "Drone"],
    projectUrl: "https://www.seas.upenn.edu/~cis5190/fall2024/",
    imageUrl: "/images/drone-racing.png", 
    codeUrl: "https://github.com/Everloom-129/OmniDrones-1121",
  },

  {
    title: "2024: PhiloCoffee Club",
    description:
      "A student club exploring the crossroads of coffee and philosophy, finding insights through the shared experience of a delicious cup of coffee. ",
    technologies: ["Coffee", "Philosophy", "Technology"],
    projectUrl: "https://github.com/Everloom-129/RainyBird",
    imageUrl:
      "/images/Philocoffee_Vision.jpg",
    codeUrl: "https://github.com/orgs/PhiloCoffee/repositories",
  },

  
  {
    title: "2023: CS438 Wireless Network Analysis Tool",
    description: 
      "A Python-based analytical tool for comprehensive wireless network analysis, featuring signal strength heatmaps and roaming mechanisms analysis. " +
      "Developed in collaboration with UIUC IT Network team to study campus Wi-Fi infrastructure. 📡",
    technologies: ["Python", "UIUC Network Analysis"],
    projectUrl: "https://github.com/Everloom-129/CS438_Communication_Networks_Hub/tree/main/mini_project",
    imageUrl: "/images/CS438_heatmap_F1.png",   
    codeUrl: "https://github.com/Everloom-129/CS438_Communication_Networks_Hub",
  },
  
  {
    title: "2023: Shell Eco-marathon Autonomous Programming Competition",
    description: 
      "Developed autonomous driving modules using ROS and tested in CARLA simulator with Unreal 4 Engine. Focused on efficient path planning for Shell Eco-marathon competition. 🚗",
    technologies: ["ROS", "CARLA", "Python", "Autonomous Driving"],
    projectUrl: "https://www.shellecomarathon.com/about/previous-seasons/2023-programme-on-track/autonomous-programming-competition.html",
    imageUrl: "/images/carla_challenge_2020.jpg",
  },

  {
    title: "2022: ECE391: MentOS - Multi-terminal Operating System",
    description: 
      "Developed a Linux-like OS kernel using C and x86, implementing core features like paging virtual memory, IDT, GDT, and i8259-based interrupt controller. " +
      "Created device drivers for RTC, keyboard, PIT and a read-only file system. Established system call linkage between user and kernel space, " +
      "with support for single CPU task scheduling and multiple terminal switching. ⚙️",
    technologies: ["C", "x86 Assembly", "Operating Systems"],
    projectUrl: "https://github.com/Everloom-129/ECE391-Operating-System",
    // imageUrl: "/images/mentos.png",
    codeUrl: "https://github.com/Everloom-129/ECE391-Operating-System"
  },

  {
    title: "2021: RoboMaster University Robotics Competition",
    description: 
      "Assisted in developing and optimizing vision algorithms for object detection via YOLOv4, contributing to auto-aiming and shooting system for real-time target engagement, improving hit accuracy by 20%. " +
      "Supported the integration of vision systems on Jetson Nano with embedded platforms on DJI manifold2, achieving a 30 FPS during live competition on the industrial camera. 🤖",
    technologies: ["Python", "PyTorch", "C/C++", "Computer Vision"],
    projectUrl: "https://github.com/Meta-Team",
    imageUrl: "/images/meta-robotics.png",
  },

  {
    title: "2021: Simulation and Modeling of Unmanned Vehicle Safety Test for Baidu Apollo D-kit",
    description: 
      "Assembled Lidar, Radar and Camera modules for Baidu Apollo D-kit Self-driving Test Vehicle. " +
      "Constructed high- solution Lidar maps across ZJU international campus. " + 
      "Improved perception module for traffic state estimation based on collected data and literature review. 🚗",
    technologies: ["ROS", "Cyber RT", "C++"],
    projectUrl: "https://github.com/ApolloAuto/apollo",
    imageUrl: "/images/SRTP照片被用作学校海报.png",
  },

];
