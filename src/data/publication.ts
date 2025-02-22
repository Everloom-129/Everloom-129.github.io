export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
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
    // if you have an image in public/images, you can use it like this:
    imageUrl: "/images/icict2024.png"
  },
  {
    year: "2023",
    conference: "Arkiv",
    title: "Visionary Co-Driver: LLMs Enhance Driver Risk Perception with ARHUD",
    authors: "Xiang Wei, Ziyue Lei, Jie Wang, Qi Zheng, Yingying Huang",
    paperUrl: "/files/31_结合大规模语言模型的智能汽车安全预警_海报.jpg",
    tldr: "Using LLMs to analyze autonomous driving road scene, modeling the behavior of pedestrians.",
    codeUrl: "https://github.com/Everloom-129/Visionary-CoDriver",
    imageUrl: "/images/chi2024 system design.png"
  },
];
