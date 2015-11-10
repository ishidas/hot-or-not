//Creating Photo Object Constructor//
var photoGallary = [];

function PhotoObject(photoName, photoPath) {
  this.photoName = photoName;
  this.photoPath = photoPath;
  this.numOfVotes = 0;
}

//New Photo Objects//
var img1 = new PhotoObject("lionArt","img/artpic1.jpg");
var img2 = new PhotoObject("hearts","img/artpic2.jpg");
var img3 = new PhotoObject("flowers","img/artpic3.jpg");
var img4 = new PhotoObject("elephant","img/artpic4.jpg");
var img5 = new PhotoObject("space","img/artpic5.jpg");
var img6 = new PhotoObject("hawks","img/artpic6.jpg");
var img7 = new PhotoObject("cuteElephant","img/artpic7.jpg");
var img8 = new PhotoObject("snoopy","img/artpic8.jpg");
var img9 = new PhotoObject("lionArt","img/artpic9.jpg");
var img10 = new PhotoObject("pikachu","img/artpic10.jpg");
var img11 = new PhotoObject("cat","img/artpic11.jpg");
var img12 = new PhotoObject("clock","img/artpic12.jpg");
console.log(img1);

//Pushing img new objects into array called photoGallary//
photoGallary.push(img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12);
console.log(photoGallary);

//Displaying onto browser//
var randomPhoto = Math.ceil(Math.random()*photoGallary.length);
console.log(randomPhoto);
var imgFrame1 = document.createElement("img");
    document.getElementById("left-img").appendChild(imgFrame1);

var imgFrame2 = document.createElement("img");
    document.getElementById("right-img").appendChild(imgFrame2);





//11.9- Assignement Adding 2 images onto a browser
//Left Photo Display//
  // var imgFrame = document.createElement("img")
  //     imgFrame.src = "img/artpic2.jpg";
// document.getElementById("left-img").appendChild(imgFrame);

//Right Photo Disply//
  // var imgFrame2 = document.createElement("img");
  //     imgFrame2.src = "img/artpic3.jpg";
// document.getElementById("right-img").appendChild(imgFrame2);

//Photo Selections
// PhotoObject(Photo)
