// Write a program in C to rearrange an array in such an order that– smallest, largest,
//2nd smallest, 2nd largest and on

let array=[43,3,5,5,77,8,77,5,13]

for(let i=0; i<array.length; i++){

    for(let j=i+1; j<array.length; j++){
       if ( array[i]>array[j]) {
        
         let temp=array[i]
         array[i]=array[j]
         array[j]=temp
       }

    }
}
 console.log(array)
let ar=[]
let a=array.length-1
let b=0
 for(let i=0; i<=array.length; i++){

    if (i%2==1) {
        ar[i]=array[a]
        a--
    }else  {
        ar[i]=array[b]
        b++
    }
 }
 console.log(ar)