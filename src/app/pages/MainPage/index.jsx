import React from 'react';
import {observer} from 'mobx-react';
import style from './style.scss';

// TODO: add PropTypes and TypeScript

@observer
export default class MainPage extends React.Component {
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
