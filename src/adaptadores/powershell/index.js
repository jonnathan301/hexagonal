const { exec } = require("child_process");

class AdaptadorPowershell {
  constructor() {}
  
  ipconfig = async (req, res) => {
    try {
      exec("ipconfig", { shell: "powershell.exe" }, (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error.message}`);
          return res.status(500).send(error.message);
        }

        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return res.status(500).send(stderr);
        }

        console.log(`stdout:\n${stdout}`);
        return res.status(200).send(stdout);
      });
    } catch (err) {
      console.log("err = ", err);
      return res.status(500).send(err);
    }
  };
}
module.exports = AdaptadorPowershell;
