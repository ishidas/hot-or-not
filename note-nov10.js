//Local Storage
//open up console in a browser --> resources -->Local Stores
//Local Stoage & Session Storages -local lightweight DBs (loose term)
var Turtle = function(leg, color, water, ninja){
  this.legs = legs;
  .
  .
}

Turtle.prototype.kickAss function() {
  this.shell = 'green';
  console.log('Cowabunga!');
}
var turtle1 = {
  legs: 7;
  color: 'Blue',
  water: 'Salt Water',
  ninja: true,

  kickAss: function() {
    console.log('Cowabunga!');
  }
};

var JSONturtle = JSON.stringify(turtle); //converts javascript objct into string
                                            //but not the method part (kickAss).
var newTurtle = JSON.parse(JSONturtle); //this will convert back into javascript
//you could also,
localStorage.setItem('key', JSON.stringify(key));

localStorage.______(key, value) clear, getItem, removeItem, setItem
localStorage.setItem('turtle', JSONturtle);//stores data in local storage

localStorage.turtle //--> will give you turtle object

localStorage.getItem('tutle');

//JSON object is in a string.
"var turtle = {
  legs: 7;
  color: 'Blue',
  water: 'Salt Water',
  ninja: true,

  kickAss: function() {
    console.log('Cowabunga!');
  }
};"

//Nov 12
stateVoting{
  two new random numbers ()
  display the phortos ()
  hide the chart? ()
  turn off or hide the '2 more photos' button ()
}
stateResult() {
  tally votes ()
  render the Charts(local storage) ()
  (local storage) ()
  turn off the event listeners on the pitures to prevent further voting ()
  turn on or show the '2 more photos button' ()
}

buttonTwoNewPhotos.addEventListener('click', stateResult);

picLeft.addEventListener('click', stateResult);
picRight.addEventListener('click', stateResult);

*****************************************

Another way to manage state

if (voting) {
  thing 1
  thing 2
} else {
  other thing 1
  other thing 2
}


//accumulating votes:
Resizing image -> just crop it in a photo editor

var taValues = [34, 67, 44, 93];
var data =[
{
  //value: photosArray[left].votes
  value: taValues[0],
  label: "Darcy",
  color: "#810984"
  highlight: "#998282"
}
]

Charts:
var data = {
  lebels []

}

constructor
this.name = name;

add inside constructor
data.labes.push(name);
