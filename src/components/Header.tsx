import React from "react";
import "../scss/Header.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type PropsType = {};

const Header: React.FC<PropsType> = () => {
    return (
        <header className="Header">
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <div className="Logo d-flex flex-row align-items-center justify-content-center">
                    <div className="mr-1">TodoListApp</div>
                    <FontAwesomeIcon icon="clipboard-list" fixedWidth={true}/>
                </div>
            </div>
        </header>
    )
};

export default Header;