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
    "where I have been fortunate to work with <a href='https://jasonma2016.github.io/'>Jason Ma</a>, <a href='https://edwardshu.com/'>Edward Hu</a>, <a href='https://www.cis.upenn.edu/~kostas/'>Kostas Daniilidis</a> and <a href='https://www.seas.upenn.edu/~dineshj/'>Dinesh Jayaraman</a>. <br><br>" +
    
    "I received my B.S. in Computer Engineering from ZJU and UIUC in 2024, advised by <a href='https://scholar.google.com/citations?user=2hB_Q4EAAAAJ&hl=en'>Said Mikki</a>. and <a href='https://person.zju.edu.cn/en/0617496'>Wei Xiang</a>. <br><br>" +
    
    "I also spent time at <a href='https://www.idea.edu.cn/research/cvr.html'>IDEA-CVR</a> as a research intern, advised by <a href='https://shockjiang.github.io/'>Xiaoke Jiang</a> and <a href='https://www.leizhang.org/'>Lei Zhang</a>. <br><br>" +
    
    "My research interests include VLAs, embodied reasoning and robot learning. <br>" +
    "I am a passionate builder to make generalizable agents that can think and execute <a href='https://www.bls.gov/ors/factsheet/gross-and-fine-manipulation.htm'>fine-grained manipulation</a>, " +
    "like brewing a cup of latte with an espresso machine. <br><br>" + 
    
    "This summer, I am working at <a href='https://www.dyna.co/'>Dyna Robotics</a>, delievering high-performant embodied reasoning VLAs models!",
    
  email: "tonyw3@seas.upenn.edu",
  imageUrl:
    "/images/me_fries_high.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AIfU4H7SGuK4TMarWYOzmINbgA96Uo1gL97PZcO52F0VLZHT1xYB3QJz7HG83u2OS002pY_3BdJFdYOXgGndx2tUG92b&user=MDrLWmIAAAAJ",
  githubUsername: "Everloom-129",
  linkedinUsername: "jie-wang-8ab93a266",
  twitterUsername: "JieWang_ZJUI",
  blogUrl: "https://everloom-129.github.io/CIS700-Real-World-Robot-Learning/",
  cvUrl: "/files/CV_WangJie_2025.pdf",
  institutionUrl: "https://www.grasp.upenn.edu",
  altName: "tonyw3@seas.upenn.edu",
  secretDescription: "I am a big fan of Philosophy and Coffee! I founded PhiloCoffee Club(哲咖社) at international ZJU Campus. Here is the club website: philocoffee.github.io",
};
