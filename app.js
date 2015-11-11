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
var frame1;
var frame2;
var randNum1 = calcRandom();
var randNum2 = calcRandom();

display = function (){
  frame1 = photoGallary[randNum1].photoPath;//make a lil mod when event listner
  console.log(frame1);
  frame2 = photoGallary[randNum2].photoPath;
  // while(frame1 === frame2){
  //   frame2 = photoGallary[calcRandom()].photoPath;
  // }
  imgElement1 = document.createElement("img");
  imgElement2 = document.createElement("img");
  imgElement1.src = frame1;
  imgElement1.id = "img1"
  imgElement2.src = frame2;
  imgElement2.id = "img2"
  document.getElementById("left-img").appendChild(imgElement1);
  document.getElementById("right-img").appendChild(imgElement2);
  }


  var selection1 = function () {
  this.src = frame1;
  imgElement2.src = frame2;
  photoGallary[randNum1].numOfVotes++ ;
  console.log(photoGallary[randNum1].numOfVotes + 1);
  console.log(photoGallary[randNum1].photoName + " has " + photoGallary[randNum1].numOfVotes + " votes");
    while(this.src === imgElement2.src){
    imgElement2.src = frame2;
    }
  // imgElement1.parentNode.removeChild(selection1);
  display();
}

//   var selection2 = function () {
//   this.src = frame2;
//   imgElement1.src = frame1;
//     while(this.src === imgElement1.src){
//     imgElement2.src = frame2;
//   }
// }

display();


imgElement1.addEventListener('click',selection1);
// imgElement2.addEventListener('click',selection2);


