import React from 'react';
import css from './style.css';

export default class Score extends React.PureComponent {

    constructor(props) {
        super(props)
    }

    render() {

        return (

            <div className='score score_position'>
				{this.props.score}
			</div>
        )
    }
}