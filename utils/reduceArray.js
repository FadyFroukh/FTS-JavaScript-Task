export default function reduceArray(array,reduceFn){
  let finalVal = 0;
  for (let i =0; i < array.length; i++){
    finalVal = reduceFn(finalVal,array[i],i,array);
  }
  return finalVal;
}

Array.prototype.reduceArray = function(reduceFn){
   let finalVal = 0;
  for (let i =0; i < this.length; i++){
    finalVal = reduceFn(finalVal,this[i],i,this);
  }
  return finalVal;
}