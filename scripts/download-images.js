const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  // Frontend
  'react.svg': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'javascript.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'html5.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  'css3.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  
  // Backend
  'nodejs.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
  'python.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  'django.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg',
  'express.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
  
  // Database & Cloud
  'mongodb.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
  'aws.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'firebase.svg': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg',
  'supabase.svg': 'https://cdn.jsdelivr.net/gh/supabase/supabase/web/static/img/logo-dark.svg'
};

const skillsDir = path.join(__dirname, '../public/images/skills');

// Create directory if it doesn't exist
if (!fs.existsSync(skillsDir)) {
  fs.mkdirSync(skillsDir, { recursive: true });
}

// Function to download image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(path.join(skillsDir, filename)))
          .on('error', reject)
          .once('close', () => resolve(filename));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
}

// Download all images
async function downloadAllImages() {
  for (const [filename, url] of Object.entries(images)) {
    try {
      await downloadImage(url, filename);
      console.log(`Downloaded: ${filename}`);
    } catch (error) {
      console.error(`Error downloading ${filename}:`, error.message);
    }
  }
}

downloadAllImages(); 