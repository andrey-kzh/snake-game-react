import React from 'react';
import css from './style.css';

import Square from '../square/square.js';


export default class Board extends React.Component {

    constructor(props) {
        super(props);
    }


    renderSquares() {

        let squareClass;
        let squares = this.props.board.map((square, i) => {

            squareClass = '';
            if (this.props.fruits.indexOf(i) != -1) squareClass = 'fruit'; //paint fruit
            if (this.props.snake.indexOf(i) != -1)  squareClass = 'snake'; //paint snake
            
            return <Square key={i} cssClass={squareClass} />
        })

        return squares;
    }


    render() {

        return (
            <div className="board">
                {this.renderSquares()}
            </div>
        );

    }
}