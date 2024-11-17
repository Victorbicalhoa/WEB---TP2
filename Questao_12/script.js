let botao = document.createElement('button');
botao.textContent = 'Inserir';

botao.addEventListener('click', function() {
    let novoItem = document.createElement('li');
    novoItem.textContent = 'O Palmeiras não tem mundial';

    let lista = document.getElementById('lista');
    lista.appendChild(novoItem);
});

document.body.appendChild(botao);
