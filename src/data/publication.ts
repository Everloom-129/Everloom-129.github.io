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
  featured?: boolean;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2026",
    conference: "Under Review",
    title: "TiPToP: A Modular Planning-Based Robot Manipulation System",
    authors: "William Shen, Nishanth Kumar, Sahit Chintalapudi, Jie Wang, Christopher Watson, Edward S. Hu, Jing Cao, Dinesh Jayaraman, Leslie Pack Kaelbling, Tomás Lozano-Pérez",
    paperUrl: "https://tiptop.fly.dev/",
    codeUrl: "https://github.com/tiptop-robot/tiptop",
    tldr: "We propose a planning-based robotics system that solves complex real-world manipulation tasks directly from raw pixels and natural-language commands. Validated 'in-the-wild' at GRASP Lab.",
    keywords: ["TAMP", "VLAs", "Evaluation"],
    imageUrl: "/images/2026/tiptop-teaser.png",
  },

  {
    year: "2026",
    conference: "Under Review",
    title: "OmniGuide: Universal Guidance Fields for Enhancing Generalist Robot Policies",
    authors: "Yunzhou Song*, Long Le*, Yong-Hyun Park, Jie Wang, Junyao Shi, Lingjie Liu, Jiatao Gu, Eric Eaton, Dinesh Jayaraman, Kostas Daniilidis",
    paperUrl: "https://omniguide.github.io/",
    codeUrl: "https://omniguide.github.io/",
    tldr: "We propose a a flexible framework that improves VLA performance on Spatial Reasoning tasks by leveraging prior knowledge from 3D foundation models, semantic-reasoning VLMs, and human trajectory.",
    keywords: ["Guidance", "3D", "VLAs", "Spatial Reasoning"],
    imageUrl: "/images/2026/guided_pi_teaser.png",
  },
  
  {
    year: "2026",
    conference: "NeurIPS 2025 & ARLET Workshop",
    title: "AAWR: Real World Reinforcement Learning of Active Perception Behaviors",
    authors: "Edward S. Hu*, Jie Wang*, Xingfang Yuan*, Fiona Luo, Muyao Li, Gaspard Lambrechts, Oleh Rybkin, Dinesh Jayaraman",
    paperUrl: "https://penn-pal-lab.github.io/aawr/",
    codeUrl: "https://github.com/penn-pal-lab/aawr",
    tldr: "We propose a simple robot learning recipe leveraging privileged information to train active perception policies on real robots.",
    keywords: ["RL", "Active Perception", "VLAs"],
    imageUrl: "/images/2025/AAWR_method.png",
    featured: true,
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
    conference: "GRASP Blog 2025",
    title: "Evaluating pi0 in the Wild: Strengths, Problems, and the Future of Generalist Robot Policies",
    authors: "Jie Wang*, Matthew Leonard, Kostas Daniilidis, Dinesh Jayaraman, Edward S. Hu",
    paperUrl: "https://penn-pal-lab.github.io/Pi0-Experiment-in-the-Wild/",
    poster: "/files/Pi0-Experiment-in-the-Wild-Poster-v1.pdf",
    tldr: "We vibe-check pi0 across 300 trials on various manipulation tasks, summarize the insights and our observations in this blog.",
    keywords: ["VLAs", "Real-World Evaluation"],
    imageUrl: "/images/pi0blog_bar_chart.png",
    featured: true,
  },
  {
    year: "2025",
    conference: "ICRA",
    title: "ZeroMimic: Distilling Robotic Manipulation Skills from Web Videos",
    authors: "Junyao Shi, Zhuolun Zhao, Tianyou Wang, Ian Pedroza, Amy Luo, Jie Wang, Jason Ma, Dinesh Jayaraman",
    paperUrl: "https://zeromimic.github.io/",
    codeUrl: "https://github.com/junyaoshi/ZeroMimic",
    tldr: "Learning robotic manipulation skills from web videos with zero-shot generalization.",
    keywords: ["Learning from Videos", "Articulation", "Imitation Learning"],
    imageUrl: "/images/ZeroMimic_concept_v3.png",
  },
  {
    year: "2025",
    conference: "IEEE Transactions on Intelligent Transportation Systems",
    title: "Visionary Co-Driver: LLMs Enhance Driver Risk Perception with ARHUD",
    authors: "Xiang Wei, Ziyue Lei, Jie Wang, Qi Zheng, Yingying Huang, Tianyi Zhang, Lingyun Sun",
    paperUrl: "/files/Visionary-CoDriver-Poster.jpg",
    tldr: "Using LLMs and Vision foundation models to analyze autonomous driving road scene, modeling the behavior of pedestrians. Construct a HUD system to evaluate the driver interaction.",
    codeUrl: "https://github.com/Everloom-129/Visionary-CoDriver",
    keywords: ["Autonomous Driving", "LLMs", "Human-Computer Interaction"],
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
