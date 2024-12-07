import { data } from './data.js';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";


export function converter(txt, div) {
    return marked.parse(txt);
}

export function createCard(metod, type, title, tags, desc, id, date, markdown = '# Vazio') {
    let card = document.createElement("div");

    if (metod === "load") { // cria uma preview da postagem se *metod="load" 
        card.innerHTML = `
        <a href='../page/postagem.html?id=${id}'>
            <div class="card-preview" id="${type}" style="cursor: pointer;">
                <div class="card-tags">${tags}</div>
                <h1 class="card-title"><b><h4>${title}</h4></b></h1>
                <p class="card-descr">${desc}</p>
                <p class="card-date">${date}</p>
            </div>
        </a>
        `;
        return card;
    }
    if (metod == "ById") {
        card.innerHTML = `
        <a href='../page/postagem.html?id=${id}'>
            <div class="card-preview" id="${type}" style="cursor: pointer;">
                <div class="card-tags">${tags}</div>
                <h1 class="card-title"> <b><h4>${title}</h4></b> </h1>
                <p class="card-descr">${desc}</p>
                <p class="card-date">${date}</p>
            </div>
        </a>
        `;
        return card;
    }
    // caso o *metod não for load, ele retorna os dados para a formação da postagem, não mais um preview
    else {
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

let contentContainer = document.querySelector(".content"); // Acessa o .content lá da página inicial

export function iteringData(metod, tag) {

    if (metod == "all") { // se o *metod for all, ele busca todos as postagens no documento
        contentContainer.innerHTML = "";
        let totaldepostagens = 5 + 1; //alterar toda vez que adicionar uma nova postagem (preciso mudar isso, mas n agora)

        for (let key in data) { // percorre toda a data (importada no inicio deste arquivo)  
            totaldepostagens -= 1;
            console.log("key:",key);
            console.log("data:", data);
            if (data.hasOwnProperty(totaldepostagens)) { // verifica se *data tem a *key da vez
                let item = data[totaldepostagens];
                contentContainer.appendChild(createCard("load", item.type, item.title, item.tags, item.descricao, totaldepostagens, item.date)); // cria um card para esta postagem
            }
            // se não houver a key buscada, se encerra.
        }

    }

    else if (metod == "byTag") { // se o *metod for byId, ele busca uma esquecifica
        contentContainer.innerHTML = "";

        let i = 0;

        for (let key in data) { // percorre toda a data (importada no inicio deste arquivo)  
            i += 1; // variavel que contabiliza quantas postagens existem 
            if (data.hasOwnProperty(key)) { // verifica se *data tem a *key da vez
                if(tag == "Offtopic"){
                    if (data[i]["type"] == tag) { // verifica a tag do data[i] for igual á tag inserida pelo usuário
                        contentContainer.appendChild(createCard("ById", data[i]["type"], data[i]["title"], data[i]["tags"], data[i]["descricao"], i, data[i]["date"])); // cria um card para esta postagem
                    }
                }

                if (data[i]["tags"] == tag) { // verifica a tag do data[i] for igual á tag inserida pelo usuário
                    contentContainer.appendChild(createCard("ById", data[i]["type"], data[i]["title"], data[i]["tags"], data[i]["descricao"], i, data[i]["date"])); // cria um card para esta postagem
                }

            }
            // se não houver a key buscada, se encerra.
            console.log(i);
        }
    }
}

iteringData("all");
