const game = () => {
    let player = 0;
    let computer = 0;
  
    // Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");


      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./Img/${this.textContent}.png`;
            computerHand.src = `./Img/${computerChoice}.png`;
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = player;
      computerScore.textContent = computer;
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It's a Draw!!";
        return;
      }

      function declareWinner() {
player_final_score = document.getElementById("pl-score").textContent;
computer_final_score = document.getElementById("co-score").textContent;

        if (player_final_score >= 3){
            alert("Player Win! Congratulations!");
            location.reload();
        } else if (computer_final_score >= 3) {
            alert ("Player lost! Try Again!");
            location.reload();
        }
      }
      declareWinner()

      //Check for Rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Win This Round!!";
          player++;
          updateScore();
          return;
 
        } else {
          winner.textContent = "Computer Win This Round!!";
          computer++;
          updateScore();
          return;
        }
      }

      //Check for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Win This Round!!";
          computer++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Win This Round!!";
          player++;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Win This Round!!";
          computer++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Win This Round!!";
          player++;
          updateScore();
          return;
        }
      }
    };

    //Is call all the inner function
    startGame();
    playMatch();
    declareWinner ();
  };
  
  //start the game function
  game();

