import React from 'react';
import css from './style.css';

export default class Status extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {

        let cssClass = 'status status_position';
        if (this.props.status == 'Game over') cssClass = 'gameover';

        return (

            <div className={cssClass}>
				{this.props.status}
			</div>
        )
    }
}