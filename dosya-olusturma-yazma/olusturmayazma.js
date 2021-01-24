/*
* fs.appendFile()
* fs.writeFile()
*/
const fs = require('fs');
fs.writeFile('biir.txt','salamuieanhthtamm dünya', (err) => {
    if (err)
        throw err;

    console.log('işlem tamam')
})