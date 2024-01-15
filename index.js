let result = document.getElementById('result');
let result2 = document.getElementById('result2');
let cmpscoretext = document.getElementById('cmpscorenum');
let p1scoretext = document.getElementById('p1scorenum');
let cmpmv = ['Rock', 'Paper', 'Scissors'];
let cmpscore = 0;
let p1score = 0;
let winScore = document.getElementById("np");
let gameOver = 0;




winScore.addEventListener("change", function (e) {
    let score = e.target.value;
    gameOver =parseInt(score);
    
});


function playGame(choice) {
    if ((p1score + cmpscore) !== gameOver) {
      let mv = cmpmv[Math.floor(Math.random() * 3)]


        //rock functionality
        if (choice === 'Rock' && mv === 'Rock') {
            result.innerHTML = "Computer chose " + mv + " You chose Rock"
            result2.innerHTML = "Draw !!"

        } else if (choice === 'Rock' && mv === 'Paper') {
            result.innerHTML = "Computer chose " + mv + " You chose Rock"
            result2.innerHTML = "Computer Wins !!"
            cmpscore++;
            cmpscoretext.innerHTML = cmpscore;

        } else if (choice === 'Rock' && mv === 'Scissors') {
            result.innerHTML = "Computer chose " + mv + " You chose Rock"
            result2.innerHTML = "Player Wins !!"
            p1score++;
            p1scoretext.innerHTML = p1score;



            //paper functionality
        } else if (choice === 'Paper' && mv === 'Rock') {
            result.innerHTML = "Computer chose " + mv + " You chose Paper"
            result2.innerHTML = "Player Wins!!"
            p1score++;
            p1scoretext.innerHTML = p1score;

        } else if (choice === 'Paper' && mv === 'Paper') {
            result.innerHTML = "Computer chose " + mv + " You chose Paper"
            result2.innerHTML = "Draw !!"

        } else if (choice === 'Paper' && mv === 'Scissors') {
            result.innerHTML = "Computer chose " + mv + " You chose Paper"
            result2.innerHTML = "Computer Wins !!"
            cmpscore++;
            cmpscoretext.innerHTML = cmpscore;


            //Scissors functionality
        } else if (choice === 'Scissors' && mv === 'Rock') {
            result.innerHTML = "Computer chose " + mv + " You chose Scissors"
            result2.innerHTML = "Computer Wins !!"
            cmpscore++;
            cmpscoretext.innerHTML = cmpscore;

        } else if (choice === 'Scissors' && mv === 'Paper') {
            result.innerHTML = "Computer chose " + mv + " You chose Scissors"
            result2.innerHTML = "Player Wins !!"
            p1score++;
            p1scoretext.innerHTML = p1score;

        } else if (choice === 'Scissors' && mv === 'Scissors') {
            result.innerHTML = "Computer chose " + mv + " You chose Scissors"
            result2.innerHTML = "Draw !!"
        }


    }
}


// Event listeners for game choices (Rock, Paper, Scissors)
document.querySelector('#r').addEventListener("click", function () {
    playGame('Rock');
});


document.querySelector('#p').addEventListener("click", function () {
    playGame('Paper');
});


document.querySelector('#s').addEventListener("click", function () {
    playGame('Scissors');
});


// Reset the game function
document.querySelector('.rst').addEventListener("click",function(){
    window.location.reload(true)
})       

// function resetGame() {
//     result.innerHTML = "Game Reset";
//     result2.innerHTML = "";
//     cmpscore = 0;
//     p1score = 0;
//     cmpscoretext.innerHTML = cmpscore;
//     p1scoretext.innerHTML = p1score;
// }

