import React from 'react';
import css from './style.css';

import Board from '../board/board.js';
import { Button } from '../button/button.js';
import { Direction } from '../direction/direction.js';

export default class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            snake: [1, 2, 3],
            direction: 'right',
        }
    }

    animateSnake() {

        setInterval(() => {

            const oldSnake = this.state.snake;
            let nextStep;

            switch (this.state.direction) {
                case 'up':
                    nextStep = oldSnake[oldSnake.length - 1] - 20;
                    break;
                case 'down':
                    nextStep = oldSnake[oldSnake.length - 1] + 20;
                    break;
                case 'left':
                    nextStep = oldSnake[oldSnake.length - 1] - 1;
                    break;
                case 'right':
                    nextStep = oldSnake[oldSnake.length - 1] + 1;
                    break;
            }

            let newSnake = oldSnake.slice(1);
            newSnake = [...newSnake, nextStep];

            this.setState({ snake: newSnake })

        }, 1000)
    }


    componentDidMount() {

        this.animateSnake(); //запускаем змею

    }


    render() {

        return (

            <div className = "game">
            
            <Board snake={this.state.snake} />

            <div className="controls">

                <div className="buttons-block">
                    <Button buttonName="Старт" />
                    <Button buttonName="Стоп" />
                </div>

                <div className="direction-block">
                    <div className="direction-wrap-line">
                        <Direction direction="up" />
                    </div>
                    <div className="direction-wrap-line">
                        <Direction direction="left" />
                        <Direction direction="down" />
                        <Direction direction="right" />
                    </div>
                </div>
                
            </div>

            </div>
        )
    }
}