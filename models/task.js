const {v4:uuidv4} = require('uuid');

class Task{
    id = '';
    descript='';
    completed;

    constructor(descript){
        this.id=uuidv4();
        this.descript = descript;
        this.completed=null;
    }

}

module.exports = Task;