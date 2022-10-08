noseY = 0;
noseX = 0;
rightWristX=0;
leftWristX=0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,160)
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is Initialized');
}
function gotPoses(results)
{
if (results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX="+noseX+ "noseY="+noseY)

    leftWristX= results[0].pose.leftWrist.x;
    rightWristX= results[0].pose.rightWrist.x;
    difference = floor(leftWristX-rightWristX);
}
}
function draw(){
    background('#969A97');
    document.getElementById("handw").innerHTML="Width and Height of a square will be ="+ difference +"px";
    textSize(difference);
    fill('#F90093');
    text("Samarth",noseX,noseY);
}