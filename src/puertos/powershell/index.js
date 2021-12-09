class PuertoPowershell{
    constructor(adaptadorObj){
        this.adaptador = adaptadorObj;
    }

    ipconfig(){
        return new Promise((resolve,reject)=>{            
            this.adaptador.ipconfig().then(rta=>{
                resolve(rta);
            }).catch(e=>{
                reject(e);
            });
        })
    }
}

module.exports = PuertoPowershell;