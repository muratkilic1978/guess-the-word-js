const message = document.querySelector(".message");
const guess = document.querySelector("input");
const button = document.querySelector("button");
const displayPoints = document.getElementById("points");
let inPlay = false;
let scramble = "";
let scrambled = "";
let points = 0;
const randomWords = ["javascript","website","html","css","course","programming","document", "template","backend","frontend","variable"];
button.addEventListener("click", function(){
if(!inPlay){
    inPlay = true;
    button.innerHTML = "Guess";
    //guess.style.display = "inline-block";
    guess.classList.toggle("hidden");
    scramble = createWord();
    scrambled = randomArray(scramble.split("")).join("");
    message.innerHTML = "Word: " + scrambled;
    }else{
        let tempGuess = guess.value;
        points++;
        console.log(tempGuess);
        if(tempGuess.toLowerCase() == scramble){
            console.log('Correct!!!');
            inPlay = false;
            message.innerHTML = "Correct answer - " + scramble;
            displayPoints.innerHTML = points + " points"; 
            button.innerHTML = "Start";
            guess.classList.toggle("hidden");
            guess.value = "";
        }else{
            console.log("guess again!");
            message.innerHTML = "Try again - " + scrambled;
            guess.value = "";
        }
    }
});

function createWord(){
    let randomIndex = Math.floor(Math.random() * randomWords.length);
    console.log(randomIndex);
    let tempWord = randomWords[randomIndex];
    return tempWord;
}

function randomArray(arr){
  for(let i = arr.length-1; i>0; i--){
      let temp = arr[i];
      let j = Math.floor(Math.random() * (i+1));
      console.log(temp);
      console.log(i);
      console.log(j);
      arr[i] = arr[j];
      arr[j] = temp;
      
  }
    return arr;
}