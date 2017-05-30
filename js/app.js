'use strict';

var player = {};

var startBtn = document.getElementById('start');
var upArrow = document.getElementById('up-arrow');
var downArrow = document.getElementById('down-arrow');
var leftArrow = document.getElementById('left-arrow');
var rightArrow = document.getElementById('right-arrow');


function displayText(){
  var textBox = document.getElementById('text-box');
  textBox.innerHTML = player.currentLoc.desc;
}

function goToRoom(){
  player.currentLoc = floor[player.coord];

  displayText();
  checkTiles();

  floor[player.coord].visited = true;

  var current = updateCurrent();
  current.setAttribute('class', 'visited');
  current.innerHTML ='<span>&#9679;</span>';
}

function checkTiles(){
  var tileNorth = player.coord - 10;
  var tileSouth = player.coord + 10;
  var tileEast = player.coord + 1;
  var tileWest = player.coord - 1;

  if(floor[tileNorth].isRoom) {
    upArrow.disabled = false;
  } else {
    upArrow.disabled = true;
  }

  if(floor[tileSouth].isRoom) {
    downArrow.disabled = false;
  } else {
    downArrow.disabled = true;
  }

  if(floor[tileEast].isRoom) {
    rightArrow.disabled = false;
  } else {
    rightArrow.disabled = true;
  }

  if(floor[tileWest].isRoom) {
    leftArrow.disabled = false;
  } else {
    leftArrow.disabled = true;
  }
}

function updateCurrent(){
  return document.getElementById(JSON.stringify(player.coord));
}

function goNorth(){
  var current = updateCurrent();
  current.innerHTML = '';
  player.coord -= 10;
  goToRoom();
}

function goSouth(){
  var current = updateCurrent();
  current.innerHTML = '';
  player.coord += 10;
  goToRoom();
}

function goEast(){
  var current = updateCurrent();
  current.innerHTML = '';
  player.coord += 1;
  goToRoom();
}

function goWest(){
  var current = updateCurrent();
  current.innerHTML = '';
  player.coord -= 1;
  goToRoom();
}

function startGame(){
  startBtn.innerHTML = 'RESET';
  startBtn.setAttribute('onClick', 'reset()');
  floor = ['','','','','','','','','','',''];
  mapGen();
  makeFloor();
  player.coord = 74;
  player.currentLoc = floor[player.coord];
  goToRoom();
}

function reset(){
  mapBox.innerHTML = '';
  startGame();
}
