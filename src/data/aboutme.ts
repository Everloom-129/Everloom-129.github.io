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
    "Hi! I'm a MS Robotics student at the University of Pennsylvania's <a href='https://www.grasp.upenn.edu/'>GRASP Laboratory</a>, " +
    "where I have been fortunate to work with <a href='https://jasonma2016.github.io/'>Jason Ma</a>, <a href='https://edwardshu.com/'>Edward Hu</a> and <a href='https://www.seas.upenn.edu/~dineshj/'>Dinesh Jayaraman</a>, " +
    "My research interest includes vision-language model, autonomous driving and <a href='https://www.bls.gov/ors/factsheet/gross-and-fine-manipulation.htm'>fine manipulation</a>. " +
    "I am devoted to building generalizable agent that can reason and work for fine-grained task like brewing a cup of coffee with espresso machine.",
    
  email: "tonyw3@seas.upenn.edu",
  imageUrl:
    "/images/me_fries_high.jpg",
  googleScholarUrl: "https://scholar.google.com/",
  githubUsername: "Everloom-129",
  linkedinUsername: "jie-wang-8ab93a266",
  twitterUsername: "JieWang_ZJUI",
  blogUrl: "https://everloom-129.github.io/CIS700-Real-World-Robot-Learning/",
  cvUrl: "/files/CV_WangJie_Feb_2025.pdf",
  institutionUrl: "https://www.grasp.upenn.edu",
  altName: "Tony Wang",
  secretDescription: "I am a big fan of Philosophy and Coffee! I founded PhiloCoffee Club(哲咖社) at international ZJU Campus. Here is the club website: philocoffee.github.io",
};
