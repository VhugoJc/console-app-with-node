const inquirer = require("inquirer");
const { showBanner } = require("./messages");
require("colors");

require("colors");

const inquirerMenu = async () => {
    const menuOptions = [
        {
          type: "list",
          name: "option",
          message: "Que desea hacer?",
          choices: [
            {
              value: "1",
              name: "1.   Crear Tarea",
            },
            {
              value: "2",
              name: "2.    Listar Tarea",
            },
            {
              value: "3",
              name: "3.    Listar Tarea Completadas",
            },
            {
              value: "4",
              name: "4.    Listar Tarea Pendientes",
            },
            {
              value: "5",
              name: "5.    Completar Tareas",
            },
            {
              value: "6",
              name: "6.    Borrar tarea",
            },
            {
              value: "0",
              name: "      Salir",
            },
          ],
        },
      ];
  try {
    const resolve = await showBanner();
    console.log(resolve.green);
    const opt = await inquirer.prompt(menuOptions);
    return opt;
  } catch (err) {
    console.log(err);
  }
};

const inquirerPause = async () => {
    const pauseOptions = [
        {
          type: "input",
          name: "pause",
          message: `Presione ${"ENTER".green} para continuar`,
        },
      ];
  try {
    const pause = await inquirer.prompt(pauseOptions);
  } catch (err) {
    console.log(err);
  }
};

const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name:'desc',
            message,
            validate(value){
                if(value.length===0){
                    return 'Por favor ingrese un valor'
                }
                return true;
            }

        }
    ];
    const {desc} = await inquirer.prompt(question);
    return desc;
}
module.exports = { inquirerMenu, inquirerPause,readInput };
