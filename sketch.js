var userUpload;

function preload(){
    userUpload = loadImage("jenny.jpg");
}

function setup(){
    createCanvas(userUpload.width, userUpload.height);
}

function draw(){
    background(0);
    image(userUpload, 0, 0);
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
            var startingIndex = (col + row * width)*4;
            
            // pixels[startingIndex] = 255; //red
            // pixels[startingIndex + 1] = 0; //green
            // pixels[startingIndex + 2] = 0; //blue
            // pixels[startingIndex + 3] = 255; //alpha
        }
    }
    
    
    updatePixels();
}