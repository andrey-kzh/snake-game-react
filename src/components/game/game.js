import React from 'react';
import css from './style.css';

import Board from '../board/board.js';
import { Button } from '../button/button.js';
import { Direction } from '../direction/direction.js';

export default class Game extends React.Component {

    constructor(props) {
        super(props);

        this.changeDirections = this.changeDirections.bind(this);

        this.state = {
            snake: [1, 2, 3],
            direction: 'right',
            board: Array(400).fill(null),
        }
    }


    changeDirections(newDirectionOrKey) {

        if (newDirectionOrKey.code != undefined) {

            switch (newDirectionOrKey.code) {
                case 'ArrowLeft':
                    newDirectionOrKey = 'left';
                    break;
                case 'ArrowUp':
                    newDirectionOrKey = 'up';
                    break;
                case 'ArrowRight':
                    newDirectionOrKey = 'right';
                    break;
                case 'ArrowDown':
                    newDirectionOrKey = 'down';
                    break;
                default:
                    newDirectionOrKey = false;
            }
        }

        if (newDirectionOrKey !== false) {
            this.setState({ direction: newDirectionOrKey })
        }
    }


    animateSnake() {

        const movieSnake = setInterval(() => {

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

        }, 300)

    }


    componentDidMount() {

        this.animateSnake(); //запускаем змею
        document.addEventListener('keydown', (event) => this.changeDirections(event))
    }


    render() {

        return (

            <div className = "game">

            <Board 
                snake={this.state.snake} 
                board={this.state.board}
            />

            <div className = "controls" >

            <div className="buttons-block">
                    <Button buttonName="Старт" />
                    <Button buttonName="Стоп" />
            </div>

            <div className = "direction-block" >

            <div className="direction-wrap-line">
                        
                <Direction 
                    direction="up"
                    directionState={this.state.direction}
                    changeDirection={this.changeDirections}
                />
                    
            </div> 

            <div className = "direction-wrap-line" >

                <Direction 
                    direction="left"
                    directionState={this.state.direction}
                    changeDirection={this.changeDirections} 
                />

                <Direction 
                    direction = "down"
                    directionState={this.state.direction}
                    changeDirection = { this.changeDirections }
                />

                <Direction 
                    direction = "right"
                    directionState={this.state.direction}
                    changeDirection = { this.changeDirections }
                /> 
            
            </div> 
            </div>

            </div>

            </div>
        )
    }
}