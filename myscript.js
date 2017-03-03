var cont="";
var car="";
var x=0;
var sign=0;
function fSeven(){
  cont=cont+"7";
  car=car+"7";
}
function fEight(){
  cont=cont+"8";
  car=car+"8";
}
function fSix(){
  cont=cont+"6";
  car=car+"6";
}
function fNine(){
  cont=cont+"9";
  car=car+"9";
}
function fFive(){
  cont=cont+"5";
  car=car+"5";
}
function fFour(){
  cont=cont+"4";
  car=car+"4";
}
function fOne(){
  cont=cont+"1";
  car=car+"1";
}
function fTwo(){
  cont=cont+"2";
  car=car+"2";
}
function fThree(){
  cont=cont+"3";
  car=car+"3";
}
function fZero(){
  cont=cont+"0";
  car=car+"0";
}
function fPoint(){
  cont=cont+".";
  car=car+".";
}
function fMult(){
  cont=cont+" X ";
  sign=3;
  var num=Number(car);
  x=num;
  car="";
}
function fSub(){
  cont=cont+" - ";
  sign=1;
  var num=Number(car);
  x=num;
  car="";
}
function fDiv(){
  cont=cont+" / ";
  sign=4;
  var num=Number(car);
  x=num;
  car="";
}
function fPlus(){
  cont=cont+" + ";
  sign=2;
  var num=Number(car);
  x=num;
  car="";
}
function bSqrt() {
  cont=Math.sqrt(cont);
}
//function bCube() {
//    var n=Number(cont);
//    cont=n*n*n;
//  }
function fClear(){
  cont="";
}
function fSquare(){
  var n=Number(cont);
  cont=n*n;
}
function fEqual(){
  var y=Number(car);
  // cont=x+y;
  // x=0;
  // car="";
  // y=0;
  if (sign===1) {
    cont=x-y;
    x=0;
    car="";
    y=0;
  }
  else if(sign===2){
    cont=x+y;
    x=0;
    car="";
    y=0;
  }
  else if(sign===3){
    cont=x*y;
    x=0;
    car="";
    y=0;
  }
  else if(sign===4){
    cont=x/y;
    x=0;
    car="";
    y=0;
  }
}
