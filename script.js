function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

document.getElementById("startButton").addEventListener("click", function() {
    var clickSound = document.getElementById("clickSound");
    clickSound.play(); // Play click sound
    
    // Add a delay before playing the background audio
    setTimeout(function() {
        var backgroundAudio = document.getElementById("backgroundAudio");
        backgroundAudio.play(); // Play background audio
    }, clickSound.duration * 1000); // Wait for the click sound to finish playing
});


// Add functionality to the start button
document.getElementById("startButton").addEventListener("click", function() {
    console.log("Start button clicked!"); // Check if the event listener is triggered
    var audio = document.getElementById("backgroundAudio");
    audio.play();
});

  const sound = document.getElementById('sound');

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


        
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const img = document.getElementById('myImage');

    startButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action if needed
        img.classList.add('fade-out');

        // Remove the image from the DOM after the animation completes
        setTimeout(function() {
            img.remove();
        }, 1000); // 1000ms matches the CSS transition duration

        // Play click sound
        var clickSound = document.getElementById("clickSound");
        clickSound.play(); // Play click sound
        
        // Add a delay before playing the background audio
        setTimeout(function() {
            var backgroundAudio = document.getElementById("backgroundAudio");
            backgroundAudio.play(); // Play background audio
        }, clickSound.duration * 1000); // Wait for the click sound to finish playing
    });
});


            
           function myfunc() {
            var myDiv = document.getElementById('myImage');
            myDiv.setAttribute('style', 'width: 200px; height: 200px; background-color: blue; display:none;');
        };
document.getElementById("myBtn").onclick = myfunc;
