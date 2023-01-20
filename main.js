noseX=0;
noseY=0;
diffrence = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
} 

function modelLoaded() {
    console.log('PoseNet is doing its working');
}

function draw() {
    document.getElementById("square_sides").innerHTML = "width and higthe of the scare wll be = " + diffrence +"px"; 
    background('#65e0a7');
     fill('#F90093');
     stroke('#F90093');
     textSize(diffrence);
     text('martin is the best', noseX, noseY);
}

function gotPoses(results)
{
    if(results.length > 0);
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = leftWristX - rightWristX;

        console.log("leftwWristX = " + leftWristX + "rightWristX = "+ rightWristX + "diffrance = " + diffrence);
    }
}