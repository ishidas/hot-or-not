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
// console.log(img1);

//Pushing img new objects into array called photoGallary//
photoGallary.push(img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12);
// console.log(photoGallary);

//Calculatng random//
calcRandom = function (){
  return Math.floor(Math.random()*photoGallary.length);
  console.log(randomPhoto);
}

var imgElement1;
var imgElement2;
display = function (){
  var frame1 = photoGallary[calcRandom()].photoPath;//make a lil mod when event listner
  var frame2 = photoGallary[calcRandom()].photoPath;
  while(frame1 === frame2){
    frame2 = photoGallary[calcRandom()].photoPath;
  }
  imgElement1 = document.createElement("img");
  imgElement2 = document.createElement("img");
  imgElement1.src = frame1;
  imgElement1.id = "img1"
  imgElement2.src = frame2;
  imgElement2.id = "img2"
  document.getElementById("left-img").appendChild(imgElement1);
  document.getElementById("right-img").appendChild(imgElement2);
}

display();




imgElement1.addEventListener('click',function () {
  this.src = photoGallary[calcRandom()].photoPath;
  imgElement2.src = photoGallary[calcRandom()].photoPath;
    while(this.src === imgElement2.src){
    imgElement2.src = photoGallary[calcRandom()].photoPath;
  }
})

imgElement2.addEventListener('click',function () {
  this.src = photoGallary[calcRandom()].photoPath;
  imgElement1.src = photoGallary[calcRandom()].photoPath;
    while(this.src === imgElement1.src){
    imgElement2.src = photoGallary[calcRandom()].photoPath;
  }
})
// display.imgElement2.addEventListener('click',display(),false);

// var imgElement1 = document.createElement("img")
    // document.getElementById("left-img").appendChild(imgElement1);
    // imgElement1.setAttribute("width", "200px");
    // imgElement1.setAttribute("height", "200px");




//missing step-and src with array inside to attach to <div> i have using setAttribute()
// var imgElement2 = document.createElement("img");
//     document.getElementById("right-img").appendChild(imgElement2);
    // imgElement2.setAttribute("src", );
    // imgElement2.setAttribute("width", "200px");
    // imgElement2.setAttribute("height", "200px");
    // imgElement2.src = photoGallary.photoPath;



//eventlistener with a click


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
