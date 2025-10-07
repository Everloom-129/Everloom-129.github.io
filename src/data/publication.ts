export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  poster?: string;
  bibtex?: string;
  tldr?: string;
  keywords?: string[];
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "NeurIPS",
    title: "AAWR: Real-World Reinforcement Learning of Interactive Perception Behaviors",
    authors: "Edward S. Hu*, Jie Wang*, Xingfang Yuan*, Fiona Luo, Muyao Li, Gaspard Lambrechts, Oleh Rybkin, Dinesh Jayaraman",
    paperUrl: "",
    codeUrl: "https://sites.google.com/view/rwrl-ap/home",
    tldr: "We propose a new RL algorithm using privileged information to train active perception policy for pi0.",
    keywords: ["RL", "VLAs", "Active Perception"],
    imageUrl: "/images/AAWR_method.png",
  },
  {
    year: "2025",
    conference: "CoRL",
    title: "RoboArena: Distributed Real-World Evaluation of Generalist Robot Policies",
    authors: "RoboArena Team",
    paperUrl: "https://arxiv.org/abs/2506.18123",
    codeUrl: "https://robo-arena.github.io/",
    tldr: "A distributed real-world evaluation framework for generalist robot policies.",
    keywords: ["VLAs", "Real-World Evaluation"],
    award: "🏆 Oral Presentation",
    imageUrl: "/images/roboarena_method.jpeg",
  },
  {
    year: "2025",
    conference: "Blog",
    title: "Evaluating pi0 in the Wild: Strengths, Problems, and the Future of Generalist Robot Policies",
    authors: "Jie Wang*, Matthew Leonard, Kostas Daniilidis, Dinesh Jayaraman, Edward S. Hu",
    paperUrl: "https://penn-pal-lab.github.io/Pi0-Experiment-in-the-Wild/",
    poster: "/files/Pi0-Experiment-in-the-Wild-Poster-v1.pdf",
    tldr: "We vibe-check pi0 across 300 trials on various manipulation tasks, summarize the insights and our observations in this blog.",
    keywords: ["VLAs", "Real-World Evaluation"],
    imageUrl: "/images/pi0blog_bar_chart.png",
  },
  {
    year: "2025",
    conference: "ICRA",
    title: "ZeroMimic: Distilling Robotic Manipulation Skills from Web Videos",
    authors: "Junyao Shi, Zhuolun Zhao, Tianyou Wang, Ian Pedroza, Amy Luo, Jie Wang, Jason Ma, Dinesh Jayaraman",
    paperUrl: "https://zeromimic.github.io/",
    codeUrl: "https://github.com/junyaoshi/ZeroMimic",
    tldr: "Learning robotic manipulation skills from web videos with zero-shot generalization.",
    keywords: ["Learning from Videos", "Articulation Tasks", "Imitation Learning"],
    imageUrl: "/images/ZeroMimic_concept_v3.png",
  },
  {
    year: "2025",
    conference: "Arxiv",
    //"IEEE Transactions on Intelligent Transportation Systems",
    title: "Visionary Co-Driver: LLMs Enhance Driver Risk Perception with ARHUD",
    authors: "Xiang Wei, Ziyue Lei, Jie Wang, Qi Zheng, Yingying Huang, Tianyi Zhang, Lingyun Sun",
    paperUrl: "/files/Visionary-CoDriver-Poster.jpg",
    tldr: "Using LLMs and Vision foundation models to analyze autonomous driving road scene, modeling the behavior of pedestrians. Construct a HUD system to evaluate the driver interaction.",
    codeUrl: "https://github.com/Everloom-129/Visionary-CoDriver",
    keywords: ["Autonomous Driving", "LLMs", "Human-Machine Interaction"],
    imageUrl: "/images/vcd_system_design.png"
  },
  {
    year: "2024",
    conference: "ICICT",
    title: "Real-time V2V Communication Network Cooperative Control System through Distributed Database,",
    authors: "Xinwen Zhu, Zihao Li, Yuxuan Jiang, Jiazhen Xu, Jie Wang, and Xuyang Ba",
    paperUrl: "https://arxiv.org/abs/2410.17576",
    codeUrl: "https://github.com/Essoz/Distributed-Intersection-Traffic-Coordination-With-Lease",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Using distributed databases for collision avoidance, verified on Quanser Car at crossroad scenario.",
    award: "🏆 Oral Presentation",
    keywords: ["Autonomous Driving", "Distributed Control", "Wireless Network"],
    // if you have an image in public/images, you can use it like this:
    imageUrl: "/images/icict2024.png"
  },

  // {
  //   year: "2022",
  //   conference: "Patent",
  //   title: "终端机和一体机: A Thin Client and All-in-One Computer Design",
  //   authors: "Wang, Xiang, Wang, Jie",
  //   paperUrl: "https://patents.google.com/patent/CN216852698U/",
  //   tldr: "China Patent No. CN 216852698 U. Issued: June 28, 2022. Shenzhen Weidi Cloud Technology Co., LTD.",
  // },

];
