//cruz
//<div class='arriba'></div>  <div class='abajo'></div>

//circulo
//<div class='circulo'></div> <div class='circulo2'></div>

//determinar el jugador de inicio
let jugador = parseInt(Math.random() * 2 + 1)

//comprobar que lugar esta ocupado
let arrPuesta = [false, false, false, false, false, false, false, false, false]

// 0=ninguna, 1=cruz, 2=circulo
let arrFichas = [0, 0, 0, 0, 0, 0, 0, 0, 0]

let ganado = false

function jugadorS() {
    //console.log("jugador:"+jugador)
    decirJugador(jugador)
    return jugador
}


//----cookies----
function setCookie(name,value) {
    
    document.cookie = name + "=" + value +  "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    mostrarCookies()
}

function crearCookie() {

    if (document.cookie.match('jugador1')) {
        var count = parseInt(document.cookie.match(/jugador1=(\d+)/)[1])
        setCookie('jugador1',count)
    } else {
        setCookie('jugador1',0)
    }

    if (document.cookie.match('jugador2')) {
        var count = parseInt(document.cookie.match(/jugador2=(\d+)/)[1])
        setCookie('jugador2',count)
    } else {
        setCookie('jugador2',0)
    }

    
    
}



//sumar victorias
function actuVictoria(jugador) {
    if (jugador == 1) {
        var count = parseInt(document.cookie.match(/jugador1=(\d+)/)[1])
        count++
        setCookie('jugador1',count)
    } else {
        var count = parseInt(document.cookie.match(/jugador2=(\d+)/)[1])
        count++
        setCookie('jugador2',count)
    }

    
}

function mostrarCookies() {
    document.getElementById("marcador1").innerHTML = document.cookie.match(/jugador1=(\d+)/)[1]
    document.getElementById("marcador2").innerHTML = document.cookie.match(/jugador2=(\d+)/)[1]
}

//---------------------juego---------------------

function decirJugador() {
    if (jugador == 1) {
        document.getElementById("turno").innerHTML = "<h4>Turno de Jugador 1</h4>"
    } else {
        document.getElementById("turno").innerHTML = "<h4>Turno de Jugador 2</h4>"
    }
}


function ponerFicha(casilla, lugar) {

    //comprueba que la casilla esta vacia
    if (arrPuesta[casilla] == false) {

        //comprueba el jugador
        if (jugadorS() == 1) {
            document.getElementById(lugar).innerHTML = "<div class='arriba'></div>  <div class='abajo'></div>"
            //pone que jugador/casilla esta en esa casilla
            arrFichas[casilla] = jugadorS()
            jugador = 2//cambia juagador

        } else {
            document.getElementById(lugar).innerHTML = "<div class='circulo'></div> <div class='circulo2'></div>"
            //pone que jugador/casilla esta en esa casilla
            arrFichas[casilla] = jugadorS()
            jugador = 1//cambia juagador

        }
    }
    arrPuesta[casilla] = true
    decirJugador(jugador)
    comprobarWin()
}


function comprobarWin() {
    let index2 = 0
    for (let index = 0; index < 3; index++) {
        if (arrFichas[index2] == 1 && arrFichas[index2 + 1] == 1 && arrFichas[index2 + 2] == 1) {
            document.getElementById("turno").innerHTML = "Gana el jugador Jugado 1"
            actuVictoria(1)
            ganar2()
        } else if (arrFichas[index2] == 2 && arrFichas[index2 + 1] == 2 && arrFichas[index2 + 2] == 2) {
            document.getElementById("turno").innerHTML = "Gana el jugador Jugado 2"
            actuVictoria(2)
            ganar2()
        }

        if (arrFichas[index] == 1 && arrFichas[index + 3] == 1 && arrFichas[index + 6] == 1) {
            document.getElementById("turno").innerHTML = "Gana el jugador Jugado 1"
            ganar2()
            actuVictoria(1)
        } else if (arrFichas[index] == 2 && arrFichas[index + 3] == 2 && arrFichas[index + 6] == 2) {
            document.getElementById("turno").innerHTML = "Gana el jugador Jugado 2"
            actuVictoria(2)
            ganar2()
        }
        index2 += 3
    }

    if (arrFichas[0] == 1 && arrFichas[4] == 1 && arrFichas[8] == 1) {
        document.getElementById("turno").innerHTML = "Gana el jugador Jugado 1"
        ganar2()
        actuVictoria(1)
    } else if (arrFichas[0] == 2 && arrFichas[4] == 2 && arrFichas[8] == 2) {
        document.getElementById("turno").innerHTML = "Gana el jugador Jugado 2"
        actuVictoria(2)
        ganar2()
    }

    if (arrFichas[2] == 1 && arrFichas[4] == 1 && arrFichas[6] == 1) {
        document.getElementById("turno").innerHTML = "Gana el jugador Jugado 1"
        ganar2()
        actuVictoria(1)
    } else if (arrFichas[2] == 2 && arrFichas[4] == 2 && arrFichas[6] == 2) {
        document.getElementById("turno").innerHTML = "Gana el jugador Jugado 2"
        actuVictoria(2)
        ganar2()
    }




}

function ganar2() {
    arrPuesta = [true, true, true, true, true, true, true, true, true]
    document.getElementById("marcador1").innerHTML = document.cookie.match(/jugador1=(\d+)/)[1]
}

function reset() {


    for (let index = 1; index <= 9; index++) {
        document.getElementById(index).innerHTML = ""
    }

    arrPuesta = [false, false, false, false, false, false, false, false, false]
    arrFichas = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    if (jugadorS() == 1) {
        jugador = 2
    } else {
        jugador = 1
    }
    jugadorS()
}
