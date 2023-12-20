const todoList=require('../todo');
const {all,markAscomplete,add} = todoList()
describe("Todolist Test Suite",()=>{
    beforeAll(()=>{
        add({
            title :"Test todo",
            completed :false,
            dueDate:new Date().toLocaleDateString("en-CA")
        });
        
    })
    test("Should add new todo",()=>{
        const todoItemsCount=all.length;
        
        add({
            title :"Test todo",
            completed :false,
            dueDate:new Date().toLocaleDateString("en-CA")
        });
        expect(all.length).toBe(todoItemsCount+1);
    });
    test("should mark a todo as complete", () => {
        expect(all[0].completed).toBe(false);
        // Mark the todo as complete
        markAsComplete(0);
        // Ensure the todo is now marked as complete
        expect(all[0].completed).toBe(true);
        });
    })
