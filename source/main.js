import { iteringData } from './load.js';

function search(e){
    e.preventDefault(); 
    var tag = document.querySelector(".select").value;
    if(tag == "#Geral"){
        iteringData("all", tag); 
    }
    iteringData("byTag", tag); 
}

document.querySelector(".search-btn").addEventListener("click", search);
