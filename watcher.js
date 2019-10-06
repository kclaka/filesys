'use strict';

const fs = require('fs');
fs.watch('target.txt', ()=> console.log('File Changed!'));
console.log('Now Watching target.txt for chanhes...');