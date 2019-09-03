import React from 'react';
import css from './style.css';

import Board from '../board/board.js';
import Button from '../button/button.js';
import Direction from '../direction/direction.js';
import Status from '../status/status.js';
import Score from '../score/score.js';

import {
    returnNewFruitsArr,
    returnDirectionByKey,
    ignoreReversDirection,
    returnNextSnakeStep,
    returnEatenFruitPosition,
    isGameOver
} from '../../functions/functions.js';


export default class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.initialState();

        this.changeDirection = this.changeDirection.bind(this);
        this.gameControls = this.gameControls.bind(this);
    }



    initialState() {

        const snakeArr = [21, 22, 23];

        return {
            snake: snakeArr,
            direction: 'right',
            board: Array(400).fill(null),
            fruits: returnNewFruitsArr(snakeArr, []),
            status: 'Pause',
            score: 0
        }
    }



    gameControls(command) {

        let status = this.state.status;

        switch (command) {

            case 'start':
                this.animateSnake();
                if (status != 'Game over') status = 'Play';
                break;

            case 'pause':
                clearInterval(this.movieSnake);
                if (status != 'Game over') status = 'Pause';
                break;

            case 'reset':
                clearInterval(this.movieSnake);
                this.setState(this.initialState());
                status = 'Pause';
                break;

            case 'gameover':
                clearInterval(this.movieSnake);
                status = 'Game over';
        }

        this.setState({ status: status })
    }



    changeDirection(directionOrKey) {

        let newDirection = directionOrKey;

        if (directionOrKey.code != undefined) {
            newDirection = returnDirectionByKey(directionOrKey)
        }

        const revers = ignoreReversDirection(newDirection, this.state.direction)

        if ((newDirection !== false) && (revers !== false)) {

            this.setState({ direction: newDirection })
        }
    }



    animateSnake() {

        if (this.state.status == 'Pause') {

            this.movieSnake = setInterval(() => {

                const oldSnake = this.state.snake;
                const nextStep = returnNextSnakeStep(oldSnake, this.state.direction);
                let fruits = this.state.fruits.slice();
                let cutTail = 1;
                let score = this.state.score;

                const eatenFruit = returnEatenFruitPosition(oldSnake, fruits);

                if (eatenFruit !== false) {

                    fruits.splice(eatenFruit, 1);
                    cutTail = 0;
                    score++;
                }

                let newSnake = oldSnake.slice(cutTail);
                newSnake = [...newSnake, nextStep];

                if (isGameOver(newSnake)) {

                    this.gameControls('gameover')

                } else {

                    this.setState({
                        snake: newSnake,
                        fruits: returnNewFruitsArr(newSnake, fruits),
                        score: score
                    })
                }

            }, 200)
        }
    }



    componentDidMount() {

        document.addEventListener('keydown', (event) => this.changeDirection(event))
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

            <Status status={this.state.status} />
            <Score score={this.state.score} />


            <div className = "direction-block" >

            <div className="direction-wrap-line">
                        
                <Direction 
                    direction="up"
                    directionState={this.state.direction}
                    changeDirection={this.changeDirection}
                />
                    
            </div> 

            <div className = "direction-wrap-line" >

                <Direction 
                    direction="left"
                    directionState={this.state.direction}
                    changeDirection={this.changeDirection} 
                />

                <Direction 
                    direction = "down"
                    directionState={this.state.direction}
                    changeDirection = { this.changeDirection }
                />

                <Direction 
                    direction = "right"
                    directionState={this.state.direction}
                    changeDirection = { this.changeDirection }
                /> 
            
            </div> 
            </div>

            </div>

            </div>
        )
    }
}