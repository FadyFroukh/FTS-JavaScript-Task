export default function reduceArray(array,reduceFn){
    let finalVal = 0;
    for (let item of array){
      finalVal = reduceFn(finalVal,item);
    }
    return finalVal;
}
  