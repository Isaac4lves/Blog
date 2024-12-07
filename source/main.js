import { iteringData } from './load.js';

function search(e) {
    e.preventDefault();
    var tag = document.querySelector(".select").value;

    if (tag == "#Geral") {
        window.location.href = "index.html";
    }
    iteringData("byTag", tag);
}

document.querySelector(".search-btn").addEventListener("click", search);
