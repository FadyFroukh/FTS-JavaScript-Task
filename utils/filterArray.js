export default function filterArray(array,filterFn){
    let filtered = [];
    for (let item of array){
      if (filterFn(item)){
        filtered.push(item);
      }
    }
    return filtered;
}