// 1
function greet() {
  console.log("Hello!");
}

// 2
function showMessage() {
  console.log("This is a message!");
}

// 3
function logInfo() {
  console.log("Logging Information...");
}

// 4
function startGame() {
  console.log("Game Started!");
  endGame();
}
function endGame() {
  console.log("Game Over!");
}

// 5
function beginTask() {
  console.log("Task Started");
  finishTask();
}
function finishTask() {
  console.log("Task Finished");
}


greet(); // 1
showMessage();//2
logInfo(); //3
startGame(); //4
beginTask(); //5
