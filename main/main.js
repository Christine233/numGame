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
function numGame(system,user) {
  let a = 0, b = 0;
  //let systemArr = system.split('');
  //let userArr = user.split('');
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