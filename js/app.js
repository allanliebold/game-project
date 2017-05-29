'use strict';

var player = {};
var floor = ['','','','','','','','','','',''];

var upArrow = document.getElementById('up-arrow');
var downArrow = document.getElementById('down-arrow');
var leftArrow = document.getElementById('left-arrow');
var rightArrow = document.getElementById('right-arrow');

function Tile(locX, locY){
  this.locX = locX;
  this.locY = locY;
  this.desc = '';
  this.isRoom = false;
  this.makeRoom = function(){
    this.isRoom = true;
  };
  this.visited = false;
  floor.push(this);
}

function mapGen(){
  var mapBox = document.getElementById('map-box');
  var map = document.createElement('div');
  var tiles = [];

  for(var row = 1; row < 9; row++){
    tiles.push('<ul>');
    for(var col = 1; col < 9; col++){
      tiles.push('<li id="' + row + col + '"></li>');
      new Tile(row, col);
    }
    for(var f = 0; f < 2; f++){
      floor.push('');
    }
    tiles.push('</ul>');
  }
  map.innerHTML = tiles.join('');
  mapBox.appendChild(map);
  console.log(floor);
}

function displayText(){
  var textBox = document.getElementById('text-box');
  textBox.innerHTML = player.currentLoc.desc;
}

function goToRoom(){
  player.currentLoc = floor[player.coord];
  console.log('X: ', player.currentLoc.locX);
  console.log('Y: ', player.currentLoc.locY);

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

function makeFloor(){
  floor[63].makeRoom();
  floor[63].desc = 'This is room 63';

  floor[64].makeRoom();
  floor[64].desc = 'You are in a narrow part of the tunnel.';

  floor[65].makeRoom();
  floor[65].desc = 'This is room 65';

  floor[53].makeRoom();
  floor[53].desc = 'This is room 53';

  floor[42].makeRoom();
  floor[42].desc = 'This is room 42';

  floor[43].makeRoom();
  floor[43].desc = 'This is room 43';

  floor[44].makeRoom();
  floor[44].desc = 'This is room 44';
}

function startGame(){
  mapGen();
  makeFloor();
  floor[74].makeRoom();
  floor[74].desc = 'You are standing in a dark tunnel.';
  player.coord = 74;
  player.currentLoc = floor[player.coord];
  goToRoom();
}

startGame();
