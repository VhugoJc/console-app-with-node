const Task = require('./task');
class Taks{
    _list;//object
    constructor(){
        this._list={};
    }
    createTask(desc=''){
        const task = new Task(desc);
        this._list[task.id]=task;
    }
}

module.exports = Taks;