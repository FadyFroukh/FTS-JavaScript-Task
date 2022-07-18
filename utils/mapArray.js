export default function mapArray(array,mapFn){
    let mapped = [];
    for(let item of array){
      mapped.push(mapFn(item));
    }
    return mapped;
}