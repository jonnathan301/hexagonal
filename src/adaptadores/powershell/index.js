const { exec } = require("child_process");

class powershell {
  constructor() {}

  ipconfig() {
    return new Promise((resolve, reject) => {
      exec("ipconfig", (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          reject(error.message);
        }

        if (stderr) {
          console.error(`stderr: ${stderr}`);
          reject(stderr);
        }

        console.log(`stdout:\n${stdout}`);
        resolve(stdout);
      });
    });
  }
}

module.exports = powershell;
