import { data } from './src/data.js';

function createCard(title, banner, date, hour, tags, content) {
    let card = document.createElement("div");
    
    let contentId = `content-${Math.random().toString(36).substr(2, 9)}`;

    card.innerHTML = `
<div class="card-body" style="cursor: pointer;">
    <p class="card-date">${date} - ${hour}</p>
    <img class="card-banner" src="${banner}"></img>
    <h1 class="card-title">${title}</h1>
    <div class="card-tags">${tags}</div>

    <div id="${contentId}" class="content" style="display: none;">
        <div class="card-text"> ${content} </div>

    </div>
</div>
`;

    card.querySelector(".card-body").addEventListener("click", function() {
        let contentElement = card.querySelector(`#${contentId}`);
        
        if (contentElement.style.display === "none") {
            contentElement.style.display = "block";
        } else {
            contentElement.style.display = "none";
        }
    });

    return card;
}

let contentContainer = document.querySelector(".content");
for (let key in data) {
    if (data.hasOwnProperty(key)) {
        let item = data[key];
        contentContainer.appendChild(createCard(item.title, item.banner, item.date, item.hour, item.tags, item.content));
    }
}
