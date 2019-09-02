import React from 'react';
import css from './style.css';

import Board from '../board/board.js';
import Button from '../button/button.js';
import Direction from '../direction/direction.js';

import {
    returnNewFruitsArr,
    returnNewDirectionByKey,
    returnNextSnakeStep,
    returnEatenFruitPosition
} from '../../functions/functions.js';


export default class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.initialState();

        this.changeDirections = this.changeDirections.bind(this);
        this.gameControls = this.gameControls.bind(this);
    }


    initialState() {

        const snakeArr = [1, 2, 3];

        return {
            snake: snakeArr,
            direction: 'right',
            board: Array(400).fill(null),
            fruits: returnNewFruitsArr(snakeArr, []),
        }
    }


    gameControls(command) {

        switch (command) {
            case 'start':
                this.animateSnake();
                break;
            case 'pause':
                clearInterval(this.movieSnake);
                break;
            case 'reset':
                this.setState(this.initialState());
                break;
        }
    }


    changeDirections(newDirectionOrKey) {

        newDirectionOrKey = returnNewDirectionByKey(newDirectionOrKey)

        if (newDirectionOrKey !== false) {
            this.setState({ direction: newDirectionOrKey })
        }
    }


    animateSnake() {

        this.movieSnake = setInterval(() => {

            const oldSnake = this.state.snake;
            const nextStep = returnNextSnakeStep(oldSnake, this.state.direction);
            let fruits = this.state.fruits.slice();
            let cutTail = 1;

            const eatenFruit = returnEatenFruitPosition(oldSnake, fruits);

            if (eatenFruit !== false) {

                fruits.splice(eatenFruit, 1);
                cutTail = 0;
            }

            let newSnake = oldSnake.slice(cutTail);
            newSnake = [...newSnake, nextStep];

            this.setState({
                snake: newSnake,
                fruits: returnNewFruitsArr(newSnake, fruits)
            })

        }, 200)

    }


    componentDidMount() {

        document.addEventListener('keydown', (event) => this.changeDirections(event))
    }


    render() {

        return (

            <div className = "game">

            <Board 
                snake={this.state.snake} 
                board={this.state.board}
                fruits={this.state.fruits}
            />

            <div className = "controls" >

            <div className="buttons-block">
                    <Button 
                        buttonName="Start"
                        command="start" 
                        gameControls={this.gameControls} />

                    <Button 
                        buttonName="Pause" 
                        command="pause" 
                        gameControls={this.gameControls} />

                    <Button 
                        buttonName="Reset" 
                        command="reset" 
                        gameControls={this.gameControls} />
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