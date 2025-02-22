export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024—Present",
    institution: "University of Pennsylvania", 
    degree: "M.S.E. in Robotics",
    advisor: "Prof. Dinesh Jayaraman",
  },  
  {
    year: "2020—2024",
    institution: "Zhejiang University",
    degree: "B.E. in Electronic and Computer Engineering",
  },
  {
    year: "2020—2024",
    institution: "University of Illinois at Urbana-Champaign",
    degree: "B.S. in Computer Engineering",
    advisor: "Prof. Said Mikki",
    thesis: "Intelligent Pour-Over Coffee Machine",
    thesisUrl: "https://courses.grainger.illinois.edu/ece445zjui/getfile.asp?id=23789"
  },
];
