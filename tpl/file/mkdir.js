const fs = require('fs');
// creates the directory 'test', if it doesn't exist
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);

createDirIfNotExists('test'); 
