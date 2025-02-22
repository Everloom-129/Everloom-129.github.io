export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Fall 2024 - Present",
    title: "Graduate Research Assistant",
    company: "University of Pennsylvania",
    description:
      "Building VLMs-based Manipulation System via Diffusion Policy for fine-grained tasks. Reproduced ReKep, SPHINX and pi0-FAST. ",
    advisor: "PhD Candidate Jason Ma & Prof. Dinesh Jayaraman",
    companyUrl: "https://www.seas.upenn.edu/~dineshj/pal/index.html/",
  },
  {
    date: "Summer 2024",
    title: "Multimodal MLE Intern",
    company: "IDEA-Computer Vision & Robotics Department",
    description:
      "Build, train and optimize a small human-centric video captioning model based on Grounding DINO 1.6Pro.",
    advisor: "Dr. Xiaoke Jiang & Prof. Lei Zhang",
    companyUrl: "https://www.idea.edu.cn/research/cvr.html",
  },
  {
    date: "Oct 2024 - Nov 2024",
    title: "RL-based High-Speed Drone Racing Project",
    company: "CIS5190: Applied Machine Learning @ UPenn",
    companyUrl: "https://www.seas.upenn.edu/~cis5190/fall2024/",
    description: "Reproduced drone racing simulation with curriculum tracks using OmniDrones on IsaacSim. Achieved 40.7% success rate and 28.6 km/h average speed using PPO-based reward function.",
    advisor: "Prof. Antonio Loquercio, Prof. Dinesh Jayaraman & Prof. Mingmin Zhao",
  },
  {
    date: "Spring 2024",
    title: "Team Leader & System Architect",
    company: "Intelligent Pour-Over Coffee Machine Project",
    description: "Led development of automated coffee machine with novel pour-over mechanism. Implemented FSM control system using Raspberry Pi 5B with focus on food-grade quality and safety.",
    advisor: "Prof. Said Mikki",
    companyUrl: "https://zjui.intl.zju.edu.cn/en",
  },
  {
    date: "Summer 2023",
    title: "Research Assistant",
    company: "International Design Institute of ZJU",
    companyUrl: "http://www.idi.zju.edu.cn/aboutidi",
    description: "Developed a LLMs-based framework for human-machine co-driving scenario. Submitted paper 'Visionary Co-Driver: LLMs Enhance Driver Risk Perception with ARHUD' as third author.",
    advisor: "Prof. Wei Xiang",
  },

];
