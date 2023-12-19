const todoList = () => {
    const all = [];
    const add = (todoItem) => {
        all.push(todoItem);
    };
    const markAsComplete = (index) => {
        all[index].completed = true;
    };

    let i;
    const today = new Date();
    const todayDate = today.getDate();
    const overdue = () => {
        
        const over = [];
        for (i = 0; i < all.length; i++) {
            let date = new Date(all[i].dueDate);
            if (date.getDate() === todayDate - 1)  {
            over.push(all[i]);
            }
        }
        return over;
    };

    const dueToday = () => {

        const due = [];
        for (i = 0; i < all.length; i++) {
        let date = new Date(all[i].dueDate);
        if (date.getDate() === todayDate) {
            due.push(all[i]);
        }
    }
    return due;
    };

    const dueLater = () => {

        const later = [];
        for (i = 0; i < all.length; i++) {
            let date = new Date(all[i].dueDate);
            if (date.getDate() === todayDate + 1) {
                later.push(all[i]);
            }
        }
        return later;
    };

    const toDisplayableList = (list) => {

        const output = [];
        for (i = 0; i < list.length; i++) {
        let date = new Date(list[i].dueDate);
        const fd = date.toISOString().split("T")[0];
        if (date.getDate() === todayDate) {
            if (list[i].completed === false) {
                output.push(`[ ] ${list[i].title}`);
            } else {
            output.push(`[x] ${list[i].title}`);
            }
        } else {
            if (list[i].completed === false) {
                output.push(`[ ] ${list[i].title} ${fd}`);
            } else {
            output.push(`[x] ${list[i].title} ${fd}`);
            }
            }
        }
        return output.join("\n");
    };

    return {
        all,
        overdue,
        toDisplayableList,
        add,
        markAsComplete,
        dueToday,
        dueLater,
    
    };
};
