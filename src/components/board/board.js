import React from 'react';
import css from './style.css';
import { Square } from '../square/square.js';


export default class Board extends React.Component {

    constructor(props) {
        super(props);
    }


    renderSquares() {
        
        let squares = Array(400).fill(null).map((square, i) => {
            return <Square key={i} cssClass='' />
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