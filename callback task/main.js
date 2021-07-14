// // ********************filter**************************//
// function filtration(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//       result.push(arr[i]);
//     }
//   }
//  console.log(result)
// }
// filtration([1, 2, 3, 4, 5, 6,-7])


// // ********************map**************************//
// function mapping(arr){
//   let result2=[];
//   for(let i=0;i<arr.length;i++){
//     result2.push(arr[i]*10)
//   }
//   console.log(result2)
// }

// mapping([1, 2, 3, 4, 5, 6,-7])

// // ********************some**************************//

// let animalsId=[1,2,3,4,5,6]

// let animalResult=animalsId.some(checkAnimalId);
// console.log(animalResult)

// function checkAnimalId(animal){
//   if(animal<7){
//     return true;
//   }
// }

// //  second phase of some--------------//
                                           
// function something(arr){
//   arr.forEach(element => {
//     if(element>=0){
//       console.log("true")
//     }else{
//       console.log(`${element} is false`)
//     }
//   });
// }


// // ********************every**************************//

// let blocks=[1,2,3,4,5,6,66]

// let blockResult=blocks.every(checkBlock);
// console.log(blockResult)

// function checkBlock(block){
//   if(block<=12){
//     return true;
//   }
// }


// // ********************reverse**************************//
// let digits=[1,2,3,4,5,6];

// function reversed(arr){
//   let temp=[];
//   for(let i=arr.length-1;i>=0;i--){
// temp.push(arr[i]);
//   }
//   return temp;
// }
// let resultReversed=reversed(digits);
// console.log(resultReversed);



// ********************concatination**************************//

// function concatination(...rest){
//   let temp=[];
//   let num=[];
//   temp=rest.join();
//   for(let i=0;i<temp.length;i++){
//     if(temp[i] !==','){
//       num.push(+ temp[i]);
//     }
//   }
//   return num;
// }
// let resultConcatination=concatination([1,2,3,4,5,6],[1,2,3,4,5,6])
// console.log(resultConcatination);