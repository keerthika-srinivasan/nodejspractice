const name=process.argv[2]||'world';
console.log(`hello,${name}!`);
// server.js
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
console.log(`port-${port} environment ${env}`);