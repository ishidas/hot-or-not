//Creating Photo Object
var photoGallary = [];

function PhotoObject(photoName, photoPath) {
  this.photoName = photoName;
  this.photoPath = photoPath;
  this.numOfVotes = 0;
}

//Left Photo Display
var imgFrame = document.createElement("img");
imgFrame.src ="img/artpic2.jpg";
document.getElementById("left-img").appendChild(imgFrame);

//Right Photo Disply
var imgFrame2 = document.createElement("img");
imgFrame2.src = "img/artpic3.jpg";
document.getElementById("right-img").appendChild(imgFrame2);

//Photo Selections
PhotoObject(Photo)

 .push()
