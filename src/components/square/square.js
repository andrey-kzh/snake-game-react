import React from 'react';
import css from './style.css';

export default class Square extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {

		console.log('square render');

        return (
            <div className={`square ${this.props.cssClass}`}></div>
        )
    }

}