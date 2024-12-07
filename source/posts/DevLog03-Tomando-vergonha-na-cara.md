---

&emsp;Certo, depois de alguns meses, finalmente decidi usar um compilador de [**MarkDown**](https://www.markdownguide.org/getting-started/) para usar aqui no blog. E, sinceramente, minha vida vai ficar bem mais prática. Antes, para escrever um post, eu precisava primeiro digitar em Markdown e, depois, manualmente substituir os símbolos. Ex:

&emsp;Enfim, coisas que um interpretador faria automaticamente para mim, eu fazia à mão... Sim, eu complico as coisas demais, mas agora meu sofrimento acabou! Eu posso escrever um arquivo Markdown e apenas registrá-lo aqui para fazer um post.  

&emsp;Então, vim compartilhar e também registrar o passo a passo de como eu utilizei o **marked.js** para facilitar minha vida aqui com o blog. ;)

### **INSTALAÇÃO**

1. Comece instalando o marked:

   ```bash
   npm install marked
   ```

2. Caso não queira instalar, também pode importar diretamente:

   ```html
   <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
   ```

&emsp;Ele pode ser usado tanto no CLI quanto na Web. Vou documentar a segunda opção (web), já que foi a que eu usei! É notório que a ferramenta é bastante simples, e também muito eficaz no que se propõe a fazer. No entanto, há um **problema** apontado na própria [**documentação**](https://marked.js.org/). Esse problema é que o interpretador não possui mais um [**filtro/purificador de DOM**](https://www.npmjs.com/package/dompurify), e caso você queira resolver essa questão, pode usar o [**DOMPurify**](https://github.com/cure53/DOMPurify), recomendado pelo próprio interpretador, para fazer a purificação do DOM.

Certo, então como funciona? Simples:

```html
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<script>
    document.getElementById('content').innerHTML =
    marked.parse('# **Hello** World ');
</script>
```

&emsp;Basta este pequeno código e você já poderá usar o interpretador! Esta ferramenta foi mais que suficiente para mim e para este pequeno blog, então não senti necessidade de explorar a fundo todas as possibilidades. E, por conta dessa facilidade, com certeza irei usar em quase tudo o que eu precisar escrever!

A&emsp;baixo estão todos os links para fácil acesso. Caso queira tirar mais alguma dúvida, te convido a ler a documentação ;) 
Até a próxima, e muito obrigado por ler este singelo blog.

---

### Links:

[**> Diretório do Marked.js <**](https://marked.js.org/)

[**> Demonstração do Marked.js <**](https://marked.js.org/demo/)
