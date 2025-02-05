export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Jie Wang",
  title: "Master Student",
  institution: "University of Pennsylvania",
  // Note that links work in the description
  description:
    "I'm Tony, a <a href='https://www.grasp.upenn.edu/'>MS Robotics student</a> working at the intersection of Vision Language Models and Robot Learning. My research focuses on developing long-horizon manipulation systems that can reason and work in complex environments. ",
    
  email: "tonyw3@seas.upenn.edu",
  imageUrl:
    "resources/me_fries_high.jpg",
  googleScholarUrl: "https://scholar.google.com/",
  githubUsername: "Everloom-129",
  linkedinUsername: "Jie Wang",
  twitterUsername: "JieWang_ZJUI",
  blogUrl: "https://everloom-129.github.io/CIS700-Real-World-Robot-Learning/",
  cvUrl: "https://",
  institutionUrl: "https://www.grasp.upenn.edu",
  altName: "Jie Wang",
  secretDescription: "I am a big fan of Philosophy and Coffee! I founded <i>PhiloCoffee Club(哲咖社)</i> at international ZJU Campus. Here is the club website: <a href=\"https://philocoffee.github.io/\">philocoffee.github.io</a>",
};
