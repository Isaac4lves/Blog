import { data } from './src/data.js';

// Função que cria cards com base no método
export function createCard(metod, title, tags, desc, id, content = '') {
    let card = document.createElement("div");

    // Card de pré-visualização ("load")
    if (metod === "load") {
        card.innerHTML = `
        <a href='./template.html?id=${id}' target="_blank">
            <div class="card-preview" style="cursor: pointer;">
                <div class="card-tags">${tags}</div>
                <h1 class="card-title">${title}</h1>
                <p class="card-descr">${desc}</p>
            </div>
        </a>
        `;
        return card;
    }

    // Card de visualização completa ("view")
    else {
        card.innerHTML = `
        <div class="article" style="cursor: pointer;">
            <h1 class="title">${title}</h1>
            <div class="tags">${tags}</div>
            <p class="content">${content}</p>
        </div>
        `;
        return card;
    }
}

// Carregando os cards de pré-visualização para o index
let contentContainer = document.querySelector(".content");
for (let key in data) {
    if (data.hasOwnProperty(key)) {
        let item = data[key];
        contentContainer.appendChild(createCard("load", item.title, item.tags, item.descricao, key));
    }
}
