"use strict";

document.querySelector(".help").addEventListener("click", function () {
  document.querySelector(".modal").classList.remove("hidden");
  document.querySelector(".overlay").style = "filter:blur(5px);";
});
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hidden");
  document.querySelector(".overlay").style = "filter:blur(0px);";
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector(".overlay").style = "filter:blur(0px);";
  }
});

document.querySelector(".inputvalue").value = "";
let ans = Math.trunc(Math.random() * 21);
if (ans === 0) {
  ans = Math.trunc(Math.random() * 21);
}
let count = 20;
let highScore = 0;

function reset() {
  ans = Math.trunc(Math.random() * 21);
  document.querySelector("body").style.backgroundColor = "rgb(44, 44, 44)";
  document.querySelector(".currentscore").textContent = "20";
  count = 20;
  document.querySelector(".guessBlock p").textContent = "?";
  document.querySelector(".inputvalue").value = "";
  document.querySelector(".guessBlock").style.width = "150px";
  document.querySelector(".highscore").textContent = highScore;
  document.querySelector(".status").textContent = "Start Guessing...";
  document.querySelector(".inputvalue").disabled = false;
}
document.querySelector(".check").addEventListener("click", function () {
  const num = Number(document.querySelector(".inputvalue").value);
  function modulus(ans, num) {
    if (ans > num) {
      return ans - num;
    } else {
      return num - ans;
    }
  }
  if (!num) {
    document.querySelector(".status").textContent =
      "Enter a number to check...";
  } else if (num > 20) {
    document.querySelector(".status").textContent = "Hint: Its less than 20...";
  } else {
    if (Number(count) - 1 === 0) {
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".status").textContent = "You Lost...";
      document.querySelector(".currentscore").textContent = "0";
      document.querySelector(".check").disabled = true;
      document.querySelector(".inputvalue").disabled = true;
      highScore = 0;
    } else if (modulus(ans, num) <= 5 && modulus(ans, num) !== 0) {
      document.querySelector(".status").textContent = "Too High...";
    } else if (modulus(ans, num) <= 7 && modulus(ans, num) !== 0) {
      document.querySelector(".status").textContent = "High Guess...";
    } else if (num === ans) {
      document.querySelector(".status").textContent = "You got it";
      document.querySelector(".guessBlock p").textContent = ans;
      document.querySelector("body").style.backgroundColor = "rgb(0, 251, 0)";
      document.querySelector(".guessBlock").style.width = "100%";
      if (count > highScore) {
        highScore = String(count);

        count++;
      }
      document.querySelector(".highscore").textContent = highScore;
      document.querySelector(".inputvalue").disabled = true;
    } else {
      document.querySelector(".status").textContent = "Too Low...";
    }

    let j = String(count - 1);
    count--;
    document.querySelector(".currentscore").textContent = j;
  }
});

document.querySelector(".again").addEventListener("click", reset);

document.addEventListener("keydown", function (pressedKey) {
  if (pressedKey.key === "Enter") {
    const num = Number(document.querySelector(".inputvalue").value);
    function modulus(ans, num) {
      if (ans > num) {
        return ans - num;
      } else {
        return num - ans;
      }
    }
    if (!num) {
      document.querySelector(".status").textContent =
        "Enter a number to check...";
    } else if (num > 20) {
      document.querySelector(".status").textContent =
        "Hint: Its less than 20...";
    } else {
      if (Number(count) - 1 === 0) {
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector(".status").textContent = "You Lost...";
        document.querySelector(".currentscore").textContent = "0";
        document.querySelector(".check").disabled = true;
        document.querySelector(".inputvalue").disabled = true;
      } else if (modulus(ans, num) <= 5 && modulus(ans, num) !== 0) {
        document.querySelector(".status").textContent = "Too High...";
      } else if (modulus(ans, num) <= 7 && modulus(ans, num) !== 0) {
        document.querySelector(".status").textContent = "High Guess...";
      } else if (num === ans) {
        document.querySelector(".status").textContent = "You got it";
        document.querySelector(".guessBlock p").textContent = ans;
        document.querySelector("body").style.backgroundColor = "rgb(0, 251, 0)";
        document.querySelector(".guessBlock").style.width = "100%";
        if (count > highScore) {
          highScore = String(count);

          count++;
        }
        document.querySelector(".highscore").textContent = highScore;
        document.querySelector(".inputvalue").disabled = true;
      } else {
        document.querySelector(".status").textContent = "Too Low...";
      }

      let j = String(count - 1);
      count--;
      document.querySelector(".currentscore").textContent = j;
    }
  }
});
