"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Priority;
(function (Priority) {
    Priority[Priority["LOW"] = 0] = "LOW";
    Priority[Priority["MEDIUM"] = 1] = "MEDIUM";
    Priority[Priority["HIGH"] = 2] = "HIGH";
})(Priority || (Priority = {}));
let tasks = [];
let nextId = 0;
function addTask(title, priority) {
    const newTask = {
        id: nextId++,
        title: title,
        completed: false,
        priority
    };
    tasks.push(newTask);
    return newTask;
}
function toggleTaskCompletion(id) {
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (task?.id == id) {
            task.completed = true;
            return true;
        }
    }
    return false;
}
function getPendingTasks() {
    const pending = [];
    for (let i = 0; i < tasks.length; i++) {
        const ct = tasks[i];
        if (ct && !ct.completed) {
            pending.push(ct);
        }
    }
    return pending;
}
// ---- TESTS ----
const t1 = addTask("Study for exam", Priority.HIGH);
const t2 = addTask("Buy groceries", Priority.LOW);
console.log("All tasks:", tasks);
console.log("Pending (expect 2):", getPendingTasks().length);
toggleTaskCompletion(t1.id);
console.log("After toggle (expect 1):", getPendingTasks().length);
toggleTaskCompletion(t2.id);
console.log("Toggled back (expect 2):", getPendingTasks().length);
toggleTaskCompletion(999); // nonexistent id, should do nothing
console.log("Bad id ignored (expect 2):", getPendingTasks().length);
//# sourceMappingURL=app.js.map