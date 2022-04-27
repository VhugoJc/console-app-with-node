require ('colors');
const {inquirerMenu, inquirerPause, readInput} = require('./helper/inquirer');
const Task = require('./models/task');
const Taks=require('./models/tasks');

console.clear();

const main = async () =>{
    let opt=1;
    const tasks = new Taks(); //init list
    do{
        opt = await inquirerMenu();
        opt = opt.option;

        await console.log(opt);
        switch(opt){
            case '1':
                const description = await readInput('Descripción: ');
                tasks.createTask(description);
                break;
            case '2':
                //op2
                console.log(tasks._list);
        }

        console.log('\n');
        await inquirerPause();


    }while(opt.option!='0');
}

main();