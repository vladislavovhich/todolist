import React from "react";
import TodoPanel from "./Todo/TodoPanel";

type PropsType = {};

const Main: React.FC<PropsType> = (props) => {
    return (
        <main className="Main py-3">
            <div className="container">
                <TodoPanel />
            </div>
        </main>
    )
};

export default Main;