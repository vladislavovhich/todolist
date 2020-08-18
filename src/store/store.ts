import {combineReducers, createStore} from "redux";
import todoReducer from "./todoReducer";

const reducers = combineReducers({
    todoPage: todoReducer
});

const store = createStore(reducers);

export type StateType = ReturnType<typeof reducers>;
export type CombineActions<T> = T extends { [key: string]: infer U } ? U : never;

// @ts-ignore
window.store = store

export default store;