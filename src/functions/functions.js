//Return new fruits position
export function returnNewFruitsArr(snakeArr, fruitsArr) {

    const totalFruits = Math.floor(Math.random() * (5 - 0 + 1)) + 0;

    if (fruitsArr.length < totalFruits) {

        let newFruit = Math.floor(Math.random() * (400 - 0 + 1)) + 0;

        if ((snakeArr.indexOf(newFruit) == -1) &&
            (fruitsArr.indexOf(newFruit) == -1)) {

            fruitsArr = [...fruitsArr, newFruit]
        }

        fruitsArr = returnNewFruitsArr(snakeArr, fruitsArr)
    }

    return fruitsArr;
}



//Return eaten fruit position in array or false
export function returnEatenFruitPosition(snakeArr, fruitsArr) {

    let fruitPosition = false;

    fruitsArr.map((fruit, i) => {

        if (snakeArr[snakeArr.length - 1] == fruit) {

            fruitPosition = i;
        }
    })

    return fruitPosition;
}



//Return new direction on key down
export function returnDirectionByKey(key) {

    let newDirection = false;

    if (key.code != undefined) {

        switch (key.code) {
            case 'ArrowLeft':
                newDirection = 'left';
                break;
            case 'ArrowUp':
                newDirection = 'up';
                break;
            case 'ArrowRight':
                newDirection = 'right';
                break;
            case 'ArrowDown':
                newDirection = 'down';
                break;
        }
    }

    return newDirection
}



//Ignore revers direction
export function ignoreReversDirection(newDirection, oldDirection) {

    let direction = true;

    switch (newDirection) {
        case 'up':
            if (oldDirection == 'down') direction = false;
            break;
        case 'down':
            if (oldDirection == 'up') direction = false;
            break;
        case 'left':
            if (oldDirection == 'right') direction = false;
            break;
        case 'right':
            if (oldDirection == 'left') direction = false;
            break;
    }

    return direction;
}



//Return next snake step
export function returnNextSnakeStep(oldSnake, direction) {

    let nextStep;

    switch (direction) {
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

    return nextStep
}



//Return true if game over
export function isGameOver(snakeArr) {

    let gameOver = false;

    snakeArr.map((item) => { //self crossing

        if (snakeArr.indexOf(item) != snakeArr.lastIndexOf(item)) {
            gameOver = true;
        }
    })

    //crossing borders
    if ((snakeArr[snakeArr.length - 1] < 0) ||
        (snakeArr[snakeArr.length - 1] > 400)) {
        gameOver = true;
    }

    if (((snakeArr[snakeArr.length - 2] + 1) % 20 == 0) &&
        ((snakeArr[snakeArr.length - 1] + 1) % 20 == 1)) {
        gameOver = true;
    }

    if (((snakeArr[snakeArr.length - 2] + 1) % 20 == 1) &&
        ((snakeArr[snakeArr.length - 1] + 1) % 20 == 0)) {
        gameOver = true;
    }

    return gameOver;
}