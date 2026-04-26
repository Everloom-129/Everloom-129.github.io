export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  // {
  //   title: "2025: RainyBird",
  //   description:
  //     "A tiny white noise mixer aimed at the soothing sounds of nature. 🌧️🔥🐦 ",
  //   technologies: ["Python", "DSP", "VLMs"],
  //   projectUrl: "https://github.com/Everloom-129/RainyBird",
  //   imageUrl: "/images/rainybird.jpg",
    
  //   //   "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   codeUrl: "https://github.com/Everloom-129/RainyBird",
  // },
  {
    title: "2024: High-Speed Drone Racing via Deep Reinforcement Learning",
    description:
      "Advisor: Prof. Antonio Loquercio. " +
      "Built a drone racing simulation with curriculum tracks (ellipse, split-S, UZH) using OmniDrones on IsaacSim & IsaacLab. " +
      "Designed a PPO-based reward shaping scheme, achieving a 40.7% success rate and 7.94 m/s average speed on a 127 m track. " +
      "Trained 150M frames across 250 parallel environments in 8 hours on 2× NVIDIA A6000 GPUs. ",
    technologies: ["RL", "IsaacSim", "Drone"],
    projectUrl: "https://www.seas.upenn.edu/~cis5190/fall2024/",
    imageUrl: "/images/drone-racing.png", 
    codeUrl: "https://github.com/Everloom-129/OmniDrones-1121",
  },

  {
    title: "2024: PhiloCoffee Club",
    description:
      "A student club at ZJU International Campus exploring the intersection of coffee culture and philosophy — building community through conversation and a shared cup.",
    technologies: ["Coffee", "Philosophy", "Technology"],
    projectUrl: "https://philocoffee.github.io/",
    imageUrl:
      "/images/Philocoffee_Vision.jpg",
    codeUrl: "https://github.com/orgs/PhiloCoffee/repositories",
  },

  
  {
    title: "2023: Campus Wi-Fi Network Analysis Tool",
    description:
      "A Python toolkit for wireless network analysis, featuring signal-strength heatmap visualization and roaming mechanism profiling. " +
      "Built in collaboration with the UIUC IT Network team to characterize and improve campus Wi-Fi infrastructure.",
    technologies: ["Python", "UIUC Network Analysis"],
    projectUrl: "https://github.com/Everloom-129/CS438_Communication_Networks_Hub/tree/main/mini_project",
    imageUrl: "/images/CS438_heatmap_F1.png",   
    codeUrl: "https://github.com/Everloom-129/CS438_Communication_Networks_Hub",
  },
  
  {
    title: "2023: Energy-Efficient Autonomous Driving for Shell Eco-marathon",
    description:
      "Developed autonomous driving modules in ROS and validated them in CARLA (Unreal Engine 4). Focused on energy-efficient path planning algorithms tailored for the Shell Eco-marathon competition constraints.",
    technologies: ["ROS", "CARLA", "Python", "Autonomous Driving"],
    projectUrl: "https://www.shellecomarathon.com/about/previous-seasons/2023-programme-on-track/autonomous-programming-competition.html",
    imageUrl: "/images/carla_challenge_2020.jpg",
  },

  {
    title: "2022: MentOS — Multi-terminal OS Kernel",
    description:
      "Implemented a Linux-like OS kernel in C and x86 assembly, covering paging and virtual memory, IDT/GDT setup, and an i8259-based interrupt controller. " +
      "Wrote device drivers for RTC, keyboard, and PIT, plus a read-only filesystem. " +
      "Established full user/kernel system call linkage with preemptive task scheduling and multi-terminal switching.",
    technologies: ["C", "x86 Assembly", "Operating Systems"],
    projectUrl: "https://github.com/Everloom-129/ECE391-Operating-System",
    // imageUrl: "/images/mentos.png",
    codeUrl: "https://github.com/Everloom-129/ECE391-Operating-System"
  },

  // {
  //   title: "2021: RoboMaster — Real-Time Vision System for Competitive Robotics",
  //   description:
  //     "Developed and optimized YOLOv4-based vision algorithms for real-time object detection, powering the auto-aiming system and improving hit accuracy by 20%. " +
  //     "Integrated the vision pipeline on Jetson Nano with the DJI Manifold 2 embedded platform, sustaining 30 FPS on an industrial camera during live competition.",
  //   technologies: ["Python", "PyTorch", "C/C++", "Computer Vision"],
  //   projectUrl: "https://github.com/Meta-Team",
  //   imageUrl: "/images/meta-robotics.png",
  // },

  {
    title: "2021: Autonomous Sensor Stack for Baidu Apollo D-kit",
    description:
      "Assembled LiDAR, radar, and camera sensor stacks on a Baidu Apollo D-kit autonomous test vehicle. " +
      "Constructed high-resolution LiDAR maps across the ZJU International Campus. ",
    technologies: ["ROS", "Cyber RT", "C++"],
    projectUrl: "https://github.com/ApolloAuto/apollo",
    imageUrl: "/images/SRTP照片被用作学校海报.png",
  },

];
