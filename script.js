function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }




  const sound = document.getElementById('sound');
        const votingSection = document.getElementById('voting-section');

        function stopAudio() {
            sound.pause();
            sound.currentTime = 0;
        }

        function rewindAudio() {
            sound.currentTime -= 10;
        }

        function forwardAudio() {
            sound.currentTime += 10;
        }

        function returnToMainMenu() {
            location.href = 'index.html';
        }

        sound.addEventListener('ended', () => {
            votingSection.style.display = 'block';
            document.querySelector('.audio-container').style.display = 'none';
            document.querySelector('.main-menu-button').style.display = 'none';
        });

        function playClickSound() {
            const clickSound = new Audio('Audio/click.mp3');
            clickSound.play();
        }

        function handleReturnClick() {
            playClickSound();
            setTimeout(() => {
                returnToMainMenu();
            }, 200); // Delay to ensure sound plays
        }


        function myFunction() {
          var x = document.getElementById("myTopnav");
          if (x.className === "topnav") {
              x.className += " responsive";
          } else {
              x.className = "topnav";
          }
      }
