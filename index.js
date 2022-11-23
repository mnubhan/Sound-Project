// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked!");
// });
// Object.values(document.getElementsByClassName("drum")).forEach(x=>x.addEventListener("click",()=>alert("I got clicked!")))
var sounds = [
  new Audio("sounds/tom-1.mp3"),
  new Audio("sounds/tom-2.mp3"),
  new Audio("sounds/tom-3.mp3"),
  new Audio("sounds/tom-4.mp3"),
  new Audio("sounds/snare.mp3"),
  new Audio("sounds/kick-bass.mp3"),
  new Audio("sounds/crash.mp3"),
];
var arr = [];
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.innerHTML === "w" ? sounds[0].play(): 
    this.innerHTML ==="a" ? sounds[1].play(): 
    this.innerHTML === "s" ? sounds[2].play():
    this.innerHTML === "d" ? sounds[3].play():
    this.innerHTML === "j" ? sounds[4].play():
    this.innerHTML === "k" ? sounds[5].play():sounds[6].play()
  });
}
