const todolist = require("../todo");

const { add, markAsComplete, all, duetoday, duelater, oveDue } = todolist();

describe("Todo test suite", () => {
    test("should add new todo", () => {
        expect(all.length).toBe(0);
        const date = new Date();
        const yd = new Date(date);
        const td = new Date(date);
        td.setDate(date.getDate() + 1);
        yd.setDate(date.getDate() - 1);
        add({
            title: "Todo test",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
        });
        add({
            title: "Todo test",
            completed: false,
            dueDate: yd.toLocaleDateString("en-CA"),
        });
        add({
            title: "Todo test",
            completed: false,
            dueDate: td.toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(3);
    });

    test("should mark a Todo as complete", () => {
        
        expect(all[0].completed).toBe(false);
    // Mark the todo as complete
        markAsComplete(0);
    // Ensure the todo is now marked as complete
        expect(all[0].completed).toBe(true);
    });

    test("should retrive a Todo as duetoday", () => {
        expect(all.length).toBe(3);
        const k = duetoday();
        console.log(k);
        expect(k.length).toBe(1);
    });
    test("should retrive a Todo as overDue", () => {
        let k = [];
            expect(k.length).toBe(0);
        k = overDue();
        expect(k.length).toBe(1);
    });
    test("should retrive a Todo as laterdue", () => {
        let k = [];
        expect(k.length).toBe(0);
        k = duelater();
        expect(k.length).toBe(1);
    });
});
