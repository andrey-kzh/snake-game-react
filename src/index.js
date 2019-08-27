import React from 'react';
import ReactDOM from 'react-dom';
import css from './styles.css';
import Game from './components/game/game.js';


class App extends React.Component {
    render() {
        return (
                <Game />
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
