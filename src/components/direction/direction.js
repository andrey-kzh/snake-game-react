import React from 'react';
import css from './style.css';

export default class Direction extends React.PureComponent {

    constructor(props) {
        super(props)
    }


    render() {

        let cssClass = 'direction direction_position'

        if (this.props.direction == this.props.directionState) { 
            cssClass = 'direction-active direction-active_position' 
        }


        let directionArrow;

        switch (this.props.direction) {
            case 'up':
                directionArrow = '8593';
                break;
            case 'down':
                directionArrow = '8595';
                break;
            case 'left':
                directionArrow = '8592';
                break;
            case 'right':
                directionArrow = '8594';
                break;
            default:
                directionArrow = '';
                break;
        }

        const arrow = String.fromCharCode(directionArrow);

        return (

            <div 
				onClick={() => this.props.changeDirection(this.props.direction)} 
				className={cssClass}>
				{arrow}
			</div>

        )
    }

}