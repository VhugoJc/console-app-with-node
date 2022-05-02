require("colors");
const { inquirerMenu, inquirerPause, readInput } = require("./helper/inquirer");
const Taks = require("./models/tasks");
const { saveDB, readDB } = require("./helper/handleDB");

console.clear();

const main = async () => {
let opt = 1;
  const tasks = new Taks(); //init list
  const tasksDB = readDB();
  if (tasksDB) 
  {
    tasks.loadTasks(tasksDB);
  }
  do 
  {
    opt = await inquirerMenu();
    opt = opt.option;
    
    switch (opt) {
      case "1":
        const description = await readInput("Descripción: ");
        tasks.createTask(description);
        break;
      case "2":
        //op2
        tasks.printTasks(tasks.ArrList);
        break;
      case "3":
        tasks.handleCompletedTask();
        break;
      case "4":
        tasks.handleCompletedTask(false);
        break;
    }
    saveDB(tasks.ArrList);
    
    console.log("\n");
    await inquirerPause();
    
  } while (opt.option != "0");
};

main();
