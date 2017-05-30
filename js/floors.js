'use strict';
var mapBox = document.getElementById('map-box');
var floor = [];

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

function makeFloor(){
  floor[25].makeRoom();
  floor[25].desc = 'Room 25. Cavern NW';

  floor[26].makeRoom();
  floor[26].desc = 'Room 26. Cavern N';

  floor[27].makeRoom();
  floor[27].desc = 'Room 27. Cavern NE';

  floor[35].makeRoom();
  floor[35].desc = 'Room 35. Cavern W';

  floor[36].makeRoom();
  floor[36].desc = 'Room 36. Cavern Center';

  floor[37].makeRoom();
  floor[37].desc = 'Room 37. Cavern E';

  floor[42].makeRoom();
  floor[42].desc = 'A dead end. The only way is east.';

  floor[43].makeRoom();
  floor[43].desc = 'The tunnel splits east and west and narrows to the south.';

  floor[44].makeRoom();
  floor[44].desc = 'You see an opening to the east that leads into a large cavern. The tunnel winds its way to the west.';

  floor[45].makeRoom();
  floor[45].desc = 'Room 45. Cavern SW';

  floor[46].makeRoom();
  floor[46].desc = 'Room 46. Cavern S';

  floor[47].makeRoom();
  floor[47].desc = 'Room 47. Cavern SE. There is a tunnel opening on the south wall.';

  floor[53].makeRoom();
  floor[53].desc = 'You find yourself in a narrow stretch of tunnel that goes south and north.';

  floor[57].makeRoom();
  floor[57].desc = 'The tunnel continues south. The cavern opens up to the north.';

  floor[63].makeRoom();
  floor[63].desc = 'The tunnel bends from east to north.';

  floor[64].makeRoom();
  floor[64].desc = 'You are at a fork in the tunnel. It branches off to the east, west, and south.';

  floor[65].makeRoom();
  floor[65].desc = 'The ceiling appears to have caved in here. Through gaps in the rocks you can see that the tunnel continues to the east, but the way is impassable. Back west is your only option.';

  floor[67].makeRoom();
  floor[67].desc = 'The tunnel winds from north to west, but the way west is blocked by rocks.';

  floor[74].makeRoom();
  floor[74].desc = 'You are standing in a dark tunnel. It continues north.';
}
