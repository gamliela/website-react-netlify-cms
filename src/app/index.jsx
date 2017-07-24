import React from 'react';
import ReactDOM from 'react-dom';
import {useStrict} from "mobx/lib/mobx";
import MainPage from "./pages/MainPage";
import {AppManager} from "./AppManager";

// mobx configuration
useStrict(true);

// create our app manager
const appManager = new AppManager();

ReactDOM.render(
    <MainPage appManager={appManager}/>,
    document.getElementById('app-root'));
