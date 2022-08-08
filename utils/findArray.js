export default function findArray(array,findFn){
  let find;
  for (let i = 0; i < array.length; i++){
    if(findFn(array[i],i,array)){
      find = array[i];
      break;
    }
  }
  return find;
}

Array.prototype.findArray = function(findFn){
  let find;
  for (let i = 0; i < this.length; i++){
    if(findFn(this[i],i,this)){
      find = this[i];
      break;
    }
  }
  return find;
}
