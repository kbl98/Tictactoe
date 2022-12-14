let fields = [];
let currentShape = "circle";
let gameover = false;
let winnerPerson;

function changeCurrentShape() {
  if (currentShape == "cross") {
    currentShape = "circle";
    document.getElementById("player-1").classList.add("bg-active");
    document.getElementById("player-2").classList.remove("bg-active");
  } else {
    currentShape = "cross";
    document.getElementById("player-2").classList.add("bg-active");
    document.getElementById("player-1").classList.remove("bg-active");
  }
}

function fillShape(i) {
  if (!fields[i] && !gameover) {
    changeCurrentShape();
    fields[i] = currentShape;
    draw();
    getWinner();
  }
}

function draw() {
  for (let i = 0; i < fields.length; i++) {
    if (fields[i] == "cross") {
      document.getElementById("cross" + i).classList.remove("d-none");
    }
    if (fields[i] == "circle") {
      document.getElementById("circle" + i).classList.remove("d-none");
    }
  }
}

function getWinner() {
  let winner;
  checkHorizotal();
  checkVertical();
  checkVertical();
  if (!winner) {
    checkListComplete();
  }
  setWinner(winner, gameover);
}

function checkHorizotal() {
  if (fields[0] == fields[1] && fields[0] == fields[2] && fields[0]) {
    winner = fields[0];
    document.getElementById("line0").style.transform = "scaleX(1.3)";
  }
  if (fields[3] == fields[4] && fields[3] == fields[5] && fields[3]) {
    winner = fields[3];
    document.getElementById("line1").style.transform = "scaleX(1.3)";
  }
  if (fields[6] == fields[7] && fields[6] == fields[8] && fields[6]) {
    winner = fields[6];
    document.getElementById("line2").style.transform = "scaleX(1.3)";
  }
}

function checkVertical() {
  if (fields[0] == fields[3] && fields[0] == fields[6] && fields[0]) {
    winner = fields[0];
    document.getElementById("line3").style.transform =
      "scaleX(1.3) rotate(90deg)";
  }
  if (fields[1] == fields[4] && fields[1] == fields[7] && fields[1]) {
    winner = fields[1];
    document.getElementById("line4").style.transform =
      "scaleX(1.3) rotate(90deg)";
  }
  if (fields[2] == fields[5] && fields[2] == fields[8] && fields[2]) {
    winner = fields[2];
    document.getElementById("line5").style.transform =
      "scaleX(1.3) rotate(90deg)";
  }
}

function checkDiagonal() {
  if (fields[0] == fields[4] && fields[0] == fields[8] && fields[0]) {
    winner = fields[0];
    document.getElementById("line6").style.transform =
      "scaleX(1.3) rotate(53deg)";
  }
  if (fields[2] == fields[4] && fields[2] == fields[6] && fields[2]) {
    winner = fields[2];
    document.getElementById("line7").style.transform =
      "scaleX(1.3) rotate(-53deg)";
  }
}

function setWinner(winner, gameover) {
  if (winner || gameover) {
    if (winner == "cross") {
      winnerPerson = "Player 1";
    } else if (winner == "circle") {
      winnerPerson = "Player 2";
    } else {
      winnerPerson = "niemand";
    }
    gameover = true;
    setGameover();
  }
}

function setGameover() {
  setTimeout(function () {
    document.getElementById(
      "winner"
    ).innerHTML = `<b>Gewinner ist ${winnerPerson}!</b>`;
    document.getElementById("winner").classList.remove("d-none");
    document.getElementById("gameover").classList.remove("d-none");
    document.getElementById("restart").classList.remove("d-none");
    document.getElementById("winner").classList.remove("d-none");
  }, 1000);
}

function restart() {
  fields = [];
  currentShape = "circle";
  gameover = false;
  end = false;
  winnerPerson = "";
  currentShape = "circle";
  resetClasslists();
}

function resetClasslists() {
  for (let i = 0; i < 9; i++) {
    document.getElementById("circle" + i).classList.add("d-none");
    document.getElementById("cross" + i).classList.add("d-none");
  }
  for (let i = 0; i < 8; i++) {
    document.getElementById("line" + i).style.transform = "scaleX(0.0)";
  }
  document.getElementById("gameover").classList.add("d-none");
  document.getElementById("restart").classList.add("d-none");
  document.getElementById("winner").classList.add("d-none");
  document.getElementById("player-1").classList.add("bg-active");
}

function checkListComplete() {
  let check = 0;
  for (let i = 0; i < 9; i++) {
    if (fields[i] == "cross" || fields[i] == "circle") {
      check++;
    }
  }
  if (check == 9) {
    gameover = true;
  }
}
