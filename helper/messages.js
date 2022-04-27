require('colors');
let figlet = require('figlet');


const showBanner =()=>{
    console.clear();
    return new Promise((resolve, reject)=>{
        figlet('vhugoJC',{font: 'Doh'}, (err, data)=> {
            if (err) {
                reject(err);
            }
            console.log(data.rainbow);
            figlet('Aplicacion de consola',{font:'Dr Pepper'}, (err, data)=>{
                if(err){
                    reject(err);
                }
                resolve(data)
            }
            );
        });
    });
}

const pause=()=>{
   return new Promise(resolve=>{
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readLine.question(`Presione ${'ENTER'.green} Para continuar.`,(opt)=>{
        readLine.close();
        console.clear();
        resolve(opt);
    })
   })
}
const showMenu = ()=>{

    return new Promise(resolve =>{
        showBanner((error, data)=>{
            if(error){
                return console.log(error);
            }
    
            console.log(data.green);
            console.log(`${'1'.green} Crear tarea`);
            console.log(`${'2'.green} Listar tareas`);
            console.log(`${'3'.green} Listar tareas completadas`);
            console.log(`${'4'.green} Listar tareas pendientes`);
            console.log(`${'5'.green} Completar Tarea`);
            console.log(`${'6'.green} Borrar tarea`);
            console.log(`${'0'.green} Salir`);
    
            const readLine = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            });
            readLine.question('Seleccione una opcion: ',(opt)=>{
                readLine.close();
                resolve(opt);
            });
    
        })
    });
    
    
}

module.exports ={showMenu, pause, showBanner}