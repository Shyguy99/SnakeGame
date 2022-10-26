
function run() {
  for (let i = 0; i <= 2515; i++) {
    var div = document.createElement("div");
    div.id = `${i + 1}`;
    div.className = "border pad";
    div.style.backgroundColor = "black";
    div.style.width = "15px";
    div.style.height = "15px";
    div.style.minHeight = "15px";
    div.style.minWidth = "15px";
    div.style.marginRight = "2px";
    div.style.marginTop = "2px";
    div.style.borderRadius = "50%";
    div.style.float = "left";
    div.style.backgroundColor = "white";

    document.body.appendChild(div);
  }

  let snake = [1];
  function createSnake(food, tail, snake) {
    if (tail !== -1) {
      let tail_cell = document.getElementById(`${tail.toString()}`);

      tail_cell.style.backgroundColor = "white";
    }
    for (let j = 0; j < snake.length; j++) {
      let cell = document.getElementById(`${snake[j].toString()}`);
      cell.style.backgroundColor = "green";
    }
    let food_cell = document.getElementById(`${food.toString()}`);

    food_cell.style.backgroundColor = "red";

    let head_cell = document.getElementById(`${snake[snake.length-1].toString()}`);

    head_cell.style.backgroundColor = "black";
  }

  let direction = "r";
  let food = Math.floor(Math.random() * 2510);
  function move() {
    setInterval(function () {
      var head = snake[snake.length - 1];
      var tail = snake[0];
      console.log();
      if (direction === "r") {
        if (head + 1 !== food) snake.shift();
        else {
          tail = -1;
          food = Math.floor(Math.random() * 2510);
        }
        var addUp=(Math.floor(((head+1)/74))-1)*74+((head+1)%74)
        console.log(addUp)
        snake.push(head+1);
      } else if (direction === "l") {
        if (head - 1 !== food) snake.shift();
        else {
          tail = -1;
          food = Math.floor(Math.random() * 2510);
        }
        snake.push(head - 1);
      } else if (direction === "u") {
        if (head - 74 !== food) snake.shift();
        else {
          tail = -1;
          food = Math.floor(Math.random() * 2510);
        }
        snake.push(head - 74);
      } else if (direction === "d") {
        if (head + 74 !== food) snake.shift();
        else {
          tail = -1;
          food = Math.floor(Math.random() * 2510);
        }
        snake.push((head + 74) % 2515);
      }
      console.log(food, "foooooooooooood", snake);
      createSnake(food,tail, snake);
    }, 50);
  }
  move();

  document.body.addEventListener("keydown", function (event) {
    const key = event.key;
    switch (key) {
      case "ArrowLeft":
        if (direction !== "r") {
          direction = "l";
        }

        break;
      case "ArrowRight":
        if (direction !== "l") direction = "r";
        break;
      case "ArrowUp":
        if (direction !== "d") direction = "u";
        break;
      case "ArrowDown":
        if (direction !== "u") direction = "d";
        break;
    }
  });
}
run();
