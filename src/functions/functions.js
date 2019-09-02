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


//Return eaten fruit position in array of false
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
export function returnNewDirectionByKey(key) {

    let newDirection = true;

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
            default:
                newDirection = false;
                break;
        }
    }

    return newDirection
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