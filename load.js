import { data } from './src/data.js';

export function createCard(metod, type, title, tags, desc, id, content = '') {
    let card = document.createElement("div");

    if (metod === "load") {
        card.innerHTML = `
        <a href='./template.html?id=${id}' target="_blank">
            <div class="card-preview" id="${type}" style="cursor: pointer;">
                <div class="card-tags">${tags}</div>
                <h1 class="card-title">${title}</h1>
                <p class="card-descr">${desc}</p>
            </div>
        </a>
        `;
        return card;
    }

    else {
        card.innerHTML = `
        <div class="article" id="${type}" style="cursor: pointer;">
            <h1 class="title">${title}</h1>
            <div class="tags">${tags}</div>
            <p class="content">${content}</p>
        </div>
        `;
        return card;
    }
}

let contentContainer = document.querySelector(".content");
for (let key in data) {
    if (data.hasOwnProperty(key)) {
        let item = data[key];
        contentContainer.appendChild(createCard("load",item.type, item.title, item.tags, item.descricao, key));
    }
}
