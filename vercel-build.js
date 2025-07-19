// vercel-build.js
const { execSync } = require('child_process');

console.log('🔍 NODE_ENV:', process.env.NODE_ENV);
console.log('📁 Working directory:', process.cwd());

try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (err) {
  console.error('❌ Build failed:', err);
  process.exit(1);
}
