enum Priority {
    LOW,
    MEDIUM,
    HIGH
}

interface Task
{
    id:number;
    title:string;
    completed:boolean;
    dueDate?:string|Date;
    priority: Priority;
}



let tasks: Task[] = [];
let nextId : number = 0;

function addTask(title: string, priority: Priority): Task{
    const newTask: Task = {
        id: nextId++,
        title: title,
        completed: false,
        priority
    }
    tasks.push(newTask);
    return newTask;
}

function toggleTaskCompletion(id: number) : void{
    for(let i:number = 0;i<tasks.length;i++)
    {
        const task = tasks[i];
        if(task?.id == id)
        {
            task.completed = !task.completed;
            return;
        }
    }
}


function getPendingTasks() : Task[]{
    const pending : Task[] = [];
    for(let i : number = 0;i<tasks.length;i++){
        const ct = tasks[i];
        if(ct && !ct.completed)
        {
            pending.push(ct);
        }
    }

    return pending;
}

// ---- TESTS ----
const t1: Task = addTask("Study for exam", Priority.HIGH);
const t2: Task = addTask("Buy groceries", Priority.LOW);
console.log("All tasks:", tasks);
console.log("Pending (expect 2):", getPendingTasks().length);

toggleTaskCompletion(t1.id);
console.log("After toggle (expect 1):", getPendingTasks().length);

toggleTaskCompletion(t2.id);
console.log("After second completion (expect 0):", getPendingTasks().length);

toggleTaskCompletion(999); // nonexistent id, should do nothing
console.log("Bad id ignored (expect 0):", getPendingTasks().length);

export {};
