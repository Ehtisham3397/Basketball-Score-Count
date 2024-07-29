let totalScoreHome = 0
let totalScoreGuest = 0

let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

// Adding Scores for Home Team
function addHome1(){
    totalScoreHome += 1
    scoreHome.textContent = totalScoreHome
    
}

function addHome2(){
    totalScoreHome += 2
    scoreHome.textContent = totalScoreHome
}

function addHome3(){
    totalScoreHome += 3
    scoreHome.textContent = totalScoreHome
}

// Adding Score for Guest Home
function addGuest1(){
    
    totalScoreGuest += 1
    scoreGuest.textContent = totalScoreGuest
}

function addGuest2(){
    totalScoreGuest += 2
    scoreGuest.textContent = totalScoreGuest
}

function addGuest3(){
    totalScoreGuest += 3
    scoreGuest.textContent = totalScoreGuest
}

// Start a new Game
function newGame(){
    totalScoreHome = 0
    totalScoreGuest = 0
    scoreHome.textContent = totalScoreHome
    scoreGuest.textContent = totalScoreGuest
}