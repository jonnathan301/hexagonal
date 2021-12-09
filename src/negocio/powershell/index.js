class Powershell {
  constructor(puerto) {
    this.puerto = puerto;
  }

  ipconfig() {
    return new Promise((resolve, reject) => {
      this.puerto
        .ipconfig()
        .then((resp) => {
          console.log(resp);
          resolve(resp);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }
}

module.exports = Powershell;
