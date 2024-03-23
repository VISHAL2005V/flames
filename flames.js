// let king="raghu"
// let queen="shalini"
// let kingarray=king.split('')
// let queenarray=queen.split('')
// console.log(kingarray,queenarray);
// let uninum=0
// if(kingarray.length>queenarray.length){
//    uninum= getuniquevalue(kingarray,queenarray)
// }
// else{
//    uninum= getuniquevalue(queenarray,kingarray)
// }
// getrelation(uninum)
// function getuniquevalue(array1,array2){
//     for(let index=0;index<array1.length;index++){
//         let foundindex=array2.indexOf(array1[index])
//         if(foundindex>=0){
//             array2[foundindex]=0 
//             array1[index]=0
//         }
//         console.log(array2.indexOf(array1[index]));
//     }
//     console.log(array1,array2);
//     let concat=array1.concat(array2)
//     console.log(concat);
//     let result=[]
//     for(let i=0;i<concat.length;i++){
//         if(concat[i]!=0){
//             result.push(concat[i])
//         }
//     }
//     console.log(result.length);
//     return result.length;
// }
// function getrelation(value){
//     let finalval=value%6;
//     console.log(finalval);
//     let flamesobject={
//         0:'You  guys are friend',
//         1:"you guys are lover",
//         2:"you guys are affectnative",
//         3:"you guys are marriage",
//         4:"you guys are eniemies",
//         5:"you guys are secretlover"
//     }
//     console.log(flamesobject[finalval
    
    
//     ]);
// } 
let king=""
let queen=""
let resultimage=["assest/friends.png","assest/lovmar.png","assest/affect.png","assest/marriage.png","assest/enemies.png","assest/secretlovers.png"]
function predict(){
     king=document.getElementById("king").value 
     queen=document.getElementById("queen").value 
    
    let kingarray=king.split('')
let queenarray=queen.split('')
console.log(kingarray,queenarray);
let uniqu=0
if(kingarray.length>queenarray.length){
   uniqu= getuniquevalue(kingarray,queenarray)
}
else{
  uniqu=  getuniquevalue(queenarray,kingarray)
}
let relation=getrelation(uniqu) 
let imagesrc=resultimage
console.log(relation);
document.getElementById("res").innerHTML=relation 
let mi=document.querySelector('.co')
mi.classList.add('hide') 
let imageelement=document.querySelector(".resimg")
imageelement.src=resultimage[uniqu]
}


function getuniquevalue(array1,array2){
 for(let index=0;index<array1.length;index++){
    let foundindex=array2.indexOf(array1[index])
    console.log(foundindex);
    if(foundindex>=0){
        array2[foundindex]=0
        array1[index]=0
    }
 }

 let concat=array1.concat(array2)
 let result=[]
 for(let i=0;i<concat.length;i++){
 if(concat[i]!=0){
      result.push(concat[i])
 }

}

return result.length

}

function getrelation(value){
    let finalvalue=value%6 
    console.log(finalvalue);
    let ob={
        0:'You  guys are friend',
     1:"you guys are lover",
                2:"you guys are affectnative",
                3:"you guys are marriage",
                4:"you guys are eniemies",
                5:"you guys are secretlover"
    }
   return ob[finalvalue];
}