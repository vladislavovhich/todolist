import ReactDOM from 'react-dom';
import React from "react"
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./components/App";
import {Provider} from "react-redux";
import store from "./store/store"
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTimes, faCheckSquare, faClipboardList, faCog, faTrashAlt, faTimesCircle, faPlus} from "@fortawesome/free-solid-svg-icons";

library.add(faTimes, faCheckSquare, faClipboardList, faCog, faTrashAlt, faTimesCircle, faPlus)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
