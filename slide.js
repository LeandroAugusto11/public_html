/**
 * Simples Slide Show
 * @author Leandro Augusto
 */

 let intervalo = 3000 //3000 milesegundos

 function slide1(){
     document.getElementById('banner').src='guitar.jpg'
     // a linha abaixo "executa" a função após 3s (intervalo)
     setTimeout('slide2()', intervalo)
 }

 function slide2(){
    document.getElementById('banner').src='tar.jpg'
    setTimeout('slide3()', intervalo)
}

function slide3(){
    document.getElementById('banner').src='mpb.jpg'
    setTimeout('slide1()', intervalo)
}