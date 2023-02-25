let LivingCreature = require('./LivingCreature')
module.exports = class grassEater extends LivingCreature {


    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;

            var newGrasseater = new GrassEater(newX, newY);
            grassEaterArr.push(newGrasseater);
            this.energy = 10;
        }
    }

    eat() {
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        var emptyCells3 = this.chooseCell(3);
        var newCell3 = random(emptyCells3);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
            if (this.energy > 18) {
                this.mul()
            }
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

        } else if (newCell3) {
            this.energy += 5
            var newX = newCell3[0];
            var newY = newCell3[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
            if (this.energy > 18) {
                this.mul()
            }
            for (var i in mushArr) {
                if (newX == mushArr[i].x && newY == mushArr[i].y) {
                    mushArr.splice(i, 1);
                    break;
                }
            }
        } else {
            this.move()
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}




