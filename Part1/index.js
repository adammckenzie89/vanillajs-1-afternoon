console.log('hey');

const arr = [];

const play = move => {
const player = document.getElementById('player')
const mover = document.getElementById(move)


if(player.innerText === 'X'){
  player.innerText = 'O'
  mover.innerText = 'X'
  arr[move] = 'X'
} else {
  player.innerText = 'X'
  mover.innerText = 'O'
  arr[move] = 'O'
  }

  console.log(arr);

  let sq1 = arr[0]
  let sq2 = arr[1]
  let sq3 = arr[2]
  let sq4 = arr[3]
  let sq5 = arr[4]
  let sq6 = arr[5]
  let sq7 = arr[6]
  let sq8 = arr[7]
  let sq9 = arr[8]

  if(sq1 !== undefined && sq1 === sq2 && sq1 === sq3){
    window.alert(`${sq1} Won!`)
  }
  else if(sq4 !== undefined && sq4 === sq5 && sq4 === sq6){
    window.alert(`${sq4} Won!`)
  }
  else if(sq7 !== undefined && sq7 === sq8 && sq7 === sq9){
    window.alert(`${sq7} Won!`)
  }
  else if(sq1 !== undefined && sq1 === sq4 && sq1 === sq7){
    window.alert(`${sq1} Won!`)
  }
  else if(sq2 !== undefined && sq2 === sq5 && sq2 === sq8){
    window.alert(`${sq2} Won!`)
  }
  else if(sq3 !== undefined && sq3 === sq6 && sq3 === sq9){
    window.alert(`${sq3} Won!`)
  }
  else if(sq1 !== undefined && sq1 === sq5 && sq1 === sq9){
    window.alert(`${sq1} Won!`)
  }
  else if(sq3 !== undefined && sq3 === sq5 && sq3 === sq7){
    window.alert(`${sq3} Won!`)
  }

  let cats = true;
  for(let i = 0; i <= 8; i++){
    if(arr[i] === undefined){
      cats = false;
    }
  }
  if(cats === true){
    window.alert('Cats Game mutha trucka!')
  }
};




