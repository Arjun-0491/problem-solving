
const aray = [10,78,67,8,5,23,7,5,1,0]

for(let i=0;i<aray.length; i++){
  for(let j=0; j<aray.length-i; j++){ 

    if (aray[j]>aray[j+1]) {
let temp=aray[j]
aray[j]=aray[j+1]
aray[j+1 ]=temp
    }
  }
}

console.log(aray)


// let less =[]
// let great = []
// let p = aray[0]

// for(let i = 0 ; i<aray.length; i++){
//       if(aray[i]>p){
//     great.push(aray[i])
//   }else{
//     less.push(aray[i])
//   }
//   }
 
// console.log(less)
// console.log(great);

// let final = great.concat(less)

//console.log(final);

