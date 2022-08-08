export default function mapArray(array,mapFn){
  let mapped = [];
  for (let i = 0; i < array.length; i++){
    mapped.push(mapFn(array[i],i,array))
  }
  return mapped;
}

Array.prototype.mapArray = function(mapFn){
let mapped = [];
  for (let i = 0; i < this.length; i++){
    mapped.push(mapFn(this[i],i,this))
  }
  return mapped;
}
