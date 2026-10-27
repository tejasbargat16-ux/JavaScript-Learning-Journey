#!/usr/bin/env node
/**
 * Scaffold helper (cross-platform: works on Windows, Termux, Linux, macOS).
 *
 * Usage:
 *   node scripts/new.js day <number> <topic>
 *   node scripts/new.js dsa <topic> <slug> <title> [Easy|Medium|Hard] [pattern]
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const [, , command, arg1, arg2, arg3, arg4, arg5] = process.argv;

function showHelp() {
  console.log(`Usage:
  node scripts/new.js day <number> <topic>
  node scripts/new.js dsa <topic> <slug> <title> [Easy|Medium|Hard] [pattern]

Examples:
  node scripts/new.js day 13 "Closures & Scope"
  node scripts/new.js dsa arrays two-sum "Two Sum" Easy "Hash Map"`);
}

function handleDay() {
  if (!arg1 || !arg2) {
    console.error('Error: missing day number or topic.');
    showHelp();
    process.exit(1);
  }

  const num = parseInt(arg1, 10);
  if (isNaN(num)) {
    console.error(`Error: invalid day number "${arg1}".`);
    process.exit(1);
  }

  const nn = String(num).padStart(2, '0');
  const topic = arg2.trim();
  const dir = path.join(ROOT, `Day-${nn}`);

  if (fs.existsSync(dir)) {
    console.error(`✗ Day-${nn} already exists`);
    process.exit(1);
  }

  fs.mkdirSync(dir, { recursive: true });

  const templateFile = path.join(ROOT, 'scripts', 'templates', 'day-readme.md');
  let readmeContent = '';
  if (fs.existsSync(templateFile)) {
    readmeContent = fs.readFileSync(templateFile, 'utf8')
      .replace(/\{\{NN\}\}/g, nn)
      .replace(/\{\{TOPIC\}\}/g, topic);
  } else {
    readmeContent = `# Day ${nn}: ${topic}\n\n## 📌 Concept\n\n## 🧪 Syntax\n\n## 💡 Examples\n\n## ⚠️ Common Mistakes\n\n## 🎤 Interview Q&A\n\n## ✅ Practice\n`;
  }

  fs.writeFileSync(path.join(dir, 'README.md'), readmeContent, 'utf8');
  fs.writeFileSync(path.join(dir, `day${nn}.js`), '', 'utf8');
  fs.writeFileSync(path.join(dir, `day${nn}_practice.js`), '', 'utf8');

  console.log(`✓ Created Day-${nn} (README.md, day${nn}.js, day${nn}_practice.js)`);
}

function handleDsa() {
  if (!arg1 || !arg2 || !arg3) {
    console.error('Error: missing topic, slug, or title.');
    showHelp();
    process.exit(1);
  }

  const topic = arg1.toLowerCase().trim();
  const slug = arg2.toLowerCase().trim();
  const title = arg3.trim();
  const diff = arg4 ? arg4.trim() : 'Easy';
  const pattern = arg5 ? arg5.trim() : 'TBD';

  const topicDir = path.join(ROOT, 'DSA', topic);
  const filePath = path.join(topicDir, `${slug}.js`);

  if (fs.existsSync(filePath)) {
    console.error(`✗ ${filePath} already exists`);
    process.exit(1);
  }

  fs.mkdirSync(topicDir, { recursive: true });

  const templateFile = path.join(ROOT, 'DSA', '_template.js');
  let content = '';
  if (fs.existsSync(templateFile)) {
    content = fs.readFileSync(templateFile, 'utf8')
      .replace(/\{\{TITLE\}\}/g, title)
      .replace(/\{\{DIFF\}\}/g, diff)
      .replace(/\{\{PATTERN\}\}/g, pattern);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Created DSA/${topic}/${slug}.js`);
}

switch (command) {
  case 'day':
    handleDay();
    break;
  case 'dsa':
    handleDsa();
    break;
  default:
    showHelp();
    process.exit(command ? 1 : 0);
}
