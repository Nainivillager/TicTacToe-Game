let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset");

let playagainbtn = document.querySelector("#replay");
let winmessage = document.querySelector(".result");
let msgcontainer = document.querySelector(".msg");

let turnX = true;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const showWinner = (pos1) => {
  winmessage.innerText = ` Congratulation! Winner is ${pos1} `;
  msgcontainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    // console.log(boxes[0].innerText);
    console.log(pos1);
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        for (let box of boxes) {
          box.disabled = true;
        }
        showWinner(pos1);
      } else {
        winmessage.innerText = `It's a Draw`;
      }
    }
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    //  if (box.innerText === "") { // It also works in place of box.disabled
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    //  }
    checkWinner();
  });
});

const reset = () => {
  turnX = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

resetBtn.addEventListener("click", reset);
playagainbtn.addEventListener("click", reset);
