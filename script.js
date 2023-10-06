const ball = document.getElementsByClassName("ball")
const $team1score = document.getElementById("score-team1")
const $team1wickets = document.getElementById("wickets-team1") // $ is used here to differentiate 
const $team2score = document.getElementById("score-team2")
const $team2wickets = document.getElementById("wickets-team2")
const resetbutton = document.getElementById("reset")
const strikebutton = document.getElementById("strike")
const strike = new Audio("https://i1.faceprep.in/prograd-junior/bat%2Bhit%2Bball.mp3")
const crowd_cheers= new Audio("https://i1.faceprep.in/prograd-junior/Ball%2BHit%2BCheer.mp3")

var team1score = 0
var team2score = 0
var team1wickets = 0
var team2wickets = 0
var turn = 1 // use of turn to go from one scoreboard to another scoreboard 
var ballfaced = 0

function finished() {
    crowd_cheers.play();
    // Use of alert to declare the result on the webpage
    if (team1score > team2score) alert("India wins");
    if (team1score < team2score) alert("Pakistan wins");
    if (team1score == team2score) alert("Match Drawn");
}

// use of array to store collections of data 
const possibleoutcomes = [0,1,2,3,4,5,6,"W"]


// use of Math.floor[Math.random*length]
//event listener is when you click on something, then only it changes
strikebutton.onclick= () => {
    strike.play();

    ballfaced++;
    
    if (turn == 1) {
        var score = possibleoutcomes[Math.floor(Math.random() * possibleoutcomes.length)]
    
         if (score === "W") {
            team1wickets++
            $team1wickets.innerText = team1wickets
            document.querySelector(`#team1-superover .ball:nth-child(${ballfaced})`).innerHTML = score
         }
         else {
            team1score += score
            $team1score.innerText = team1score
            document.querySelector(`#team1-superover .ball:nth-child(${ballfaced})`).innerHTML = score
         }

         if (ballfaced == 6 || team1wickets == 2) {
            turn = 2
            ballfaced = 0
         }
    }     

    else if (turn == 2) {
        var score = possibleoutcomes[Math.floor(Math.random() * possibleoutcomes.length)]
        
         if (score === "W") {
            team2wickets++
            $team2wickets.innerText = team2wickets
            document.querySelector(`#team2-superover .ball:nth-child(${ballfaced})`).innerHTML = score
         }
         else {
            team2score += score
            $team2score.innerText = team2score
            document.querySelector(`#team2-superover .ball:nth-child(${ballfaced})`).innerHTML = score
         }
         if (ballfaced == 6 || team2wickets == 2 ||team2score>team1score ) {
            turn = 3
            finished()
         }
    }
}

// reset buttton to reload the webpage
resetbutton.onclick = () => {window.location.reload()}
