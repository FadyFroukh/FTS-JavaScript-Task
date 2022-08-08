export default function filterArray(array,filterFn){
  let filtered = [];
  for (let i = 0; i < array.length; i++){
    if (filterFn(array[i],i,array)){
      filtered.push(array[i]);
    }
  }
  return filtered;
}

Array.prototype.filterArray = function(filterFn){
let filtered = [];
  for (let i = 0; i < this.length; i++){
    if (filterFn(this[i],i,this)){
      filtered.push(this[i]);
    }
  }
  return filtered;
}