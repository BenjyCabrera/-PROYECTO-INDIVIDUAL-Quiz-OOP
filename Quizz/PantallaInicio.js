const body1 = document.querySelector("body")
const nav1 = document.createElement("nav")
const ul1 = document.createElement("ul")
const li1 = document.createElement("li")
const a1 = document.createElement("a")
const a1Text1 = document.createTextNode("Menú de navegación")

const divInicio = document.createElement("div")
const ul2 = document.createElement("ul")
const li2 = document.createElement("li")
const a2 = document.createElement("a")
const a2Text2 = document.createTextNode("Pantalla Inicio")

const divPantJuego = document.createElement("div")
const li3 = document.createElement("li")
const a3 = document.createElement("a")
const a3Text3 = document.createTextNode("Pantalla Juego")

const divPantPuntuaciones = document.createElement("div")
const li4 = document.createElement("li")
const a4 = document.createElement("a")
const a4Text4 = document.createTextNode("Pantalla Puntuaciones")

const divStart = document.createElement("div")
const button1 = document.createElement("button")
const button1Text = document.createTextNode("START")

const divTitulo = document.createElement("div")
const newh1 = document.createElement("h1")
const newh1text = document.createTextNode("El Gran Quizz")



body1.appendChild(nav1)
nav1.appendChild(ul1)
ul1.appendChild(li1)
li1.appendChild(a1)
a1.appendChild(a1Text1)

li1.appendChild(divInicio)
divInicio.appendChild(ul2)
ul2.appendChild(li2)
li2.appendChild(a2)
a2.appendChild(a2Text2)

ul2.appendChild(divPantJuego)
divPantJuego.appendChild(li3)
li3.appendChild(a3)
a3.appendChild(a3Text3)

ul2.appendChild(divPantPuntuaciones)
divPantPuntuaciones.appendChild(li4)
li4.appendChild(a4)
a4.appendChild(a4Text4)

body1.appendChild(divTitulo)
divTitulo.appendChild(newh1)
newh1.appendChild(newh1text)
console.log(body1)


body1.appendChild(divStart)
divStart.appendChild(button1)
button1.appendChild(button1Text)

class juego {
constructor(iniciaInicio,iniciaJuego,iniciaPuntuacion,iniciaStart) {
this.inicio = iniciaInicio
this.juego = iniciaJuego
this.puntuacion = iniciaPuntuacion
this.start = iniciaStart
}
CambiaStart(){
button1.onclick()= alert("comienza el juego")
location.href= "PantallaJuego.Html"
console.log(CambiaStart())
}
}
