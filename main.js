p1=""
p2=""
Webcam.set({
    width:450,
    height:300,
    image_format:'png',
    png_quality :99
});
camera=document.getElementById("camera")
Webcam.attach('#camera')
function snap(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="cimage" src="'+data_uri+'">'
});
}
console.log("v"+ml5.version)
ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LYrQdicrN/model.json" , load)

function load(){
console.log("model loaded ")
}

