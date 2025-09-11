//Find the minimum and maximum elements in an array.

let array=[12,4,5,6,8,9,4,6,5,17]

let a=0
b=0
for(let i=0; i<array.length; i++){

    if(array[i]>array[a]){

        a=i
    } 
     if (array[i]<array[b]) {
    
        b=i
    }
}
console.log("maximum",array[a])
console.log("minimum",array[b])

