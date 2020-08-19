import {CombineActions} from "./store"
import {TodoItemType} from "./types";

const initState = {
    todoItems: [] as TodoItemType[],
    todoItemDescription: "",
    todoItemTitle: "",
    editingTodoItemNumber: -1,
    hasEditingTodoItem: false
}

type InitStateType = typeof initState
export type ActionsTypes = ReturnType<CombineActions<typeof actions>>

const todoReducer = (state: InitStateType = initState, action: ActionsTypes): InitStateType => {
    switch (action.type) {
        case "todo/ADD_TODO_ITEM": {
            return {
                ...state,
                todoItemTitle: "",
                todoItemDescription: "",
                todoItems: [
                    ...state.todoItems, {
                        title: action.title,
                        description: action.description,
                        completed: false
                    }
                ]
            }
        }
        case "todo/TOGGLE_COMPLETED": {
            return {
                ...state,
                todoItems: state.todoItems.map((item, index) => {
                    if (index === action.index) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }

                    return item
                })
            }
        }
        case "todo/REMOVE_TODO_ITEM": {
            return {
                ...state,
                todoItems: state.todoItems.filter((item, index) => index !== action.index)
            }
        }
        case "todo/SET_TODO_ITEM_DESCRIPTION": {
            return {
                ...state,
                todoItemDescription: action.value
            }
        }
        case "todo/SET_TODO_ITEM_TITLE": {
            return {
                ...state,
                todoItemTitle: action.value
            }
        }
        case "todo/SET_EDITING_TODO_NUMBER": {
            return {
                ...state,
                hasEditingTodoItem: true,
                editingTodoItemNumber: action.index,
                todoItemDescription: state.todoItems[action.index].description,
                todoItemTitle: state.todoItems[action.index].title
            }
        }
        case "todo/SET_TODO_ITEM": {
            const todoItems = [...state.todoItems]
            todoItems[state.editingTodoItemNumber] = {
                ...todoItems[state.editingTodoItemNumber],
                title: action.title,
                description: action.description,
            } as TodoItemType

            return {
                ...state,
                todoItems: todoItems,
                editingTodoItemNumber: -1,
                hasEditingTodoItem: false,
                todoItemTitle: "",
                todoItemDescription: ""
            }
        }
        default: {
            return state
        }
    }
};

export const actions = {
    addTodoItem: (title:string, description:string) => ({
        type: "todo/ADD_TODO_ITEM",
        title: title,
        description: description
    } as const),
    setTodoItem:(title:string, description:string) => ({
        type: "todo/SET_TODO_ITEM",
        title: title,
        description: description
    } as const),
    removeTodoItem: (index:number) => ({
        type: "todo/REMOVE_TODO_ITEM",
        index: index
    } as const),
    toggleCompleted: (index:number) => ({
        type: "todo/TOGGLE_COMPLETED",
        index: index
    } as const),
    setTodoItemTitle: (value:string) => ({
        type: "todo/SET_TODO_ITEM_TITLE",
        value: value
    } as const),
    setTodoItemDescription: (value:string) => ({
        type: "todo/SET_TODO_ITEM_DESCRIPTION",
        value: value
    } as const),
    setEditingTodoNumber: (index:number) => ({
        type: "todo/SET_EDITING_TODO_NUMBER",
        index: index
    } as const)
}

export default todoReducer