const https = require('https');
const fs = require('fs');
const path = require('path');

const projects = [
  {
    name: 'mern-project',
    url: 'https://raw.githubusercontent.com/pranav4004/MERN-PROJECT/main/client/src/assets/logo.png'
  },
  {
    name: 'ad-click-prediction',
    url: 'https://raw.githubusercontent.com/pranav4004/Ad-Click-Prediction/main/Ad%20Click%20Prediction.png'
  },
  {
    name: 'dns',
    url: 'https://raw.githubusercontent.com/pranav4004/DNS--Decentralized-Naming-Service-/main/DNS.png'
  },
  {
    name: 'lottery-dapp',
    url: 'https://raw.githubusercontent.com/pranav4004/lottery-Dapp/main/lottery.png'
  },
  {
    name: 'ai-assistant',
    url: 'https://raw.githubusercontent.com/pranav4004/PERSONAL-AI-ASSISTANT/main/ai.png'
  },
  {
    name: 'fitbite',
    url: 'https://raw.githubusercontent.com/pranav4004/FITBITE-PYTHON-PROJECT/main/fitbite.png'
  }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
};

const main = async () => {
  const projectsDir = path.join(__dirname, '../public/images/projects');
  
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
  }

  for (const project of projects) {
    const filepath = path.join(projectsDir, `${project.name}.png`);
    try {
      await downloadImage(project.url, filepath);
      console.log(`Downloaded: ${project.name}.png`);
    } catch (error) {
      console.error(`Error downloading ${project.name}.png:`, error.message);
    }
  }
};

main(); 