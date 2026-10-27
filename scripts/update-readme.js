const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const readmePath = path.join(rootDir, 'README.md');

const TOPIC_FALLBACKS = {
  'Day-01': 'Basics, Variables & Data Types',
  'Day-02': 'Operators, Input & Type Conversion',
  'Day-03': 'Conditional Statements',
  'Day-04': 'Loops',
  'Day-05': 'Functions',
  'Day-06': 'Arrays',
  'Day-07': 'Objects',
  'Day-08': 'Strings & String Methods',
  'Day-09': 'Array Methods',
  'Day-10': 'Destructuring & Spread',
  'Day-11': 'Callbacks & Higher-Order Functions',
  'Day-12': 'Arrow Functions & Task Manager'
};

function getDayFolders() {
  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  return entries
    .filter(entry => entry.isDirectory() && /^Day-\d+$/i.test(entry.name))
    .map(entry => entry.name)
    .sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ''), 10);
      const numB = parseInt(b.replace(/\D/g, ''), 10);
      return numA - numB;
    });
}

function extractTopic(dayFolder) {
  const readmeFile = path.join(rootDir, dayFolder, 'README.md');
  if (fs.existsSync(readmeFile)) {
    const content = fs.readFileSync(readmeFile, 'utf8');
    const lines = content.split('\n').map(l => l.trim()).filter(Boolean);

    for (const line of lines) {
      const match = line.match(/^#+\s*(?:Day\s*\d+\s*[:—\-–]\s*)?(.*)$/i);
      if (match && match[1] && !match[1].toLowerCase().includes('learning journey')) {
        return match[1].replace(/^[#\s—\-–]+/, '').trim();
      }
    }
  }

  const numStr = dayFolder.replace(/\D/g, '');
  const jsFile = path.join(rootDir, dayFolder, `day${numStr}.js`);
  if (fs.existsSync(jsFile)) {
    const content = fs.readFileSync(jsFile, 'utf8');
    const commentMatch = content.match(/\/\/\s*Day\s*\d+\s*[-–—:]\s*([^\r\n]+)/i);
    if (commentMatch && commentMatch[1]) {
      return commentMatch[1].trim();
    }
  }

  return TOPIC_FALLBACKS[dayFolder] || `Topic ${numStr}`;
}

function isCompleted(dayFolder) {
  const numStr = dayFolder.replace(/\D/g, '');
  const jsFile = path.join(rootDir, dayFolder, `day${numStr}.js`);
  if (!fs.existsSync(jsFile)) return false;
  const content = fs.readFileSync(jsFile, 'utf8').trim();
  return content.length > 20;
}

function generateProgressTable(folders) {
  const rows = [
    '| Day | Topic | Status | Folder |',
    '|:---|:---|:---:|:---|'
  ];

  for (const folder of folders) {
    const num = folder.replace(/\D/g, '');
    const topic = extractTopic(folder);
    const status = isCompleted(folder) ? '✅' : '⏳';
    rows.push(`| Day ${num} | ${topic} | ${status} | [${folder}](./${folder}) |`);
  }

  return rows.join('\n');
}

function updateReadme() {
  if (!fs.existsSync(readmePath)) {
    console.error(`README.md not found at ${readmePath}`);
    process.exit(1);
  }

  const folders = getDayFolders();
  const table = generateProgressTable(folders);
  let readme = fs.readFileSync(readmePath, 'utf8');

  const progressRegex = /(<!--\s*PROGRESS:START\s*-->)[\s\S]*?(<!--\s*PROGRESS:END\s*-->)/i;
  if (!progressRegex.test(readme)) {
    console.error('Could not find PROGRESS markers in README.md');
    process.exit(1);
  }

  readme = readme.replace(progressRegex, `$1\n\n${table}\n\n$2`);

  fs.writeFileSync(readmePath, readme, 'utf8');
  console.log('Successfully updated README.md progress table!');
}

updateReadme();
