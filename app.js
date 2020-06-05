var basic = ["mudah", "susah", "aku", "kamu", "dia", "kenapa", "apa", "cinta", "kau", "dan", "dia", "meng4pa", "c1nta", "d1mana", "k4mu", "ker3n", "kuran9", "cepa7", "l4ptop", "busy3t", "sus4h", "bang3t"]
// var middle = ["mudah", "susah", "aku", "kamu", "dia", "kenapa", "apa", "cinta", "kau", "dan", "dia", "meng4pa", "c1nta", "d1mana", "k4mu", "ker3n", "kuran9", "cepa7", "l4ptop", "busy3t", "sus4h", "bang3t"]
// var legend = ["mudah", "susah", "aku", "kamu", "dia", "kenapa", "apa", "cinta", "kau", "dan", "dia", "meng4pa", "c1nta", "d1mana", "k4mu", "ker3n", "kuran9", "cepa7", "l4ptop", "busy3t", "sus4h", "bang3t"]
var score = 0;
var times = 16;

function playGame() {


  document.getElementById("wordList").style.display = "block";
  document.getElementById("typing").value = ""
  let indexing = Math.floor(Math.random() * basic.length);
  let randomWord = basic.splice(indexing, 1);

  document.getElementById("wordList").innerHTML = randomWord;
  document.getElementById("score").innerHTML = "<b>Score: 0 </b>";
  document.getElementById("typing").style.display = "block";
  document.getElementById("typing").focus();
  document.getElementById("btnStart").style.display = "none";
}

function countDown() {
  start = setInterval(function () {
    times -= 1;
    document.getElementById("times").innerHTML =
      " | <b>Countdown: " + times + "</b>";
    if (times <= 0) {
      clearInterval(start);
      var audio = new Audio("./assets/sound/win.mp3");
      audio.play();
      document.getElementById("times").innerHTML =
        (" | <b>Time is up!</b><br/><br/>Do you want to share your score and invite other to play?<br/><a href='whatsapp://send?text=Hi, my score is: " + score + " Try to beat me with play this game data-action='share/whatsapp/share' >Share</a>");
      document.getElementById("typing").style.display = "none";
      document.getElementById("typing").value;
      document.getElementById("wordList").style.display = "none";
      document.getElementById("btnStart").style.display = "block";
      document.getElementById("btnStart").innerHTML = "Play Again";
      score = 0;
      times = 16;
    }
  }, 1000);
}

function startTyping() {
  let typing = document.getElementById("typing").value;
  let word = document.getElementById("wordList").textContent;
  if (word == typing) {
    let audio = new Audio('./assets/sound/sound.mp3')
    audio.play();
    playGame();
    score += 1;
    document.getElementById("score").innerHTML = "<b>Score: " + score + "</b>";
  }
}

function start() {
  document.getElementById("typing").style.display = "none";
}
