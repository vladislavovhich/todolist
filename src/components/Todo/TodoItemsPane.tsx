import React from "react";
import TodoItem from "./TodoItem";
import {TodoItemType} from "../../store/types";
import {useSelector} from "react-redux";
import {StateType} from "../../store/store";

import "../../scss/TodoPanel/TodoItemsPane.scss"

type PropsType = {};

const TodoItemsPane: React.FC<PropsType> = (props) => {
    const todoItems:TodoItemType[] = useSelector((state:StateType) => state.todoPage.todoItems)

    return (
        <div className="TodoItemsPane d-flex flex-column mt-3">
            <div className="d-flex flex-column align-items-center">
                {todoItems.map((todoItem, index) => {
                    return (
                        <TodoItem
                            title={todoItem.title}
                            description={todoItem.description}
                            completed={todoItem.completed}
                            index={index}

                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default TodoItemsPane;