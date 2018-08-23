$(function(){

var svg = Pablo('#ground').svg({ //create svg with height and width
          width: 310,
          height: 310
      });
var area=new Array(5);

var pointX=10;
var pointY=10;


for (var i = 0; i < area.length; i++) {
  area[i]=new Array(5);
}

console.log(area);

var bombs=new Array();//array for placing bombs

for (var i = 0; i < 3; i++) {//Place 3 bombs
    var bomb={//bomb object
      //Randomly between 0 and 4 digits
      x:Math.floor(Math.random() * 5),
      y:Math.floor(Math.random() * 5)
    }

    bombs.push(bomb);
  }


console.log(bombs);

for (var x = 0; x < 5; x++) {
    for (var y = 0; y < 5; y++) {

      var square={
        value:0,
        rect:rectBuilder(pointX,pointY,'#dcdde1')
      }
        area[x][y]=square;

        for (var i = 0; i < bombs.length; i++) {
          if(x==bombs[i].x && y==bombs[i].y){
            var square={
              value:null,
              rect:rectBuilder(pointX,pointY,'#2f3640')
            }
          area[x][y]=square;
          }
        }
        pointY=pointY+60;
    }
    pointX=pointX+60;
    pointY=10;
}

function rectBuilder(x,y,color){
  var arc=svg.rect({//rectangle creation code
    x:x,//starting x
    y:y,//starting y
    width:50, height:50,//width and height
    fill: color,
});
}

  //console.log(bombs);
//  console.log(area);


});
