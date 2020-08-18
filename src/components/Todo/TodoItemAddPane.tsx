import React from "react";
import "../../scss/TodoPanel/TodoItemAddPane.scss"
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../store/todoReducer";
import {StateType} from "../../store/store";

const {addTodoItem, setTodoItemDescription, setTodoItemTitle, setTodoItem} = actions

type PropsType = {};

const TodoItemAddPane: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()

    const todoItemTitle = useSelector((state:StateType) => state.todoPage.todoItemTitle)
    const todoItemDescription = useSelector((state:StateType) => state.todoPage.todoItemDescription)

    const hasEditingTodoItem = useSelector((state:StateType) => state.todoPage.hasEditingTodoItem)

    const onClickAddTodoItem = () => {
        if (!todoItemDescription.trim() || !todoItemTitle.trim()) {
            alert("Вы не заполнили все поля!")
        } else {
            dispatch(addTodoItem(todoItemTitle, todoItemDescription))
        }
    }
    const onChangeSetTodoItemTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setTodoItemTitle(e.target.value))
    }
    const onChangeSetTodoItemDescription = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setTodoItemDescription(e.target.value))
    }
    const onClickSaveTodoItem = () => {
        dispatch(setTodoItem(todoItemTitle, todoItemDescription))
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="col-12 col-xl-6 col-lg-8 col-md-9 col-sm-10 col-xs-11">
                <div className="TodoItemAddPane d-flex flex-column align-items-center">
                    <input
                        type="text"
                        placeholder="Название задачи"
                        className="TodoItemAddPane__title"
                        autoFocus={true}
                        value={todoItemTitle}
                        onChange={onChangeSetTodoItemTitle}
                    />
                    <textarea
                        placeholder="Описание задачи"
                        className="TodoItemAddPane__description mt-2"
                        rows={3}
                        value={todoItemDescription}
                        onChange={onChangeSetTodoItemDescription}
                    />

                    <input
                        type="button"
                        value={hasEditingTodoItem ? "Сохранить" : "Добавить"}
                        className="TodoItemAddPane__addBtn mt-2"
                        onClick={hasEditingTodoItem ? onClickSaveTodoItem : onClickAddTodoItem}
                    />
                </div>
            </div>
        </div>
    )
};

export default TodoItemAddPane;