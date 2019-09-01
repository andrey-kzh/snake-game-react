import React from 'react';
import css from './style.css';

export default class Button extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {

        return (

            <button onClick={() => this.props.gameControls(this.props.command)}>
				{this.props.buttonName}
			</button>
        )
    }
}