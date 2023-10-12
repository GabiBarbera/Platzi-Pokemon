const esconderAtaque = document.getElementById("seleccionar-ataque")
const esconderReinicio = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("botonMascota")
const botonFuego = document.getElementById("botonFuego")
const botonAgua = document.getElementById("botonAgua")
const botonTierra = document.getElementById("botonTierra")
const botonAyf = document.getElementById("botonAyf")
const botonAyt = document.getElementById("botonAyt")
const botonTyf = document.getElementById("botonTyf")
const botonReiniciar = document.getElementById("botonReiniciar")

const spanmascotaJugador = document.getElementById("mascotaJugador")
const esconderInicio = document.getElementById("seleccionar-mascota")

const spanMascotaEnemigo = document.getElementById("mascotaEnemigo")

const spanvidasJugador = document.getElementById("vidasJugador")
const spanvidasEnemigo = document.getElementById("vidasEnemigo")

const sectionmensajes = document.getElementById("mensajes")

const contenedorTarjetas = document.getElementById("tarjetas")

let pokemones = []
let ataqueJugador
let ataqueEnemigo
let opcionDePokemones
let inputCharizard
let inputSquirtle
let inputDiglett
let inputVolcanion
let inputTuca
let inputCamerumpt
let mascotaJugador
let vidasJugador = 3
let vidasEnemigo = 3

class Pokemon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let charizard = new Pokemon("Charizard", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png", 3)

let squirtle = new Pokemon("Squirtle", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png", 3)

let diglett = new Pokemon("Diglett", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png", 3)

let volcanion = new Pokemon("Volcanion", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/721.png", 3)

let tuca = new Pokemon("Tuca", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/194.png", 3)

let camerumpt = new Pokemon("Camerumpt", "https://assets.pokemon.com/assets/cms2/img/pokedex/full/323.png", 3)

charizard.ataques.push(
    { nombre: "🔥", id: "botonFuego" },
    { nombre: "🔥", id: "botonFuego" },
    { nombre: "🔥", id: "botonFuego" },
    { nombre: "💧", id: "botonAgua" },
    { nombre: "🥀", id: "botonTierra" },
)

squirtle.ataques.push(
    { nombre: "💧", id: "botonAgua" },
    { nombre: "💧", id: "botonAgua" },
    { nombre: "💧", id: "botonAgua" },
    { nombre: "🔥", id: "botonFuego" },
    { nombre: "🥀", id: "botonTierra" },
)

diglett.ataques.push(
    { nombre: "🥀", id: "botonAgua" },
    { nombre: "🥀", id: "botonAgua" },
    { nombre: "🥀", id: "botonAgua" },
    { nombre: "💧", id: "botonAGua" },
    { nombre: "🔥", id: "botonFuego" },
)

volcanion.ataques.push(
    { nombre: "♨️", id: "botonAyf" },
    { nombre: "♨️", id: "botonAyf" },
    { nombre: "♨️", id: "botonAyf" },
    { nombre: "💧", id: "botonAGua" },
    { nombre: "🔥", id: "botonFuego" },
)

tuca.ataques.push(
    { nombre: "🌎", id: "botonAyt" },
    { nombre: "🌎", id: "botonAyt" },
    { nombre: "🌎", id: "botonAyt" },
    { nombre: "💧", id: "botonAGua" },
    { nombre: "🥀", id: "botonTierra" },
)

camerumpt.ataques.push(
    { nombre: "☄️", id: "botonTyf" },
    { nombre: "☄️", id: "botonTyf" },
    { nombre: "☄️", id: "botonTyf" },
    { nombre: "🥀", id: "botonTierra" },
    { nombre: "🔥", id: "botonFuego" },
)

pokemones.push(charizard, squirtle, diglett, volcanion, tuca, camerumpt)

function iniciarJuego() {
    esconderAtaque.style.display = "none"

    esconderReinicio.style.display = "none"

    pokemones.forEach((Pokemon) => {
        opcionDePokemones = `
        <input type="radio" name="mascota" id=${Pokemon.nombre} />
        <label class="tarjetaPokemon" for=${Pokemon.nombre}>
            <p>${Pokemon.nombre}</p>
            <img class="active" src=${Pokemon.foto} alt=${Pokemon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDePokemones

        inputCharizard = document.getElementById("Charizard")
        inputSquirtle = document.getElementById("Squirtle")
        inputDiglett = document.getElementById("Diglett")
        inputVolcanion = document.getElementById("Volcanion")
        inputTuca = document.getElementById("Tuca")
        inputCamerumpt = document.getElementById("Camerumpt")

    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    botonFuego.addEventListener("click", ataqueFuego)

    botonAgua.addEventListener("click", ataqueAgua)

    botonTierra.addEventListener("click", ataqueTierra)

    botonAyf.addEventListener("click", ataqueAyf)

    botonAyt.addEventListener("click", ataqueAyt)

    botonTyf.addEventListener("click", ataqueTyf)

    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
    if (inputCharizard.checked) {
        spanmascotaJugador.innerHTML = inputCharizard.id
        mascotaJugador = inputCharizard.id
    } else if (inputSquirtle.checked) {
        spanmascotaJugador.innerHTML = inputSquirtle.id
        mascotaJugador = inputSquirtle.id
    } else if (inputDiglett.checked) {
        spanmascotaJugador.innerHTML = inputDiglett.id
        mascotaJugador = inputDiglett.id
    } else if (inputVolcanion.checked) {
        spanmascotaJugador.innerHTML = inputVolcanion.id
        mascotaJugador = inputVolcanion.id
    } else if (inputTuca.checked) {
        spanmascotaJugador.innerHTML = inputTuca.id
        mascotaJugador = inputTuca.id
    } else if (inputCamerumpt.checked) {
        spanmascotaJugador.innerHTML = inputCamerumpt.id
        mascotaJugador = inputCamerumpt.id
    } else {
        alert("Debes seleccionar un Pokemon 😑")
        reiniciarJuego()

    }

    botonMascotaJugador.disabled = true

    esconderAtaque.style.display = "flex"

    esconderInicio.style.display = "none"

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < pokemones.length; i++) {
        if (mascotaJugador === pokemones[i].nombre) {
            ataques = pokemones[i].ataques
        }

    }
    console.log(ataques)
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, pokemones.length - 1)

    spanMascotaEnemigo.innerHTML = pokemones[mascotaAleatoria].nombre
}

function ataqueFuego() {
    ataqueJugador = "FUEGO 🔥 "
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA 💧 "
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA 🥀 "
    ataqueAleatorioEnemigo()
}
function ataqueAyf() {
    ataqueJugador = "AGUA Y FUEGO ♨️ "
    ataqueAleatorioEnemigo()
}
function ataqueAyt() {
    ataqueJugador = "AGUA Y TIERRA 🌎 "
    ataqueAleatorioEnemigo()
}
function ataqueTyf() {
    ataqueJugador = "TIERRA Y FUEGO ☄️ "
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 6)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO 🔥 "
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA 💧 "
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "TIERRA 🥀 "
    } else if (ataqueAleatorio == 4) {
        ataqueEnemigo = "AGUA Y FUEGO ♨️ "
    } else if (ataqueAleatorio == 5) {
        ataqueEnemigo = "AGUA Y TIERRA 🌎 "
    } else if (ataqueAleatorio == 6) {
        ataqueEnemigo = "TIERRA Y FUEGO ☄️ "
    }

    combate()
}

function combate() {
    if (ataqueEnemigo == ataqueJugador) {
        crearmensajes("EMPATE 🥱")
    }
    else if ((ataqueJugador == "FUEGO 🔥 " && ataqueEnemigo == "TIERRA 🥀 ") || (ataqueJugador == "FUEGO 🔥 " && ataqueEnemigo == "TIERRA Y FUEGO ☄️ ") || (ataqueJugador == "AGUA 💧 " && ataqueEnemigo == "FUEGO 🔥 ") || (ataqueJugador == "AGUA 💧 " && ataqueEnemigo == "AGUA Y FUEGO ♨️ ")
        || (ataqueJugador == "TIERRA 🥀 " && ataqueEnemigo == "AGUA 💧 ") || (ataqueJugador == "TIERRA 🥀 " && ataqueEnemigo == "AGUA Y TIERRA 🌎 ") || (ataqueJugador == "TIERRA Y FUEGO ☄️ " && ataqueEnemigo == "AGUA Y TIERRA 🌎 ") || (ataqueJugador == "TIERRA Y FUEGO ☄️ " && ataqueEnemigo == "TIERRA 🥀 ") || (ataqueJugador == "AGUA Y FUEGO ♨️ " && ataqueEnemigo == "TIERRA Y FUEGO ☄️ ") || (ataqueJugador == "AGUA Y FUEGO ♨️ " && ataqueEnemigo == "AGUA 💧 ") || (ataqueJugador == "AGUA Y TIERRA 🌎 " && ataqueEnemigo == "AGUA Y FUEGO ♨️ ") || (ataqueJugador == "AGUA Y TIERRA 🌎 " && ataqueEnemigo == "FUEGO 🔥 ")) {
        crearmensajes(" GANASTE 🤭")
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo
    }
    else {
        crearmensajes(" PERDISTE 🥱")
        vidasJugador--
        spanvidasJugador.innerHTML = vidasJugador
    }

    chequearVidas()
}

function chequearVidas() {
    if (vidasJugador == 0) {
        crearmensajeFinal("PERDISTE 💀")
    } else if (vidasEnemigo == 0) {
        crearmensajeFinal("GANASTE 🥇")
    }
}


function crearmensajes(resultado) {
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu atacaste con " + ataqueJugador + " y el enemigo ataco con " + ataqueEnemigo + " - " + resultado

    sectionmensajes.appendChild(parrafo)
}

function crearmensajeFinal(resultadoFinal) {
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionmensajes.appendChild(parrafo)

    botonFuego.disabled = true

    botonAgua.disabled = true

    botonTierra.disabled = true

    botonAyf.disabled = true

    botonAyt.disabled = true

    botonTyf.disabled = true

    esconderReinicio.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)