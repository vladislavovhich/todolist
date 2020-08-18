import React from "react"
import "../../scss/TodoPanel/TodoItem.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../store/todoReducer";
import {StateType} from "../../store/store";

const {toggleCompleted, removeTodoItem, setEditingTodoNumber} = actions

type PropsType = {
    title:string
    description:string
    completed:boolean
    index:number
}

const TodoItem: React.FC<PropsType> = (props) => {
    const dispatch = useDispatch()

    const hasEditingTodoItem = useSelector((state:StateType) => state.todoPage.hasEditingTodoItem)

    const onClickToggleCompleted = () => {
        dispatch(toggleCompleted(props.index))
    }
    const onClickRemoveTodoItem = () => {
        dispatch(removeTodoItem(props.index))
    }
    const onClickEditTodoItem = () => {
        dispatch(setEditingTodoNumber(props.index))
    }

    return (
        <div className="TodoItem col-12 col-xl-6 col-lg-8 col-md-9 col-sm-10 col-xs-11">
            <div className="d-flex flex-column">
                <div className="TodoItem__top d-flex flex-row justify-content-between">
                    <div className="TodoItem__title">
                        {props.title}
                    </div>

                    <div className="TodoItem__editing d-flex flex-row">
                        <button
                            onClick={onClickEditTodoItem}
                            disabled={hasEditingTodoItem}
                        >
                            <FontAwesomeIcon icon="cog" fixedWidth={true}/>
                        </button>
                        <button
                            className="ml-2"
                            onClick={onClickRemoveTodoItem}
                            disabled={hasEditingTodoItem}
                        >
                            <FontAwesomeIcon icon="trash-alt" fixedWidth={true}/>
                        </button>
                    </div>
                </div>
                <div className="TodoItem__mid">
                    <div className="TodoItem__description">
                        {props.description}
                    </div>
                </div>
                <div className="TodoItem__bottom align-self-start">
                    <div className="TodoItem__status d-flex flex-row">
                        {(props.completed) ? (
                            <div
                                className="TodoItem__completed d-flex flex-row align-items-center"
                                onClick={onClickToggleCompleted}
                            >
                                <div className="mr-1">Выполнена</div>
                                <FontAwesomeIcon icon="check-square"/>
                            </div>
                        ) : (
                            <div
                                className="TodoItem__uncompleted d-flex flex-row align-items-center"
                                onClick={onClickToggleCompleted}
                            >
                                <div className="mr-1">Невыполнена</div>
                                <FontAwesomeIcon icon="times-circle"/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;