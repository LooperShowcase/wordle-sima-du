const express = require("express");
const app = express();
const towin = "HAPPY";
app.get("/wordle/:guess", function (req, res) {
  let userword = req.params.guess.toLocaleUpperCase();
  let arr = ["", "", "", "", ""];
  let map = {
    H: 1,
    A: 1,
    P: 2,
    Y: 1,
  };
  for (let i = 0; i < userword.length; i++) {
    if (userword[i] === towin[i]) {
      arr[i] = "green";
      let curr = userword[i];
      map[curr]--;
    }
  }
  for (let i = 0; i < userword.length; i++) {
    if (towin[i] !== userword[i]) {
      let curr = userword[i];
      if (map[curr] === undefined) {
        arr[i] = "grey";
      } else if (map[curr] > 0) {
        arr[i] = "orange";
        map[curr]--;
      } else {
        arr[i] = "grey";
      }
    }

    res.send(arr);
  }
});
app.use(express.static("public"));

app.listen(3000);
