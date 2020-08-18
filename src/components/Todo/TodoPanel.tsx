import React from "react";
import TodoItemsPane from "./TodoItemsPane";
import TodoItemAddPane from "./TodoItemAddPane";

type PropsType = {};

const TodoPanel: React.FC<PropsType> = (props) => {
    return (
        <div className="TodoPanel d-flex flex-column">
            <TodoItemAddPane />
            <TodoItemsPane />
        </div>
    )
};

export default TodoPanel;