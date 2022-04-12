const {symlink} = require('codeforces-api');
  
symlink("../../server/EncryptionHandler.js",
        "./EncryptionHandler.js", 'file', (err) => {
  if (err) console.log(err)
  else console.log("done");
        });