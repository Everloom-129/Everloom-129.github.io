export interface Experience {
  date: string;
  title: string;
  company: string;
  logo?: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Fall 2025 – Present",
    title: "Graduate Research Assistant",
    company: "Daniilidis Research Group, GRASP Lab",
    description:
      "Improving spatial reasoning of generalist robot policies (π0, OpenVLA) via guidance fields and reinforcement learning.",
    advisor: "Prof. Kostas Daniilidis",
    logo: "/images/upenn_grasplab_logo.png",
    companyUrl: "https://www.cis.upenn.edu/~kostas/",
  },
  {
    date: "Summer 2025",
    title: "Research Intern",
    company: "Dyna Robotics",
    companyUrl: "https://www.dyna.co/",
    description: "Building an agentic reasoning VLA for fine-grained manipulation, with persistent memory for long-horizon task execution.",
    logo: "/images/dyna_logo.png",
    advisor: "Dr. Jason Ma & York Yang",
  },

  {
    date: "Fall 2024 – Present",
    title: "Graduate Research Assistant",
    company: "PennPAL Research Group, GRASP Lab",
    description:
      "Building VLM-based manipulation systems using diffusion policies for fine-grained tasks. Reproduced and benchmarked ReKep, SPHINX, and π0.",
    advisor: "Prof. Dinesh Jayaraman",
    logo: "/images/PennPAL_logo.webp",
    companyUrl: "https://www.seas.upenn.edu/~dineshj/pal/index.html/",
  },
  {
    date: "Summer 2024",
    title: "Multimodal MLE Intern",
    company: "IDEA-Computer Vision & Robotics Department",
    description:
      "Built, trained, and optimized a human-centric video captioning model grounded in Grounding DINO 1.6 Pro for multimodal understanding.",
    advisor: "Dr. Xiaoke Jiang & Prof. Lei Zhang",
    companyUrl: "https://www.idea.edu.cn/research/cvr.html",
    logo: "/images/IDEA_logo.png",
  },

  // {
  //   date: "Spring 2024",
  //   title: "Team Leader & System Architect",
  //   company: "Intelligent Pour-Over Coffee Machine Project",
  //   description: "Led development of automated coffee machine with novel pour-over mechanism. Implemented FSM control system using Raspberry Pi 5B with focus on food-grade quality and safety.",
  //   advisor: "Prof. Said Mikki",
  //   companyUrl: "https://zjui.intl.zju.edu.cn/en",
  // },
  // {
  //   date: "Summer 2023",
  //   title: "Research Assistant",
  //   company: "International Design Institute of ZJU",
  //   companyUrl: "http://www.idi.zju.edu.cn/aboutidi",
  //   description: "Developed a LLMs-based framework for human-machine co-driving scenario. Submitted paper 'Visionary Co-Driver: LLMs Enhance Driver Risk Perception with ARHUD' as third author.",
  //   advisor: "Prof. Wei Xiang",
  // },

];
