// const aray = [1,2,3,4,5,6,7,8,9,10]

// let a = 0

// for (let i = aray.length - 1; i > 0; i--) {
//   let temp = aray[i]
//   aray[i] = aray[a]
//   aray[a] = temp
//   a++ 
// }
// console.log(aray)

const aray = [1,2,3,4,5,6,7,8,9,10]

let a = 0

for (let i = aray.length - 1; i > a; i--) {   
  let temp = aray[i]
  aray[i] = aray[a]
  aray[a] = temp
  a++
}

console. log(aray)
