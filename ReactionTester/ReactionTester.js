function shapeGenerator()
{
    var radius = "";
    var rand=Math.random();
    if(rand<0.5)
    {
        radius = "0%";
    }
    else
    {
        radius = "50%";
    }
    return radius;
}
function colorGenerator()
{
    var randColor="#";
    var colorString = "0123456789ABCDEF";
    for(var i=0;i<6;i++)
    {
        randColor = randColor+colorString[Math.floor(Math.random()*16)];
    }
    return randColor;
}
function sizeGenerator()
{
    var size = (Math.floor(Math.random()*101)+50).toString()+"px";
    return size;
}
function locationGenerator()
{
    var top = Math.floor(Math.random()*81).toString()+"%";
    var left = Math.floor(Math.random()*81).toString()+"%";
    return [top,left];
}
function timeGenerator()
{
    var r = Math.floor(Math.random()*4001);
    return r;
}
function setShape()
{
    var shape = shapeGenerator();
    var color = colorGenerator();
    var size = sizeGenerator();
    var location = locationGenerator();

    return [shape,color,size,location];
}
function average()
{
    var sum =0;
    for(var i=0;i<avg.length;i++)
    {
        sum = sum+avg[i];
    }
    return Number.parseFloat(sum/avg.length).toFixed(3);
}

var avg = [];
function executeGame()
{
    var shapeInfo=setShape();

    document.getElementById("shape").style.borderRadius= shapeInfo[0];
    document.getElementById("shape").style.backgroundColor= shapeInfo[1];
    document.getElementById("shape").style.height= shapeInfo[2];
    document.getElementById("shape").style.width= shapeInfo[2];
    document.getElementById("shape").style.top= shapeInfo[3][0];
    document.getElementById("shape").style.left= shapeInfo[3][1];

    var startTime = new Date().getTime();
    document.getElementById("shape").onclick = function()
    {
        var endTime = new Date().getTime();
        var totalTime = ((endTime-startTime)/1000);
        document.getElementById("time").innerHTML = "Your time: "+totalTime;
        avg.push(totalTime);
        var newAverage = average();
        document.getElementById("average").innerHTML = "Average time: "+newAverage;
        executeGame();
    }
}

document.getElementById("start-button").onclick = function()
{
    avg = [];
    executeGame();
}
