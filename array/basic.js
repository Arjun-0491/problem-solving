//Remove duplicate elements from an array

// let array=[45,6,75,6,19,56,45,6,7,8,7]
// 45,6,75,19,56,7,8


// for(let i=0;i<array.length;i++){
//     for( let j=i+1; j<array.length; j++){
//         if (array[i]==array[j]) {
            
//         array[i]=0
            
//         }
//     }
// }
// let filterarry=[]
// a=0
// for(let j=0; j<array.length;j++){
//     if (array[j]!==0) {
//         filterarry[a]=array[j]
//         a++
//     }
// } 



// console.log(filterarry)  

 let array1=[45,6,75,6,19,56,45,6,7,8,7]

 let duplicate=[]
 for(let i=0; i<array1.length; i++){
let demo=false

   for(let j=0; j<duplicate.length; j++){//1
if(array1[i]==array1[j]){
demo=true
break;
}
   }
if(!demo){
    duplicate.push(array1[i])
}

 }
 console.log(duplicate)