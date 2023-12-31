const todoList = require("../todo");

const { add, markAsComplete, all, dueToday, dueLater, overdue } = todoList();

describe("Todo test suite", () => {
    test("should add new todo", () => {
        expect(all.length).toBe(0);
        const date = new Date();
        const kd = new Date(date);
        const md = new Date(date);
        kd.setDate(date.getDate() + 1);
        md.setDate(date.getDate() - 1);
        add({
            title: "Todo test",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
        });
        add({
            title: "Todo test",
            completed: false,
            dueDate: kd.toLocaleDateString("en-CA"),
        });
        add({
            title: "Todo test",
            completed: false,
            dueDate: md.toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(3);
    });

    test("should mark a todo as complete", () => {
        
        expect(all[0].completed).toBe(false);
    // Mark the todo as complete
        markAsComplete(0);
    // Ensure the todo is now marked as complete
        expect(all[0].completed).toBe(true);
    });

    test("should retrive a todo as duetoday", () => {
        expect(all.length).toBe(3);
        const k = dueToday();
        console.log(k);
        expect(k.length).toBe(1);
    });
    test("should retrive a todo as overdue", () => {
        let k = [];
            expect(k.length).toBe(0);
        k = overdue();
        expect(k.length).toBe(1);
    });
    test("should retrive a todo as laterdue", () => {
        let k = [];
        expect(k.length).toBe(0);
        k = dueLater();
        expect(k.length).toBe(1);
    });
});
