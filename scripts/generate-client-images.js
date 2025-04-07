const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const clients = [
  { 
    name: 'madan-jewellers', 
    title: 'Madan Jewellers',
    subtitle: 'Inventory Software & Website',
    color: '#FFD700',
    description: 'Developed comprehensive inventory management software and website for jewelry business'
  },
  { 
    name: 'aina-gold', 
    title: 'Aina Gold',
    subtitle: 'Inventory Management System',
    color: '#B8860B',
    description: 'Created specialized inventory software for gold and jewelry business'
  },
  { 
    name: 'batwebs', 
    title: 'Batwebs',
    subtitle: 'Project Manager Internship',
    color: '#4A90E2',
    description: 'Led project management initiatives during internship'
  },
  { 
    name: 'quotr', 
    title: 'Quotr',
    subtitle: 'Project Development',
    color: '#2C3E50',
    description: 'Contributed to project development and implementation'
  }
];

const generateImage = (client) => {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = client.color;
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
  ctx.fillText(client.title, width / 2, height / 2 - 30);

  // Subtitle
  ctx.font = '24px Arial';
  ctx.fillText(client.subtitle, width / 2, height / 2 + 30);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  const filepath = path.join(__dirname, '../public/images/clients', `${client.name}.png`);
  fs.writeFileSync(filepath, buffer);
  console.log(`Generated: ${client.name}.png`);
};

const main = () => {
  const clientsDir = path.join(__dirname, '../public/images/clients');
  
  if (!fs.existsSync(clientsDir)) {
    fs.mkdirSync(clientsDir, { recursive: true });
  }

  clients.forEach(client => {
    generateImage(client);
  });
};

main(); 