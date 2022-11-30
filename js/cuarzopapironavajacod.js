function aleatorio(min,max) {
    return Math.floor( Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1){
       resultado = "cuarzo ✊"
    } else if (jugada == 2) {
       resultado = "papiro 📖"
    } else if (jugada == 3) {
        resultado = "navaja 🪒"
    } else {
        resultado = "¿?"
    }
    return resultado
}
// 1 es cuarzo, 2 es papiro, 3 es navaja
let jugador = 0 
let pc = 0
let victorias = 0
let derrotas = 0

while ( victorias <3 && derrotas <3) {
    pc = aleatorio(1,3)
    jugador = prompt("Elige: 1 para cuarzo, 2 para papiro, 3 para navaja")
    // alert("Elegiste " + jugador)
    
    alert("PC elige: " + eleccion(pc))
    alert("Tu eliges: " + eleccion(jugador))

    // QUE COMIENZE EL DUELO
    if(pc == jugador){
        alert("EMPATE Zzz")
    } else if(jugador == 1 && pc == 3) {
        alert("Ganaste :)")
        // victorias = victorias + 1
    } else if(jugador == 2 && pc == 1) {
        alert("Ganaste :)")  
        // victorias = victorias + 1
    } else if(jugador == 3 && pc == 2) {
        alert("Ganaste :)")
        // victorias = victorias + 1
    } else {
        alert("PERDISTEZzz")
        derrotas = derrotas + 1
    }
}

alert("Ganaste " +  victorias + " veces. PerdisteZzz " + derrotas + " veces.")


aleatorio(1,3)
jugador = prompt("Elige: 1 para cuarzo, 2 para papiro, 3 para navaja")
// alert("Elegiste " + jugador)

alert("PC elige: " + eleccion(pc))
alert("Tu eliges: " + eleccion(jugador))

// QUE COMIENZE EL DUELO
if(pc == jugador){
    alert("EMPATE Zzz")
} else if(jugador == 1 && pc == 3) {
    alert("Ganaste :)")
} else if(jugador == 2 && pc == 1) {
    alert("Ganaste :)")  
} else if(jugador == 3 && pc == 2) {
    alert("Ganaste :)")
} else {
    alert("PERDISTEZzz")
}

