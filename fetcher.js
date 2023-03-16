const args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

const url = args[0];
const localPath = args[1];

request(`${url}`, (err, res, body) => {
  if (err) {
    console.log(err);
  }
  fs.writeFile(`${localPath}`, body, (res) => {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`)
    })
  }
)
