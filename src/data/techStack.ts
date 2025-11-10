export interface TechBadge {
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'blockchain' | 'tools';
}

export const techStack: TechBadge[] = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Vite", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "shadcn/ui", category: "frontend" },
  { name: "Flutter", category: "frontend" },
  { name: "Kotlin", category: "frontend" },
  
  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "Flask", category: "backend" },
  { name: "Supabase", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "REST APIs", category: "backend" },
  
  // Cloud & DevOps
  { name: "AWS", category: "cloud" },
  { name: "Docker", category: "cloud" },
  { name: "Firebase", category: "cloud" },
  { name: "Vercel", category: "cloud" },
  { name: "Kubernetes", category: "cloud" },
  { name: "GitHub Actions", category: "cloud" },
  { name: "CI/CD", category: "cloud" },
  
  // Blockchain
  { name: "Solidity", category: "blockchain" },
  { name: "Web3.js", category: "blockchain" },
  { name: "Ethers.js", category: "blockchain" },
  { name: "MetaMask", category: "blockchain" },
  
  // Tools
  { name: "Figma", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Postman", category: "tools" },
];
