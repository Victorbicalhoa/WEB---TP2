document.getElementById("button").addEventListener("click", ()=>{
    let texto = document.createElement("p")
    texto.innerHTML = "O palmeiras não tem mundial, mengão campeão"
    texto.style.backgroundColor = "yellow"
    texto.style.color = "blue"    

    document.body.appendChild(texto)
})