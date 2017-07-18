'use strict';

function numGame(system,user) {
  let a = 0, b = 0;
  for(let i in system){
    for(let j in user){
      if(i == j){
        if(system[i] === user[j]){
          a++;
        }
      }else{
        if(system[i] === user[j]){
          b++;
        }
      }
    }
  }
  return `${a}A${b}B`;
}