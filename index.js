import mapArray from "./utils/mapArray.js";
import filterArray from './utils/filterArray.js';
import findArray from "./utils/findArray.js";
import reduceArray from "./utils/reduceArray.js";

window.addEventListener("load",()=>{
    let mapBody = document.querySelector(".map p"),
        filterBody = document.querySelector(".filter p"),
        findBody = document.querySelector(".find p"),
        reduceBody = document.querySelector(".reduce p");

    mapBody.textContent = "Array Map : " +  mapArray([1,2,3,4,5],(item)=>{
        return item+=5;
    })
    filterBody.textContent = "Array Filter : " + filterArray([1,2,3,4,5],(item)=>{
        return item >= 3;
    })
    findBody.textContent = "Array Find : " + findArray([1,2,3,4,5],(item)=>{
        return item >= 4;
    })
    reduceBody.textContent = "Array Reduce : " + reduceArray([1,2,3,4,5],(prev,curr)=>{
        return prev+curr;
    })
})
