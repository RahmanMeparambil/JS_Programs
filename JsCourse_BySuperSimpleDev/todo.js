
let b_add = document.querySelector('.B_add')
let b_task = document.querySelector('.task')
let b_date = document.querySelector('.date')
let d_display = document.querySelector('.display')
let display ;
let tasks =  {
    tasks :[],
    addTask(task,date){
        if (task===''){
            return 
        }
        this.tasks.push({task,date}) 
        this.displayTasks()       
        // console.log(this.getTasks())
    },
    delTask(id){
        this.tasks.splice(id,1)
        this.displayTasks()
    },
    getTasks(){
        return this.tasks
    },
    displayTasks(){
        display = "";
        for(let i=0;i<this.tasks.length;i++){
            display+=`<p>${this.tasks[i].task}</p><p>${this.tasks[i].date}</p><button class='B_del' onclick='tasks.delTask(${i})'>Delete</button>`
        }
        d_display.innerHTML = display;
    }
}


b_add.addEventListener('click',function addTaskHandler(){
    return tasks.addTask(b_task.value,b_date.value)
})