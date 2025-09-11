
//. Write a program in C to print all unique elements in an array. */

let array=[45,30,12,4,12,30,5,6]

result=[]
for(let i=0; i<array.length; i++){
   let check=true
   
for(let j=0;j<array.length; j++){
   
    if (j!==i && array[i]===array[j]) {
        check=false
        
    }
}
if (check==true) {
    result.push(array[i])
}

}

console.log(result)