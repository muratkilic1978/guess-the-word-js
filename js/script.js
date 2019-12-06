const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
let inPlay = false;
const randomWords = ["javascript","website","html","css","course","programming","document"];


button.addEventListener("click", function(){
    console.log("Button was clicked");
});
console.log(inPlay);
if(!inPlay){
    inPlay = true;
    console.log(inPlay);
    button.innerHTML = "Guess";
    //guess.style.display = "inline-block";
    guess.classList.toggle("hidden");
}