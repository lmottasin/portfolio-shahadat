
import { Project, StudentDetails } from './types';

export const STUDENT_INFO: StudentDetails = {
  name: "Shahadat Sayal",
  id: "181 012 057",
  department: "Media Studies and Journalism",
  major: "Communication for Development",
  minor: "English",
  objectives: [
    "To become a good thinker and a good decision-maker.",
    "To explore the vast arena of knowledge in the field of communication, media studies, and journalism.",
    "To assimilate the theories into practices in real life.",
    "To gain problem-solving skills and enhance capability.",
    "To improve my communication ability.",
    "To practice academic writing and creative content writing.",
    "To build capacity for contribution to knowledge creation.",
    "To build capacity for identifying research problems and doing research."
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "14",
    title: "The July Massacre Archive",
    category: "Created Private Media",
    date: "Summer 2025",
    type: "Semi Documentary",
    description: "A historical documentary project documenting the July Uprising in Bangladesh. This initiative focuses on creating a reliable digital repository of testimonies, photos, and stories to record the sacrifices of student activists and preserve the spirit of the uprising against historical erasure.",
    tags: ["Documentary", "Journalism", "Archive"],
    links: [{ label: "Production Link", url: "https://drive.google.com/file/d/1_Aka6AAYSEqCfw31zA82l6CHyy9dAZGn/view" }]
  },
  {
    id: "15",
    title: "Gujob Limited (Disinformation Satire)",
    category: "Entertainment Education",
    date: "Spring 2025",
    type: "Video Production",
    description: "A satirical edu-tainment short film exploring the dangers of disinformation and unethical journalism. The narrative follows an idealistic journalist using fact-checking tools to expose a fabricated scandal, highlighting the urgent need for media literacy in the digital age.",
    tags: ["Film", "Satire", "Fact-Checking"],
    links: [{ label: "Watch Short Film", url: "https://www.facebook.com/share/v/1D595E4a6r/" }]
  },
  {
    id: "16",
    title: "Every Drop Counts",
    category: "Environmental Communication",
    date: "Spring 2025",
    type: "Campaign Strategy",
    description: "A comprehensive campaign strategy for sustainable water resource management in Bangladesh. It addresses the critical levels of river pollution in hubs like Hazaribagh and advocates for community-led initiatives and integrated water governance to protect biodiversity.",
    tags: ["Environment", "Campaign", "Sustainability"],
    links: [{ label: "Documentary Reel", url: "https://www.facebook.com/reel/1365902364679257" }]
  },
  {
    id: "8",
    title: "Escape",
    category: "Convergence Communication",
    date: "Spring 2020",
    type: "Video Art",
    description: "An exploration of 'Communication Apprehension' through visual storytelling. Filmed on an island of the Padma river, this video art piece uses the open field to symbolize running away from reality and the internal struggle to overcome communicative hesitation.",
    tags: ["Cinematography", "Storytelling", "Video Art"],
    links: [{ label: "Watch Video", url: "https://youtu.be/df4TBdR7buY" }]
  },
  {
    id: "4",
    title: "Digital Security Act Explainer",
    category: "Communication and Technology",
    date: "Fall 2020",
    type: "Video Explainer",
    description: "A detailed video explainer breaking down the laws of the Digital Security Act 2018. It analyzes how these legal frameworks impact social media expression and the broader landscape of communication convergence in the modern era.",
    tags: ["Video", "Law", "Social Media"],
    links: [{ label: "Watch Video", url: "https://www.facebook.com/share/v/16bd3FbaLR/" }]
  },
  {
    id: "11",
    title: "Social Media & Mental Health",
    category: "Participatory Research",
    date: "Summer 2021",
    type: "Research Paper",
    description: "A full-scale participatory research paper investigating the impact of excessive social media usage on the mental health of university students in Dhaka during the pandemic. The study identifies patterns of FOMO, anxiety, and depression through in-depth qualitative interviews.",
    tags: ["Research", "Mental Health", "Qualitative"],
    links: [{ label: "Case Study", url: "#" }]
  },
  {
    id: "12",
    title: "ACAPP (Anti-Child Abuse Program)",
    category: "ICT for Development",
    date: "Fall 2021",
    type: "Application Design",
    description: "Design and planning for a digital platform (ACAPP) intended to prevent child abuse and rescue victims. Features include a toll-free hotline, legal aid connections, and a media section for awareness-raising through digital posters and videos.",
    tags: ["ICT4D", "App Design", "Social Impact"],
    links: [{ label: "View Design", url: "#" }]
  },
  {
    id: "2",
    title: "We Are Adapting",
    category: "Mass Communication",
    date: "Spring 2019",
    type: "Mask Exhibition",
    description: "Visual communication project based on 'Broken Windows Theory'. Using painted masks exhibited at Shilpakala Academy, this project demonstrated the impacts of global warming and industrial waste on the ozone layer through an abstract artistic medium.",
    tags: ["Visual Art", "Exhibition", "Climate"],
    links: [{ label: "Exhibition", url: "#" }]
  }
];
