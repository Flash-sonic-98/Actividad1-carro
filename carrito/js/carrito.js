var contenedor = document.querySelector(".contenedor")
var llantacas1 = document.querySelector(".llantacas1")
var llantacas2 = document.querySelector(".llantacas2")
var humo =document.querySelector(".humo")
var parpadeo =document.querySelector(".parpadeo")

contenedor.addEventListener('click', fondiu)

function fondiu(){
    contenedor.classList.add('fondomover')
    llantacas1.classList.add('llantamover')
    llantacas2.classList.add('llantamover')
    humo.classList.add('humomover')
    parpadeo.classList.add('parpadeopare')
    humo.classList.remove('oculto')
    parpadeo.classList.remove('oculto')

}