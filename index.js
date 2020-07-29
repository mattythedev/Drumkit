var numberOfButtons = document.querySelectorAll(".drum").length;
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");

// Detecting button pressed

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
  })
}

//Detecting keyboard pressed

document.addEventListener("keydown", function(event){
  var pressedKey = event.key;
  makeSound(pressedKey);
  buttonAnimation(pressedKey);
})

function makeSound(key){
  switch (key) {
    case "w":
      tom1.play();
      break;
    case "a":
      tom2.play();
      break;
    case "s":
      tom3.play();
      break;
    case "d":
      tom4.play();
      break;
    case "j":
      crash.play();
      break;
    case "k":
      kick.play();
      break;
    case "l":
      snare.play();
      break;

    default: console.log(buttonInnerHtml);

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100);
}
