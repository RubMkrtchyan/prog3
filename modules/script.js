var socket = io();


function handleMatrix(matrix){
console.log(matrix)
}
socket.on('send matrix', handleMatrix)




/*
function generateMatrix(len, gr, mush, grEat, pred, st, cac) {
     matrix = [];
    for (let i = 0; i < len; i++) {
        matrix.push([])
        for (let j = 0; j < len; j++) {
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < gr; i++) {
         x = Math.floor(Math.random() * len);
         y = Math.floor(Math.random() * len);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
         x = Math.floor(Math.random() * len);
         y = Math.floor(Math.random() * len);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
        }
    }
    for (let i = 0; i < mush; i++) {
        let x = Math.floor(Math.random() * len);
        let y = Math.floor(Math.random() * len);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
        }
    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * len);
        let y = Math.floor(Math.random() * len);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
        }
    }
    for (let i = 0; i < st; i++) {
        let x = Math.floor(Math.random() * len);
        let y = Math.floor(Math.random() * len);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5;
        }
    }
    for (let i = 0; i < cac; i++) {
        let x = Math.floor(Math.random() * len);
        let y = Math.floor(Math.random() * len);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6;
        }
    }
    return matrix;
}
matrix = generateMatrix(40, 120, 45, 6, 4, 12, 10)
*/

side = 120;
/*
 grassArr = [];
 grassEaterArr = [];
 mushArr = []
 predatorArr = []
 stoneArr = []
 cactusArr = []*/
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y);
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 4) {
                let pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 3) {
                let mush = new Mushroom(x, y)
                mushArr.push(mush);
            } else if (matrix[y][x] == 5) {
                let st = new Stone(x, y)
                stoneArr.push(st);
            }
            else if (matrix[y][x] == 6){
                let cac = new Cactus(x, y)
                cactusArr.push(cac)
            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("purple")
            }
            else if (matrix[y][x] == 4) {
                fill("red")
            }
            else if (matrix[y][x] == 5) {
                fill("black")
            }
            else if (matrix[y][x] == 6) {
                fill("dark green")
            }
            rect(x * side, y * side, side, side);
        }

    }


    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in mushArr) {
        mushArr[i].mul()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in stoneArr) {
        stoneArr[i].mul()
    }
    for (let i in cactusArr) {
        cactusArr[i].mul()
    }

    if (predatorArr.length === 0) {
        for (let a = 0; a = predatorArr.legth; a++) {
            var emptyCells = this.chooseCell(0);
            var newCell = random(emptyCells);

            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 4;

                var newPred = new Predator(newX, newY);
                predatorArr[a].push(newPred);
                this.energy = 8;

            }
        }
    }
}
