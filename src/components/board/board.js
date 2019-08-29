import React from 'react';
import css from './style.css';
import { Square } from '../square/square.js';


export default class Board extends React.Component {

    constructor(props) {
        super(props);
    }


    renderSquares() {
        
        let squareClass;
        let squares = Array(400).fill(null).map((square, i) => {

            (this.props.snake.indexOf(i) != -1) ? squareClass = 'snake' : squareClass = ''; //рисуем змею
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