var canvas = document.querySelector("canvas");

var context;
    context = canvas.getContext("2d");
  
var posc = [{name:"A", big:85},{name: "B", big:255},{name: "C", big:425},{name: "D", big:595},{name: "E", big:765},{name: "F", big:935},{name:"G", big:935},{name: "H", big:765},{name: "I", big:595},{name: "J", big:425},{name: "K", big:255},{name: "L", big:85}];
var posy = [175,500];

// STATES OF THE TWO SIDES OF THE BOARD IN TWO SEPERATE ARRAY OBJECTS

var north = [{name:"G", state:0, balls:4, xlow:855, xhi:1015,center:[{exx:915, yy:155},{exx:955, yy:155},{exx:915, yy:195},{exx:955, yy:195},{exx:935, yy:175},{exx:935, yy:115},{exx:935, yy:225},{exx:915, yy:115},{exx:915, yy:225},{exx:955, yy:115},{exx:955, yy:225},{exx:905, yy:175},{exx:965, yy:175}]},
{name:"H", state:0,balls:4 ,xlow:685, xhi:845, center:[{exx:745, yy:155},{exx:785, yy:155},{exx:745, yy:195},{exx:785, yy:195},{exx:765, yy:175},{exx:765, yy:115},{exx:765, yy:225},{exx:745, yy:115},{exx:745, yy:225},{exx:785, yy:115},{exx:785, yy:225},{exx:735, yy:175},{exx:795, yy:175}]},
{name:"I", state:0,balls:4, xlow:515, xhi:675, center:[{exx:575, yy:155},{exx:615, yy:155},{exx:575, yy:195},{exx:615, yy:195},{exx:595, yy:175},{exx:595, yy:115},{exx:595, yy:225},{exx:575, yy:115},{exx:575, yy:225},{exx:615, yy:115},{exx:615, yy:225},{exx:565, yy:175},{exx:625, yy:175}]},
{name:"J", state:0,balls:4, xlow:345, xhi:505, center:[{exx:405, yy:155},{exx:445, yy:155},{exx:405, yy:195},{exx:445, yy:195},{exx:425, yy:175},{exx:425, yy:115},{exx:425, yy:225},{exx:405, yy:115},{exx:405, yy:225},{exx:445, yy:115},{exx:445, yy:225},{exx:395, yy:175},{exx:455, yy:175}]},
{name:"K", state:0,balls:4, xlow:175, xhi:335, center:[{exx:235, yy:155},{exx:275, yy:155},{exx:235, yy:195},{exx:275, yy:195},{exx:255, yy:175},{exx:255, yy:115},{exx:255, yy:225},{exx:235, yy:115},{exx:235, yy:225},{exx:275, yy:115},{exx:275, yy:225},{exx:285, yy:175},{exx:225, yy:175}]},
{name:"L", state:0,balls:4, xlow:5, xhi:165, center:[{exx:65, yy:155},{exx:105, yy:155},{exx:65, yy:195},{exx:105, yy:195},{exx:85, yy:175},{exx:85, yy:115},{exx:85, yy:225},{exx:65, yy:115},{exx:65, yy:225},{exx:105, yy:115},{exx:105, yy:225},{exx:55, yy:175},{exx:115, yy:175}]}];



var south = [{name:"A", state:0, balls:4, xlow:5, xhi:165, center:[{exx:65, yy:480},{exx:105, yy:480},{exx:65, yy:520},{exx:105, yy:520},{exx:85, yy:500},{exx:85, yy:440},{exx:85, yy:550},{exx:65, yy:440},{exx:65, yy:550},{exx:105, yy:440},{exx:105, yy:550},{exx:55, yy:500},{exx:115, yy:500}]},
{name:"B", state:0,balls:4,xlow:175, xhi:335,center:[{exx:235, yy:480},{exx:275, yy:480},{exx:235, yy:520},{exx:275, yy:520},{exx:255, yy:500},{exx:255, yy:440},{exx:255, yy:550},{exx:235, yy:440},{exx:235, yy:550},{exx:275, yy:440},{exx:275, yy:550},{exx:285, yy:500},{exx:225, yy:500}]},
{name:"C", state:0,balls:4,xlow:345, xhi:505, center:[{exx:405, yy:480},{exx:445, yy:480},{exx:405, yy:520},{exx:445, yy:520},{exx:425, yy:500},{exx:425, yy:440},{exx:425, yy:550},{exx:405, yy:440},{exx:405, yy:550},{exx:445, yy:440},{exx:445, yy:550},{exx:395, yy:500},{exx:455, yy:500}]},
{name:"D", state:0,balls:4,xlow:515, xhi:675, center:[{exx:575, yy:480},{exx:615, yy:480},{exx:575, yy:520},{exx:615, yy:520},{exx:595, yy:500},{exx:595, yy:440},{exx:595, yy:550},{exx:575, yy:440},{exx:575, yy:550},{exx:615, yy:440},{exx:615, yy:550},{exx:565, yy:500},{exx:625, yy:500}]},
{name:"E", state:0,balls:4,xlow:685, xhi:845, center:[{exx:745, yy:480},{exx:785, yy:480},{exx:745, yy:520},{exx:785, yy:520},{exx:765, yy:500},{exx:765, yy:440},{exx:765, yy:550},{exx:745, yy:440},{exx:745, yy:550},{exx:785, yy:440},{exx:785, yy:550},{exx:735, yy:500},{exx:795, yy:500}]},
{name:"F", state:0,balls:4, xlow:855, xhi:1015, center:[{exx:915, yy:480},{exx:955, yy:480},{exx:915, yy:520},{exx:955, yy:520},{exx:935, yy:500},{exx:935, yy:440},{exx:935, yy:550},{exx:915, yy:440},{exx:915, yy:550},{exx:955, yy:440},{exx:955, yy:550},{exx:905, yy:500},{exx:965, yy:500}]}];


var northern = [420,580,0];
var southern = [95,255,0];

// points for centres of small ncho balls
 /*
centerA=[{exx:65, yy:480},{exx:105, yy:480},{exx:65, yy:520},{exx:105, yy:520},{exx:85, yy:500},{exx:85, yy:440},{exx:85, yy:550},{exx:65, yy:440},{exx:65, yy:550},{exx:105, yy:440},{exx:105, yy:550},{exx:55, yy:500},{exx:115, yy:500}];
centerB=[{exx:235, yy:480},{exx:275, yy:480},{exx:235, yy:520},{exx:275, yy:520},{exx:255, yy:500},{exx:255, yy:440},{exx:255, yy:550},{exx:235, yy:440},{exx:235, yy:550},{exx:275, yy:440},{exx:275, yy:550},{exx:285, yy:500},{exx:225, yy:500}];
centerC=[{exx:325, yy:480},{exx:365, yy:480},{exx:325, yy:520},{exx:365, yy:520},{exx:345, yy:500},{exx:345, yy:440},{exx:345, yy:550},{exx:325, yy:440},{exx:325, yy:550},{exx:365, yy:440},{exx:365, yy:550},{exx:315, yy:500},{exx:375, yy:500}];
centerD=[{exx:575, yy:480},{exx:615, yy:480},{exx:575, yy:520},{exx:615, yy:520},{exx:595, yy:500},{exx:595, yy:440},{exx:595, yy:550},{exx:575, yy:440},{exx:575, yy:550},{exx:615, yy:440},{exx:615, yy:550},{exx:565, yy:500},{exx:625, yy:500}];
centerE=[{exx:745, yy:480},{exx:785, yy:480},{exx:745, yy:520},{exx:785, yy:520},{exx:765, yy:500},{exx:765, yy:440},{exx:765, yy:550},{exx:745, yy:440},{exx:745, yy:550},{exx:785, yy:440},{exx:785, yy:550},{exx:735, yy:500},{exx:795, yy:500}];
centerF=[{exx:915, yy:480},{exx:955, yy:480},{exx:915, yy:520},{exx:955, yy:520},{exx:935, yy:500},{exx:935, yy:440},{exx:935, yy:550},{exx:915, yy:440},{exx:915, yy:550},{exx:955, yy:440},{exx:955, yy:550},{exx:905, yy:500},{exx:965, yy:500}];
*/
/*
centerL=[{exx:65, yy:155},{exx:105, yy:155},{exx:65, yy:195},{exx:105, yy:195},{exx:85, yy:175},{exx:85, yy:115},{exx:85, yy:225},{exx:65, yy:115},{exx:65, yy:225},{exx:105, yy:115},{exx:105, yy:225},{exx:55, yy:175},{exx:115, yy:175}];
centerK=[{exx:235, yy:155},{exx:275, yy:155},{exx:235, yy:195},{exx:275, yy:195},{exx:255, yy:175},{exx:255, yy:115},{exx:255, yy:225},{exx:235, yy:115},{exx:235, yy:225},{exx:275, yy:115},{exx:275, yy:225},{exx:285, yy:175},{exx:225, yy:175}];
centerJ=[{exx:325, yy:155},{exx:365, yy:155},{exx:325, yy:195},{exx:365, yy:195},{exx:345, yy:175},{exx:345, yy:115},{exx:345, yy:225},{exx:325, yy:115},{exx:325, yy:225},{exx:365, yy:115},{exx:365, yy:225},{exx:315, yy:175},{exx:375, yy:175}];
centerI=[{exx:575, yy:155},{exx:615, yy:155},{exx:575, yy:195},{exx:615, yy:195},{exx:595, yy:175},{exx:595, yy:115},{exx:595, yy:225},{exx:575, yy:115},{exx:575, yy:225},{exx:615, yy:115},{exx:615, yy:225},{exx:565, yy:175},{exx:625, yy:175}];
centerH=[{exx:745, yy:155},{exx:785, yy:155},{exx:745, yy:195},{exx:785, yy:195},{exx:765, yy:175},{exx:765, yy:115},{exx:765, yy:225},{exx:745, yy:115},{exx:745, yy:225},{exx:785, yy:115},{exx:785, yy:225},{exx:735, yy:175},{exx:795, yy:175}];
centerG=[{exx:915, yy:155},{exx:955, yy:155},{exx:915, yy:195},{exx:955, yy:195},{exx:935, yy:175},{exx:935, yy:115},{exx:935, yy:225},{exx:915, yy:115},{exx:915, yy:225},{exx:955, yy:115},{exx:955, yy:225},{exx:905, yy:175},{exx:965, yy:175}];
*/

   
    context.beginPath();
    context.rect(0,0,1024,700);
    context.fillStyle = "cyan";
    context.fill();
console.log("color guy");
    context.strokeStyle="black";
    context.lineWidth = 3.5;
    context.strokeRect(0,350,1024,350);
    context.strokeStyle="black";
    context.lineWidth = 3.5;
    context.strokeRect(0,350,1024,-350);
    console.log("start");
    context.closePath();
    draw();
   
   function draw(){
    console.log("function one is exec")
   next(posc,posy);}
   



   function next(arr,ary){
    console.log("function 2 is exec")
    for(let area of ary){
        console.log("function o is exec");
        var b = area;
    for(let circl of arr ){
        console.log("function e is exec");
           var a = circl.big;
    context.beginPath();
     console.log(a);
    context.arc(a,b, 80, 0, Math.PI*4, false);
    context.fillStyle = "red";
    context.fill();
    context.closePath();
    
    context.beginPath();
    context.arc(a-21,b-21, 10, 0, Math.PI*2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
   
    context.beginPath();
    context.arc(a+21,b+20, 10, 0, Math.PI*2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(a-20,b+21, 10, 0, Math.PI*2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
   
    context.beginPath();
    context.arc(a+20,b-20, 10, 0, Math.PI*2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();   
   }
}
   }


   function dropNewBall(noc,geff){
a=noc;b=geff;
    context.beginPath();
    context.arc(a,b, 10, 0, Math.PI*2, false);
    context.fillStyle = "black";
    context.fill();
    context.closePath();

   }
 var ret;

   canvas.addEventListener("click", (event) => { ret = {x: event.offsetX, y: event.offsetY};
console.log(ret.y,ret.x);
if(!namecurrent){
if((ret.y >= northern[0])&&(ret.y <= northern[1])){northern[2] = 1;stateCheckerX(checkX());

}
if((ret.y >= southern[0])&&(ret.y <= southern[1])){southern[2] = 1;alert("SELECT FROM YOUR REGION")
stateCheckerY(checkY());}
}
if(namecurrent){
    if(namecurrent.balls === 1){
    if((ret.y >= northern[0])&&(ret.y <= northern[1])){northern[2] = 1;stateCheckerX(checkX());

    }
    if((ret.y >= southern[0])&&(ret.y <= southern[1])){southern[2] = 1;alert("SELECT FROM YOUR REGION")
    stateCheckerY(checkY());}
    
}
if(namecurrent.balls>1){
    nextclick = checkX(); nextclicky=checkY();
    if(nextclick.name === namecurrent.name){stateCheckerX(checkX());}
    if(nextclicky.name === namecurrent.name){stateCheckerY(checkY());}

}
}
});
// to check which side of the ncho board is clicked on;
/*function checkRegion(somn,northerner){
if(ret.y >= northerner){console.log("yep");}                                          
}*/
  

function checkY(){
    console.log("inside checkY");
    //console.log(ret.x);
    var f = 0;
    for(let pits of north){
        current = f++;
    if((ret.x >= pits.xlow)&&(ret.x <= pits.xhi)){console.log(pits.name);

        return pits;}
    
}
}


function checkX(){
    console.log("inside checkX");
    console.log(ret.x);
    var f = 0;
    for(let pits of south){
        current = f++;
    if((ret.x >= pits.xlow)&&(ret.x <= pits.xhi)){console.log(pits.name);

        return pits;}
    
}
}
function stateCheckerX(checmig){console.log(checmig.state);
if(checmig.state === 0){checmig.state++;{for(let update of south){update.state++;}};empty(checkX());distributeBall(checmig);checmig.balls=0;}
else{console.log("game is on already");if(checmig.eligible===1){checmig.state++; empty(checkX());distributeBall(checmig);checmig.balls = 0;}
if(checmig.eligible===0){checmig.state++; empty(checkX());distributeBall(checmig);checmig.balls = 0;}
}

}

function stateCheckerY(checmig){console.log(checmig.state);
    if(checmig.eligible === 1){checmig.state++;emptY(checkY());distributeBallFromNorth(checmig);checmig.balls=0;}
    else if(checmig.eligible === 0){alert("NOT ELIGIBLE");return;checmig.state++; emptY(checmig);distributeBallFromNorth(checmig);checmig.balls = 0;}}
    



var current;
// function to drop one single ball into any of the pits


// EMPTY PIT

function empty(circe){
    console.log("inside empty");
    for(let names of posc){if(names.name === circe.name ){
        
        a=names.big, b = 500;
        context.beginPath();
        console.log(a);
       context.arc(a,b, 80, 0, Math.PI*4, false);
       context.fillStyle = "red";
       context.fill();
       context.closePath();
       
    }}
}


function emptY(circe){
    console.log("inside empty");
    for(let names of posc){if(names.name === circe.name ){
        
        a=names.big, b =175;
        context.beginPath();
        console.log(a);
       context.arc(a,b, 80, 0, Math.PI*4, false);
       context.fillStyle = "red";
       context.fill();
       context.closePath();
       
    }}
}

// to distribute the balls to other holes
var looper; var namecurrent;var live;
function distributeBall(balo){
    looper = balo.balls;
    console.log(current++);
    namecurrent = balo.name;
    console.log("inside distribute ball"+looper,namecurrent);
  var arealeft = south.slice(current);
  console.log(arealeft);
  for(let southers of arealeft){
   if(looper>0){
       console.log("within loopers");
       //southers.state = 1;
       live = southers.balls+1;
       dropNewBall(southers.center[live].exx,southers.center[live].yy);
       console.log(southers.center[live]);
       southers.balls++;
       if(looper === 1){namecurrent = southers;namecurrent.eligible = 1; //looper is 1 here cos it will decrement after the if statement thus effectively 0;
        alert (namecurrent.name +"is the last pit");
    return namecurrent;}
       
   }
looper--;

  }
  var northleft = north.slice(0,looper);
  console.log(northleft);
  for(let northers of northleft){
if(looper>=0){
    console.log(looper);
       //southers.state = 1;
       live = northers.balls+1;
       dropNewBall(northers.center[live].exx,northers.center[live].yy);
       console.log(northers.center[live]);
       northers.balls++;
       console.log("within north looper, sueree");
       if(looper === 1){namecurrent = northers;namecurrent.eligible = 1; //looper is 1 here cos it will decrement after the if statement thus effectively 0;
        alert (namecurrent.name +"is the last pit");
    return namecurrent;}
}
looper--;
}
var southleft = south.slice(0,looper);
  console.log(southleft);
  for(let southners of southleft){
if(looper>=0){
    console.log(looper);
       //southers.state = 1;
       live = southners.balls+1;
       dropNewBall(southners.center[live].exx,southners.center[live].yy);
       console.log(southners.center[live]);
       southners.balls++;
       console.log("within south again");
       if(looper === 1){namecurrent = southners;namecurrent.eligible = 1; //looper is 1 here cos it will decrement after the if statement thus effectively 0;
        alert (namecurrent.name +"is the last pit");
    return namecurrent;}
}
looper--;
}
}

function distributeBallFromNorth(balo){
    looper = balo.balls;
    console.log(current++);
    //namecurrent = balo.name;
    console.log("inside distribute ball"+looper,namecurrent);
  var arealeft = north.slice(current);
  console.log(arealeft);
  for(let northers of arealeft){
   if(looper>0){
       console.log("within loopers");
       //southers.state = 1;
       live = northers.balls+1;
       dropNewBall(northers.center[live].exx,northers.center[live].yy);
       namecurrent = northers;
       console.log(namecurrent.name);
       northers.balls++;
       if(looper === 1){namecurrent.eligible = 1; return namecurrent;}
    
   }
looper--;

  }
  var southleft = south.slice(0,looper);
  console.log(southleft);
  for(let southers of southleft){
if(looper>=0){
    console.log(looper);
       //southers.state = 1;
       live = southers.balls+1;
       dropNewBall(southers.center[live].exx,southers.center[live].yy);
       namecurrent = southers;
       console.log(namecurrent.name);
       southers.balls++;
       console.log("within south looper, north " + looper);
       if(looper === 1){namecurrent.eligible = 1; //looper is 1 here cos it will decrement after the if statement thus effectively 0;
    alert (namecurrent.name +"is the last pit");
return namecurrent;}
}
looper--;
}
var northleft = north.slice(0,looper);
  console.log(northleft);
  for(let northers of southleft){
if(looper>=0){
    console.log(looper);
       //southers.state = 1;
       live = northers.balls+1;
       dropNewBall(northers.center[live].exx,northers.center[live].yy);
       console.log(northers.center[live]);
       northers.balls++;
       console.log("within north again");
if(looper === 1){ namecurrent.eligible = 1;namecurrent = northers;return namecurrent;}
    }
looper--;
}
}


function dropper(){}