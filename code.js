const lampada1 = document.querySelector('img.lampada1')
const lampada2 = document.querySelector('img.lampada2')
const botao = document.querySelector('#botao')

botao.addEventListener('click', function () {

    if (lampada1.classList.contains('ligada')) {
        botao.innerText = 'LIGAR'
        document.body.style.backgroundColor = "black";
        lampada1.classList.remove('ligada')
        lampada1.classList.add('desligada')
        lampada2.classList.remove('desligada')
        lampada2.classList.add('ligada')
    } else {
        botao.innerText = 'DESLIGAR'
        document.body.style.backgroundColor = "yellow";
        lampada1.classList.remove('desligada')
        lampada1.classList.add('ligada');
        lampada2.classList.remove('ligada')
        lampada2.classList.add('desligada');
    }
}) 