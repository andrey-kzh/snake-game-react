import React from 'react';
import css from './style.css';

import Board from '../board/board.js';
import {Button} from '../button/button.js';
import {Direction} from '../direction/direction.js';

export default class Game extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className = "game">
            
            <Board />

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