import React from "react";
import "../scss/App.scss"
import Header from "./Header";
import Main from "./Main";

type PropsType = {};

const App: React.FC<PropsType> = () => {
    return (
        <>
            <Header/>
            <Main/>
        </>
    )
};

export default App;