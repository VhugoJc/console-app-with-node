const Task = require('./task');
require('colors');
class Taks{
    _list;//object

    get ArrList(){
        const list = [];
        Object.keys(this._list).forEach(key=>{
            const task = this._list[key];
            list.push(task);
        })
        return list;
    }
    constructor(){
        this._list={};
    }
    createTask(desc=''){
        const task = new Task(desc);
        this._list[task.id]=task;
    }
    loadTasks(data=[]){
        data.forEach(task=>{
            this._list[task.id]=task;
        })
    }
    printTasks(){
        console.log('\n');
        this.ArrList.forEach((task,index)=>{
            console.log(`${`${index+1}: `.green} ${`${task.descript} ::`.gray} ${task.completed ?'Completa'.green :'Pendiente'.red}`);
        })
    }

    handleCompletedTask(completed=true){
        this.ArrList.forEach((task,index)=>{
            if(completed){
                if(task.completed){
                    console.log(`${`${index+1}: `.green} ${`${task.descript} ::`.gray} ${`${task.completed}`.green}`);
                }
            }else{
                if(!task.completed){
                    console.log(`${`${index+1}: `.green} ${`${task.descript} ::`.gray} ${'Pendiente'.red}`);
                }
            }
        })
    }

    deleteTask(id){
        if(this._list[id]){
            delete this._list[id];
        }
    }

    toggleCompleted(ids=[]){
        ids.forEach(id=>{
            const task = this._list[id];
            if(!task.completed){
                task.completed = new Date().toString();
            }
        })

        this.ArrList.forEach(task=>{
            if(!ids.includes(task.id)){
                this._list[task.id].completed=null;
            }
        })
    }
}

module.exports = Taks;