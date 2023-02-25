
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static("modules"));
app.get('/', function (req, res) {
res.redirect('index.html');
});
server.listen(3000);
matrix = [];
matrix = [1, 1, 1]
io.on('connection', function (socket) {
socket.emit("send matrix",matrix);
});

grassArr = []
cactusArr = []
grassEaterArr = []
predatorArr = []
mushArr = []
stoneArr = []





 LivingCreature = require('./modules/LivingCreature')
 Cactus = require('./modules/Cactus')
 grass = require('./modules/grass')
 mush = require('./modules/mush')
 predator = require('./modules/predator')
 stone = require('./modules/stone')


 function createObject(len, gr, mush, grEat, pred, st, cac) {
   matrix = [];
  for (let i = 0; i < len; i++) {
      matrix.push([])
      for (let j = 0; j < len; j++) {
          matrix[i].push(0) 
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

 }



