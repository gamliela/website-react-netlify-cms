import * as React from "react";
import {observer} from "mobx-react";
import style from './style.scss';
import {AppManager} from "../../AppManager";

export interface MainPageProps {
    appManager: AppManager;
}

@observer
export default class MainPage extends React.Component<MainPageProps> {
    render() {
        const appManager = this.props.appManager;
        return (
            <div>
                <h1 className={style.header}>
                    Hello World!
                </h1>
                <span>version: {appManager.version}</span>
            </div>
        );
    }
}
