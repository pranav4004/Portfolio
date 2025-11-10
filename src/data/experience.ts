export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: "freelance",
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "2021 – Present",
    description: "Delivered 10+ production-ready applications across healthcare, ERP, fashion, and AI domains. Specialized in building scalable systems with modern tech stacks and cloud infrastructure."
  },
  {
    id: "teaching",
    role: "Workshop Instructor & Private Tutor",
    company: "College & Private Tutoring",
    period: "2022 – Present",
    description: "Conducting technical workshops and mentoring junior students in college. Providing private tuitions in programming, web development, and software engineering. Teaching concepts through hands-on projects and real-world applications, helping students build practical skills."
  },
  {
    id: "content-writer",
    role: "Content Writer",
    company: "Supermark Agency",
    period: "2021 – 2022",
    description: "Created engaging technical content, blog posts, and marketing copy for digital campaigns. Researched industry trends and translated complex technical concepts into accessible content for diverse audiences. Collaborated with marketing and design teams to deliver compelling narratives."
  },
  {
    id: "quotr",
    role: "Software Intern",
    company: "Quotr.io",
    period: "Jul 2024 – Aug 2024",
    description: "Built automation modules and backend APIs using Node.js and Python. Implemented data processing pipelines and integrated third-party services for enhanced functionality."
  },
  {
    id: "batwebs",
    role: "Software Intern",
    company: "Batwebs",
    period: "May 2023 – Jul 2023",
    description: "Developed mobile and web applications using React, Kotlin, and Flutter. Collaborated with design and backend teams to deliver cross-platform solutions."
  }
];
