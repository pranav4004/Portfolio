const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const projects = [
  { name: 'mern-project', title: 'MERN Project', color: '#61DAFB' },
  { name: 'ad-click-prediction', title: 'Ad Click Prediction', color: '#FF6B6B' },
  { name: 'dns', title: 'DNS', color: '#4CAF50' },
  { name: 'lottery-dapp', title: 'Lottery DApp', color: '#9C27B0' },
  { name: 'ai-assistant', title: 'AI Assistant', color: '#2196F3' },
  { name: 'fitbite', title: 'FitBite', color: '#FF9800' }
];

const generateImage = (project) => {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = project.color;
  ctx.fillRect(0, 0, width, height);

  // Gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, 'rgba(0, 0, 0, 0.2)');
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Title
  ctx.fillStyle = 'white';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(project.title, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  const filepath = path.join(__dirname, '../public/images/projects', `${project.name}.png`);
  fs.writeFileSync(filepath, buffer);
  console.log(`Generated: ${project.name}.png`);
};

const main = () => {
  const projectsDir = path.join(__dirname, '../public/images/projects');
  
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
  }

  projects.forEach(project => {
    generateImage(project);
  });
};

main(); 