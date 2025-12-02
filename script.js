const html = document.querySelector('html')
const botao = document.querySelector('#botaoDeModos')
const corpo = document.querySelector('.corpoEscuro')
const imgTemas = document.querySelector('#imagemDeTemas')
const logo = document.querySelector('#imgLogo')
const link = document.querySelector('.linkEscuro')

botao.addEventListener('click', ()=>{
    alterarTema()
})
function alterarTema(){
    if(corpo.classList.contains('corpoClaro')){
        corpo.classList.remove( 'corpoClaro')
        corpo.classList.add('corpoEscuro')
        imgTemas.setAttribute('src', './img/modo-claro.png')
        logo.setAttribute('src','./img/Logo-tecboard-branco.png')
        link.classList.remove('linkClaro')
        link.classList.add('linkEscuro')
        
    }
    else{
          corpo.classList.remove('corpoEscuro')
          corpo.classList.add('corpoClaro')
          imgTemas.setAttribute('src', './img/modo-noturno.png')
          logo.setAttribute('src','./img/Logo-tecboard-preta.png')
          link.classList.remove('linkEscuro')
          link.classList.add('linkClaro')
          
    }

}
