import React from 'react';
import css from './style.css';

export function Direction(props) {

	let directionArrow;

	switch (props.direction) {
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

		<div className="direction">{arrow}</div>

		)

}