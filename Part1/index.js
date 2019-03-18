console.log('hello world');
let game = [];

const play = val => {
  const player = document.getElementById("player");
  const element = document.getElementById(val);

  if (player.innerText === "X") {
    player.innerText = "O";
    element.innerText = "X";
    game[val] = "X";
  } else {
    player.innerText = "X";
    element.innerText = "O";
    board[val] = "O";
  }

  let sq1 = game[0] 
  let sq2 = game[1] 
  let sq3 = game[2] 
  let sq4 = game[3] 
  let sq5 = game[4] 
  let sq6 = game[5]
  let sq7 = game[6]
  let sq8 = game[7]
  let sq9 = game[8]

  if (sq1 !== undefined && sq1 === sq2 && sq1 === sq3) {
    window.alert(`${sq1} is the winner`);
  } else if (sq4 !== undefined && sq4 === sq5 && sq4 === sq6) {
    window.alert(`${sq4} is the winner`);
  } else if (sq7 !== undefined && sq7 === sq8 && sq7 === game[8]) {
    window.alert(`${sq7} is the winner`)
  } else if (sq1 !== undefined && sq1 === sq4 && sq1 === sq7) {
    window.alert(`${sq1} is the winner`);
  } else if (sq2 !== undefined && sq2 === sq5 && sq2 === sq8) {
    window.alert(`${sq2} is the winner`);
  } else if (sq3 !== undefined && sq3 === sq6 && sq3 === game[8]) {
    window.alert(`${sq3} is the winner`);
  } else if (sq1 !== undefined && sq1 === sq5 && sq1 === game[8]) {
    window.alert(`${sq1} is the winner`);
  } else if (sq7 !== undefined && sq7 === sq5 && sq7 === sq3) {
    window.alert(`${sq7} is the winner`);
  }

let cats = true;
for(let i = 0; i <= 8; i++){
    if(game[i] === undefined){
        cats = false;
    }
}
if(cats === true){
window.alert('cats game!')
}
};
