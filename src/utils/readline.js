 const fs = require('fs');
 const path = require('path');
 const readline = require('readline');

 // 文件名
 const fileName = path.resolve(__dirname, '../', '../', 'logs', 'access.log');

 const readStream = fs.createReadStream(fileName);

 const rl = readline.createInterface({
     input: readstream
 })

 let chromeNum = 0;
 let sum = 0;

 rl.on('line', (lineDta) => {
     if(!lineDta) {
         return;
     }
     sum++;

     const arr = lineDta.split(' -- ');
     if(arr[2] && arr[2].indexOf('Chrome') > 0) {
         chromeNum++;
     }
 })

 rl.on('close', () => {
     console.log('chrome 占比：' + chromeNum/sum);
 })


  