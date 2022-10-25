import sound from "./sound/stone_touch_effect.mp3";
import volume from "./Speaker_Icon.svg";
import noVolume from "./no-audio.png";
import "./styles/index.scss";

// alert("Прошу, проверьте работу 26.10! Хочу доделать сохранения и анимацию");

let wrapper = document.createElement("div");
wrapper.className = "wrapper-canvas";
document.body.append(wrapper);

let title = document.createElement("h1");
title.className = "canvas-title";
wrapper.append(title);
title.textContent = "15 Puzzle";

let buttonsWrap = document.createElement("div");
buttonsWrap.className = "buttons-wrap";
wrapper.append(buttonsWrap);

let canvas = document.createElement("canvas");
canvas.className = "canvas";
wrapper.append(canvas);

let clicksCounter = document.createElement("div");
clicksCounter.className = "counter";
clicksCounter.textContent = "Clicks: 0";
buttonsWrap.append(clicksCounter);

let time = document.createElement("div");
time.className = "time";
time.textContent = "Time:";
let min = document.createElement("div");
time.append(min);
let divider = document.createElement("div");
divider.textContent = ":";
time.append(divider);
let sec = document.createElement("div");
time.append(sec);
buttonsWrap.append(time);

let reloadBtn = document.createElement("button");
reloadBtn.className = "reloadBtn";
reloadBtn.textContent = "Reload game";
reloadBtn.setAttribute("type", "button");
buttonsWrap.append(reloadBtn);

let sizeWrapper = document.createElement("div");
sizeWrapper.className = "size-wrapper";
wrapper.append(sizeWrapper);

for (let i = 3; i <= 8; i++) {
  let size = document.createElement("div");
  size.className = "size";
  size.textContent = `${i} x ${i}`;
  sizeWrapper.append(size);
}

let soundIco = document.createElement("img");
soundIco.className = "volumeBtn";
soundIco.src = volume;
buttonsWrap.append(soundIco);

let noSound = document.createElement("img");
noSound.className = "noVolumeBtn";
noSound.src = noVolume;
buttonsWrap.append(noSound);

const audio = new Audio();
audio.src = sound;

soundIco.addEventListener("click", () => {
  soundIco.style.display = "none";
  noSound.style.display = "block";
  audio.volume = 0;
});

noSound.addEventListener("click", () => {
  soundIco.style.display = "block";
  noSound.style.display = "none";
  audio.volume = 1;
});

let popup = document.createElement("dialog");
popup.className = "popup";
document.body.append(popup);

let victoryText = document.createElement("div");
victoryText.className = "victoryText";
popup.append(victoryText);

document.querySelectorAll(".size").forEach((el, index) => {
  el.addEventListener("click", () => {
    if (index === 0) {
      localStorage.setItem(
        "size",
        JSON.stringify([
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 0],
        ])
      );
      localStorage.setItem("sizeFor", "3");
      localStorage.setItem("sizeCheck", "2");
    } else if (index === 1) {
      localStorage.setItem(
        "size",
        JSON.stringify([
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10, 11, 12],
          [13, 14, 15, 0],
        ])
      );
      localStorage.setItem("sizeFor", "4");
      localStorage.setItem("sizeCheck", "3");
    } else if (index === 2) {
      localStorage.setItem(
        "size",
        JSON.stringify([
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20],
          [21, 22, 23, 24, 0],
        ])
      );
      localStorage.setItem("sizeFor", "5");
      localStorage.setItem("sizeCheck", "4");
    } else if (index === 3) {
      localStorage.setItem(
        "size",
        JSON.stringify([
          [1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12],
          [13, 14, 15, 16, 17, 18],
          [19, 20, 21, 22, 23, 24],
          [25, 26, 27, 28, 29, 30],
          [31, 32, 33, 34, 35, 0],
        ])
      );
      localStorage.setItem("sizeFor", "6");
      localStorage.setItem("sizeCheck", "5");
    } else if (index === 4) {
      localStorage.setItem(
        "size",
        JSON.stringify([
          [1, 2, 3, 4, 5, 6, 7],
          [8, 9, 10, 11, 12, 13, 14],
          [15, 16, 17, 18, 19, 20, 21],
          [22, 23, 24, 25, 26, 27, 28],
          [29, 30, 31, 32, 33, 34, 35],
          [36, 37, 38, 39, 40, 41, 42],
          [43, 44, 45, 46, 47, 48, 0],
        ])
      );
      localStorage.setItem("sizeFor", "7");
      localStorage.setItem("sizeCheck", "6");
    } else if (index === 5) {
      localStorage.setItem(
        "size",
        JSON.stringify([
          [1, 2, 3, 4, 5, 6, 7, 8],
          [9, 10, 11, 12, 13, 14, 15, 16],
          [17, 18, 19, 20, 21, 22, 23, 24],
          [25, 26, 27, 28, 29, 30, 31, 32],
          [33, 34, 35, 36, 37, 38, 39, 40],
          [41, 42, 43, 44, 45, 46, 47, 48],
          [49, 50, 51, 52, 53, 54, 55, 56],
          [57, 58, 59, 60, 61, 62, 63, 0],
        ])
      );
      localStorage.setItem("sizeFor", "8");
      localStorage.setItem("sizeCheck", "7");
    }
    location.reload();
  });
});

let S = "00",
  M = "00";
setInterval(function () {
  S = +S + 1;
  //Если результат меньше 10, прибавляем впереди строку '0'
  if (S < 10) {
    S = "0" + S;
  }
  if (S == 60) {
    S = "00";
    //Как только секунд стало 60, добавляем +1 к минутам
    M = +M + 1;
    //Дальше то же самое, что и для секунд
    if (M < 10) {
      M = "0" + M;
    }
  }
  sec.textContent = S;
  min.textContent = M;
}, 1000);

window.onload = function () {
  localStorage.setItem(
    "sizeDef",
    JSON.stringify([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 0],
    ])
  );
  localStorage.setItem("sizeForDef", "4");
  localStorage.setItem("sizeCheckDef", "3");

  function defaultState() {
    if (!localStorage.getItem("size")) {
      return JSON.parse(localStorage.getItem("sizeDef"));
    } else {
      return JSON.parse(localStorage.getItem("size"));
    }
  }

  function defaultStateFor() {
    if (!localStorage.getItem("size")) {
      return localStorage.getItem("sizeForDef");
    } else {
      return localStorage.getItem("sizeFor");
    }
  }

  function defaultStateCheck() {
    if (!localStorage.getItem("size")) {
      return localStorage.getItem("sizeCheckDef");
    } else {
      return localStorage.getItem("sizeCheck");
    }
  }

  function Game(context, cellSize) {
    this.state = defaultState(); // размер поля
    this.color = "rgb(106, 198, 184)"; // цвет ячейки
    this.context = context; // context отвечает за вид ячейки
    this.cellSize = cellSize;

    this.clicks = 0;
  }
  Game.prototype.getClicks = function () {
    return this.clicks;
  };

  Game.prototype.cellView = function (x, y) {
    this.context.fillStyle = this.color;
    this.context.fillRect(x + 1, y + 1, this.cellSize - 2, this.cellSize - 2); // x/y + 1 дает отступы от края, cellSize-2 тоже дает отступы из-за уменьшения размеров самой клетки
  };

  Game.prototype.numView = function () {
    // стили цифр
    this.context.font = "bold " + this.cellSize / 2 + "px Sans-serif";
    this.context.fillStyle = "#fff";
    this.context.textAlign = "center";
    this.context.textBaseline = "middle";
  };

  Game.prototype.drawGame = function () {
    // отрисовка стилей клеток (всех)
    for (let i = 0; i < defaultStateFor(); i++) {
      for (let j = 0; j < defaultStateFor(); j++) {
        if (this.state[i][j] > 0) {
          this.cellView(j * this.cellSize, i * this.cellSize); // передаем координаты в зависимости от размеров клетки
          this.numView(); // вызываем из прототипа стили (можно заменить на содержимое функции)
          this.context.fillText(
            // чтобы текст был по центру в клетке
            this.state[i][j],
            j * this.cellSize + this.cellSize / 2,
            i * this.cellSize + this.cellSize / 2
          );
        }
      }
    }
  };

  Game.prototype.getNullCell = function () {
    for (let i = 0; i < defaultStateFor(); i++) {
      for (let j = 0; j < defaultStateFor(); j++) {
        if (this.state[i][j] === 0) {
          return { x: j, y: i };
        }
      }
    }
  };

  Game.prototype.move = function (x, y) {
    let nullCell = this.getNullCell();
    let canMoveHorizontal =
      (x - 1 == nullCell.x || x + 1 == nullCell.x) && y == nullCell.y;
    let canMoveVertical =
      (y - 1 == nullCell.y || y + 1 == nullCell.y) && x == nullCell.x;

    if (canMoveHorizontal || canMoveVertical) {
      this.state[nullCell.y][nullCell.x] = this.state[y][x];
      this.state[y][x] = 0;
      this.clicks++;
      audio.play();
    }
  };

  function getRandomBool() {
    if (Math.floor(Math.random() * 2) === 0) {
      return true;
    }
  }

  Game.prototype.mix = function (count) {
    let x, y;
    for (let i = 0; i < count; i++) {
      let nullCell = this.getNullCell();
      // рандомим направление перемешивания
      let verticalMove = getRandomBool();
      let upLeft = getRandomBool();

      if (verticalMove) {
        x = nullCell.x;
        if (upLeft) {
          y = nullCell.y - 1;
        } else {
          y = nullCell.y + 1;
        }
      } else {
        y = nullCell.y;
        if (upLeft) {
          x = nullCell.x - 1;
        } else {
          x = nullCell.x + 1;
        }
      }
      if (
        0 <= x &&
        x <= defaultStateCheck() &&
        0 <= y &&
        y <= defaultStateCheck()
      ) {
        this.move(x, y);
      }
    }
    this.clicks = 0;
  };

  Game.prototype.victory = function () {
    let combination = defaultState();
    let res = true;
    for (let i = 0; i < defaultStateFor(); i++) {
      for (let j = 0; j < defaultStateFor(); j++) {
        if (combination[i][j] != this.state[i][j]) {
          res = false;
          break;
        }
      }
    }
    return res;
  };

  canvas.width = 320;
  canvas.height = 320;

  let context = canvas.getContext("2d");
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);

  let cellSize = canvas.width / defaultStateFor();

  let game = new Game(context, cellSize);
  game.mix(700);

  let arr = game.state.flat();
  console.log("изнач", arr);

  function countInversions(state) {
    let x = 0;
    for (let i = 0; i < state.length; i++) {
      const current = state.filter((el, index) => {
        return el < state[i] && index > i;
      }).length;
      x += current;
    }
    return localStorage.getItem("sizeFor") % 2 === 0
      ? x
      : x + Math.floor(arr.indexOf(0) / localStorage.getItem("sizeFor")) + 1;
  }

  if (!countInversions(arr)) countInversions();
  while (countInversions(arr) % 2 !== 0) {
    game.mix(100);
    arr = game.state.flat();
    console.log(arr);
    countInversions(arr);
  }
  console.log("конечный", arr);

  game.drawGame();

  canvas.onclick = function (e) {
    let x = ((e.pageX - canvas.offsetLeft) / cellSize) | 0;
    let y = ((e.pageY - canvas.offsetTop) / cellSize) | 0;
    clicksCounter.textContent = `Clicks: ${game.getClicks() + 1}`;
    onEvent(x, y);
  };

  canvas.ontouchend = function (e) {
    let x = ((e.touches[0].pageX - canvas.offsetLeft) / cellSize) | 0;
    let y = ((e.touches[0].pageY - canvas.offsetTop) / cellSize) | 0;
    clicksCounter.textContent = `Clicks: ${game.getClicks() + 1}`;
    onEvent(x, y);
  };

  function onEvent(x, y) {
    game.move(x, y);
    context.fillRect(0, 0, canvas.width, canvas.height);
    game.drawGame();
    if (game.victory()) {
      popup.show();
      victoryText.textContent = `Hooray!You solved the puzzle in ${M}:${S}  and ${game.getClicks()} moves! `;
      setTimeout(() => {
        popup.close();
        game.clicks = 0
        clicksCounter.textContent = `Clicks: ${game.clicks}`;
        S = "00";
        M = "00";
      }, 5000);
      game.mix(700);
      context.fillRect(0, 0, canvas.width, canvas.height);
      game.drawGame(context, cellSize);
    }
  }
  const reload = () => {
    context.fillRect(0, 0, canvas.width, canvas.height);
    game.mix(700);
    game.drawGame();
    game.clicks = 0;
    clicksCounter.textContent = `Clicks: ${game.clicks}`;
    S = "00";
    M = "00";
  };
  reloadBtn.addEventListener("click", reload);
};
