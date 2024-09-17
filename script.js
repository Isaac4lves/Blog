import { data } from './src/data.js';

function createCard(title, banner, date, tags, content) {
    let card = document.createElement("div");
    
    let contentId = `content-${Math.random().toString(36).substr(2, 9)}`;

    card.innerHTML = `
<div class="card-body" style="cursor: pointer;">
    <section id="card-header">
        <p class="card-date"> <b>${date} </b> </p>
        <img class="card-banner" src="${banner}"></img>
        <div class="card-tags">${tags}</div>
        <h1 class="card-title">${title}</h1>
    </section>
    <div id="${contentId}" class="content" style="display: none;">
        <div class="card-text"> ${content} </div>
        <br><br>
        <a class="up-btn" href="#card-header"> <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png"></a>
    </div>
</div>
`;

    card.querySelector("#card-header").addEventListener("click", function() {
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
        contentContainer.appendChild(createCard(item.title, item.banner, item.date, item.tags, item.content));
    }
}
