var hr, mn, sc;
var hrAngle, mnAngle, scAngle;
var bgImg;

function preload() {
    bgImg = loadImage("bg.png");
}

function setup() {
    createCanvas(500, 500);
    //To use angle in Degrees
    angleMode(DEGREES);
    bg = createSprite(0, 0, 500, 500);
    bg.addImage("bg", bgImg);
    bg.scale = 0.42;
    bg.rotate = 270;
}

function draw() {
    background("white");

    //Translation and rotation 
    translate(250, 250)
    rotate(-90)

    //Calculating time using predefined func from p5.js
    hr = hour();
    mn = minute();
    sc = second();

    //To create ab iterative rotation
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360)
    hrAngle = map(hr % 12, 0, 12, 0, 360)

    //drawing seconds hand
    push();
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke("black");
    strokeWeight(3);
    line(0, 0, 100, 0);
    pop()

    //drawing mins hand
    push();
    rotate(mnAngle);
    stroke("black");
    strokeWeight(5);
    line(0, 0, 75, 0);
    pop()

    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke("black");
    strokeWeight(7);
    line(0, 0, 50, 0);
    pop()

    stroke(255, 0, 255);
    point(0, 0)

    //drawing the arcs
    strokeWeight(10);
    noFill();

    //seconds color change
    if (scAngle >= 0 && scAngle < 30) {
        stroke(246, 237, 34);
    } else if (scAngle >= 30 && scAngle < 60) {
        stroke(252, 175, 57);
    } else if (scAngle >= 60 && scAngle < 90) {
        stroke(241, 89, 39);
    } else if (scAngle >= 90 && scAngle < 120) {
        stroke(195, 38, 47);
    } else if (scAngle >= 120 && scAngle < 150) {
        stroke(185, 81, 160);
    } else if (scAngle >= 150 && scAngle < 180) {
        stroke(102, 48, 144);
    } else if (scAngle >= 180 && scAngle < 210) {
        stroke(8, 115, 187);
    } else if (scAngle >= 210 && scAngle < 240) {
        stroke(37, 170, 226);
    } else if (scAngle >= 240 && scAngle < 270) {
        stroke(38, 181, 115);
    } else if (scAngle >= 270 && scAngle < 300) {
        stroke(59, 180, 74);
    } else if (scAngle >= 300 && scAngle < 330) {
        stroke(140, 197, 64);
    } else if (scAngle >= 330 && scAngle < 360) {
        stroke(216, 225, 36);
    } else {
        stroke(0);
    }
    //Seconds
    arc(0, 0, 300, 300, 0, scAngle);


    //minute color change
    if (mnAngle >= 0 && mnAngle < 30) {
        stroke(246, 237, 34);
    } else if (mnAngle >= 30 && mnAngle < 60) {
        stroke(252, 175, 57);
    } else if (mnAngle >= 60 && mnAngle < 90) {
        stroke(241, 89, 39);
    } else if (mnAngle >= 90 && mnAngle < 120) {
        stroke(195, 38, 47);
    } else if (mnAngle >= 120 && mnAngle < 150) {
        stroke(185, 81, 160);
    } else if (mnAngle >= 150 && mnAngle < 180) {
        stroke(102, 48, 144);
    } else if (mnAngle >= 180 && mnAngle < 210) {
        stroke(8, 115, 187);
    } else if (mnAngle >= 210 && mnAngle < 240) {
        stroke(37, 170, 226);
    } else if (mnAngle >= 240 && mnAngle < 270) {
        stroke(38, 181, 115);
    } else if (mnAngle >= 270 && mnAngle < 300) {
        stroke(59, 180, 74);
    } else if (mnAngle >= 300 && mnAngle < 330) {
        stroke(140, 197, 64);
    } else if (mnAngle >= 330 && mnAngle < 360) {
        stroke(216, 225, 36);
    } else {
        stroke(0);
    }

    //Minutes
    arc(0, 0, 280, 280, 0, mnAngle);


    //hour color change
    if (hrAngle >= 0 && hrAngle < 30) {
        stroke(246, 237, 34);
    } else if (hrAngle >= 30 && hrAngle < 60) {
        stroke(252, 175, 57);
    } else if (hrAngle >= 60 && hrAngle < 90) {
        stroke(241, 89, 39);
    } else if (hrAngle >= 90 && hrAngle < 120) {
        stroke(195, 38, 47);
    } else if (hrAngle >= 120 && hrAngle < 150) {
        stroke(185, 81, 160);
    } else if (hrAngle >= 150 && hrAngle < 180) {
        stroke(102, 48, 144);
    } else if (hrAngle >= 180 && hrAngle < 210) {
        stroke(8, 115, 187);
    } else if (hrAngle >= 210 && hrAngle < 240) {
        stroke(37, 170, 226);
    } else if (hrAngle >= 240 && hrAngle < 270) {
        stroke(38, 181, 115);
    } else if (hrAngle >= 270 && hrAngle < 300) {
        stroke(59, 180, 74);
    } else if (hrAngle >= 300 && hrAngle < 330) {
        stroke(140, 197, 64);
    } else if (hrAngle >= 330 && hrAngle < 360) {
        stroke(216, 225, 36);
    } else {
        stroke(0);
    }

    //Hour
    arc(0, 0, 260, 260, 0, hrAngle);

    drawSprites();
}