'use strict';
// 第一版
// function numGame(system,user) {
//   let a = 0, b = 0;
//   for(let i in system){
//     for(let j in user){
//       if(i == j){
//         if(system[i] === user[j]){
//           a++;
//         }
//       }else{
//         if(system[i] === user[j]){
//           b++;
//         }
//       }
//     }
//   }
//   return `${a}A${b}B`;
// }

// 优化版
const readlineSync = require('readline-sync');
function numGame() {
  let system = this.systemRandomNum();
  let user = readlineSync.question(`Please input your guessed number: `);
  let a = 0, b = 0;
//  let systemArr = system.split();
//  let userArr = user.split();
  for(let i in system){
    if(system.indexOf(user[i]) != -1){
      b++;
    }
    if(system[i] === user[i]){
      a++;
    }
  }
  b = b - a;
  return `${a}A${b}B`;
}

function systemRandomNum() {
    let flag = 0;
    let system = 0;
    while (flag == 0){
        let newArr = [];
        system = Math.floor(Math.random()*1000+1000);
        let systemArr = system.toString().split('');
        for(let i in systemArr){
            if(newArr.indexOf(systemArr[i]) == -1){
              newArr.push(systemArr[i]);
            }
        }
        if(newArr.length == systemArr.length){
          flag = 1;
        }
    }
    return system;
}
module.exports.systemRandomNum = systemRandomNum;
module.exports.numGame = numGame;