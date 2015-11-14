//Creating Photo Object Constructor//
var photoGallary = [];
// var storePhotoGallary = JSON.stringify(photoGallary);
// localStorage.setItem('photoGallary',storePhotoGallary);

function PhotoObject(photoName, photoPath) {
  this.photoName = photoName;
  this.photoPath = photoPath;
  this.numOfVotes = 0;
  photoGallary.push(this)
}

if (localStorage.photoGallary){
  data = JSON.parse(localStorage.getItem('photoGallary'))//or works
} else { data = photoGallary}
// if (localStorage.chartData && localStorage.images){
//   data = JSON.parse(localStorage.chartData);//either
//   images = JSON.parse(localStorage.getItem('images'))//or works
// } else {}

//New Photo Objects//
var img1 = new PhotoObject("lion","img/artpic1.jpg");
var img2 = new PhotoObject("hearts","img/artpic2.jpg");
var img3 = new PhotoObject("flowers","img/artpic3.jpg");
var img4 = new PhotoObject("elephant","img/artpic4.jpg");
var img5 = new PhotoObject("space","img/artpic5.jpg");
var img6 = new PhotoObject("hawks","img/artpic6.jpg");
var img7 = new PhotoObject("cuteElephant","img/artpic7.jpg");
var img8 = new PhotoObject("snoopy","img/artpic8.jpg");
var img9 = new PhotoObject("pikachu","img/artpic9.jpg");
var img10 = new PhotoObject("simpsons","img/artpic10.jpg");
var img11 = new PhotoObject("cat","img/artpic11.jpg");
var img12 = new PhotoObject("clock","img/artpic12.jpg");
// console.log(img1);

//Pushing img new objects into array called photoGallary//
// photoGallary.push(img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12);
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
// trying to connect refresh button to event listener
// var buttonId = document.getElementById('disableId');
// var formId = document.getElementById('refresh');

// function addRefresh(){
//   if (imgElement1.addEventListener || imgElement2.addEventListener) {
//     formId.paretremoveChild(buttonId);
// }
function whiteOut () {
  var highLight = document.getElementById("img1");
  highLight.style.borderStyle = "solid";
  highLight.style.borderWidth = "5px";
  highLight.style.borderColor = "rgba(255, 255, 255, 0.49)";
}


display1 = function (){
  while(randNum1 === randNum2) {
    randNum1 = calcRandom();
  }
  frame1 = photoGallary[randNum1].photoPath;//make a lil mod when event listner
  console.log(frame1);
  imgElement1 = document.createElement("img");
  imgElement1.src = frame1;
  imgElement1.id = "img1"
  document.getElementById("left-img").appendChild(imgElement1);

}

display2 = function (){
  while(randNum1 === randNum2) {
    randNum1 = calcRandom();
  }
  frame2 = photoGallary[randNum2].photoPath;
  imgElement2 = document.createElement("img");
  imgElement2.src = frame2;
  imgElement2.id = "img2"
  document.getElementById("right-img").appendChild(imgElement2);
}

// var jsonVotes = JSON.stringify(photoGallary);
// var toLocal = localStorage.setItem('photoGallary',jsonVotes);

var selectionLeft = function () {
  var highLight = document.getElementById("img1");
  highLight.style.borderStyle = "solid";
  highLight.style.borderWidth = "7px";
  highLight.style.borderColor = "green";

  photoGallary[randNum1].numOfVotes += 1 ;

  var jsonVotes1 = JSON.stringify(photoGallary);//stringify
  localStorage.setItem('photoGallary',jsonVotes1);//setItem into localstorage
  var getData1 = JSON.parse(localStorage.getItem('photoGallary')); //getting item
  console.log(getData1);
  myBarChart.datasets[0].bars[randNum1].value = photoGallary[randNum1].numOfVotes; //photoGallary[randNum1].numOfVotes, but used var parsedData1
  myBarChart.update();

  console.log(photoGallary[randNum1]);
  // console.log(photoGallary[randNum1].photoName + " has " + photoGallary[randNum1].numOfVotes + " votes");

  randNum1 = calcRandom();
  while(randNum1 === randNum2) {
    randNum1 = calcRandom();
  }
  //if clicked, add this below

  var path1 = photoGallary[randNum1].photoPath;
  imgElement1.src = path1;
  console.log(path1);
}

  // imgElement1.parentNode.removeChild(selection1);

var selectionRight = function () {
  var highLight = document.getElementById("img2");
  highLight.style.borderStyle = "solid";
  highLight.style.borderWidth = "7px";
  highLight.style.borderColor = "green";

  photoGallary[randNum2].numOfVotes += 1 ;
  var jsonVotes2 = JSON.stringify(photoGallary);//stringify
  localStorage.setItem('photoGallary',jsonVotes2);//setItem
  var getData2 =JSON.parse(localStorage.getItem('photoGallary')); //getItem

//use parsed var to draw a chart
  myBarChart.datasets[0].bars[randNum2].value = photoGallary[randNum2].numOfVotes; //originally photoGallary[randNum2].numOfVotes, but changed to parsedData2
  myBarChart.update();

  console.log(photoGallary[randNum2]);
  // console.log(photoGallary[randNum2].photoName + " has " + photoGallary[randNum2].numOfVotes + " votes");
  randNum2 = calcRandom();
  while(randNum1 === randNum2) {
    randNum2 = calcRandom();
  }
  var path2 = photoGallary[randNum2].photoPath;
  imgElement2.src = path2;
}

display1();

display2();



// Bar Chart using Chart.js//
var ctx = document.getElementById("myChart").getContext("2d");
// new Chart(ctx).Bar(data);

// function createChart() {


var data = {
  labels:["lion","hearts","flowers","elephant","space", "hawks", "cuteElephant","snoopy","pikachu","simpsons","cat","clock"],
  datasets:[
      {
        label: "Votes Tracker",
        fillColor: "rgba(117, 68, 11, 0.60)",
        strokeColor: "rgba(117, 68, 11, 0.60)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data:[0,0,0,0,0,0,0,0,0,0,0,0]
      },
    ]
   }

var myBarChart = new Chart(ctx).Bar(data);

//converting "data" chart into strings//
// var storeChart = JSON.stringify(data);
//setting item in local storage
// localStorage.setItem('data',storeChart);


imgElement1.addEventListener('click',selectionLeft);

imgElement2.addEventListener('click',selectionRight);

// addRefresh();
document.getElementById("")


