
export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  type: string;
  description: string;
  outcomes?: string;
  links?: {
    label: string;
    url: string;
  }[];
  tags: string[];
}

export interface StudentDetails {
  name: string;
  id: string;
  department: string;
  major: string;
  minor: string;
  objectives: string[];
}
