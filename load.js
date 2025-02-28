
import { data } from './postagens/summary.js';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

let totaldepostagens = 4 + 1;

export function converter(txt, div) {
    return marked.parse(txt);
}
 
for (let key in data) { // percorre toda a data (importada no inicio deste arquivo)  
    totaldepostagens -= 1;
    
    if (data.hasOwnProperty(totaldepostagens)) { 
        let item = data[totaldepostagens];
        console.log(item.title);
        
        createCard("preview", item.type, item.title, item.tags, item.descricao, item.file, item.date);
    }
}

export function createCard(method, type, title, tag, desc, id, date ) {
    let card = document.createElement("div");

    if(method == "preview") {
        card.className = "card";
        card.innerHTML = `
        <a href='./post.html?t=${id}'>
            <div class="card-preview" id="${type}" style="cursor: pointer;">
                <div class="card-preview-top">
                    <div class="card-tags">${tag}</div>
                    <h1 class="card-title" id="${type}">${title}</h1>
                </div>
                <div class="card-preview-bottom">
                    <p class="card-descr">${desc}</p>
                    <p class="card-date">${date}</p>
                </div>
            </div>
        </a>
        `;
        document.querySelector(".container").appendChild(card);
    }

    if(method == "article") {
        let content = converter(markdown, 'p .content');
        card.innerHTML = ` 
        <div class="article" id="${type}" style="cursor: pointer;">
            <p class="date">${date}</p>
            <h1 class="title"> <b><h4>${title}</h4></b> </h1>
            <div class="tags">${tags}</div>
            <p class="content">${content}</p>
        </div>
        `;
        return card;

    }
}
