const cores = document.getElementById('cores');
const btnGerar = document.getElementById('btnGerar');



btnGerar.addEventListener('click', gerarCores);

function gerarCores(){
    cores.innerHTML = '';

    for(let i = 0; i < 5; i++) {
        const cor = gerarCoresAleatorias();

        const coresDiv = document.createElement('div')
        coresDiv.style.backgroundColor = cor;

        const coresName = document.createElement('p');
        coresName.textContent = cor;
        coresName.style.color = cor;

        cores.appendChild(coresDiv);
        coresDiv.appendChild(coresName);
    }
}

function gerarCoresAleatorias(){
    const idCor = '0123456789ABCDEF'
    let cor = '#'

    for(let i = 0; i < 6; i++){
        cor += idCor[Math.floor(Math.random() * 16)];  //Irá gerar a cor aleatoria de acordo com o id das cores '0123456789ABCDEF', multiplicando por 16, a quant de ids
    }

    return cor;
}
