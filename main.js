Webcam.set({
width: 310,
height: 300,
image_format: 'png',
png_quality: 90,

constaints: {
    facingMode: "environment"
}
});
camera = document.getElementById("camera");

webcam.attach('#camera');

function take_snapshot()
{
    webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version;', ml5.version);
classifier=ml5.ImageClassifier('MobileNet', modelLoaded);

function modelLoaded()
{
    console.log("modelLoaded");
}

function check()
{
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("onject_name").innerHTML = results[0].label;
    }
}