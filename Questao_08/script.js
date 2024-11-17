let lista = document.getElementById('minhaLista');
let itens = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

itens.forEach(function(itemTexto) {
    let item = document.createElement('li');
    item.textContent = itemTexto;

    item.style.backgroundColor = 'lightgrey';
    item.style.color = 'black';
    item.style.fontFamily = 'Arial, sans-serif';
    item.style.border = '2px solid black';
    item.style.padding = '10px';
    item.style.margin = '5px 0';

    lista.appendChild(item);
});

let primeiroParagrafo = document.getElementById('primeiro');
let segundoParagrafo = document.getElementById('segundo');

let heading = document.createElement('h2');
heading.textContent = 'O palmeiras não tem mundial';
document.body.insertBefore(heading, segundoParagrafo);

let galeria = document.getElementById('galeria');
let imagens = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg']; 

imagens.forEach(function(src) {
    let img = document.createElement('img');
    img.setAttribute('src', src);
    galeria.appendChild(img);
});

let primeiroItem = lista.firstElementChild
if (primeiroItem){
    lista.removeChild(primeiroItem)
}

if(primeiroParagrafo){
    primeiroParagrafo.remove()
}

