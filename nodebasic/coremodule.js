//using core modules in node.js

const path=require('path');   //node module have already path so we just hv to write it in require


const filename=path.join(__filename);
const basename=path.basename(filename);  // used to know deepest file name working upon
const extname =path.extname(basename);   // extension of that file


console.log(filename);
console.log(basename);
console.log(extname);