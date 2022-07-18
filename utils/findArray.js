export default function findArray(array,findFn){
    let find;
    for (let item of array){
      if(findFn(item)){
        find = item;
        break;
      }
    }
    return find;
}