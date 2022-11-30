//cruz
//<div class='arriba'></div>  <div class='abajo'></div>

//circulo
//<div class='circulo'></div> <div class='circulo2'></div>
let jugador=parseInt(Math.random() * 2 + 1)
function jugadorS() {
    
    console.log(jugador)
    decirJugador(jugador)
    
    return jugador
}



function decirJugador() {
    if (jugador == 1) {

        let turno = document.getElementById("turno").innerHTML = "Jugado 1"
    } else {

        let turno = document.getElementById("turno").innerHTML = "Jugado 2"
    }
}

//Tablero [9][9]=new Array()

let puesta1=false
let puesta2=false
let puesta3=false
let puesta4=false
let puesta5=false
let puesta6=false
let puesta7=false
let puesta8=false
let puesta9=false
//----------------poner fichas--------
function ponerFicha1() {
    if (puesta1==false) {
        if (jugadorS() == 1) {
            console.log("pone cruz")
            let ficha = document.getElementById("1").innerHTML = "<div class='arriba'></div>  <div class='abajo'></div>"
            jugador=2
            puesta1=true
        } else {
            console.log("pone circulo")
            let ficha = document.getElementById("1").innerHTML = "<div class='circulo'></div> <div class='circulo2'></div>"
            jugador=1
            puesta1=true
        }
    }
}
function ponerFicha2() {
    if (puesta2==false) {
        if (jugadorS() == 1) {
            console.log("pone cruz")
            let ficha = document.getElementById("2").innerHTML = "<div class='arriba'></div>  <div class='abajo'></div>"
            jugador=2
            puesta2=true
        } else {
            console.log("pone circulo")
            let ficha = document.getElementById("2").innerHTML = "<div class='circulo'></div> <div class='circulo2'></div>"
            jugador=1
            puesta2=true
        }
    }
}
function ponerFicha3() {
    if (puesta3==false) {
        if (jugadorS() == 1) {
            console.log("pone cruz")
            let ficha = document.getElementById("3").innerHTML = "<div class='arriba'></div>  <div class='abajo'></div>"
            jugador=2
            puesta3=true
        } else {
            console.log("pone circulo")
            let ficha = document.getElementById("3").innerHTML = "<div class='circulo'></div> <div class='circulo2'></div>"
            jugador=1
            puesta3=true
        }
    }
}
function ponerFicha4() {
    if (puesta4==false) {
        if (jugadorS() == 1) {
            console.log("pone cruz")
            let ficha = document.getElementById("4").innerHTML = "<div class='arriba'></div>  <div class='abajo'></div>"
            jugador=2
            puesta4=true
        } else {
            console.log("pone circulo")
            let ficha = document.getElementById("4").innerHTML = "<div class='circulo'></div> <div class='circulo2'></div>"
            jugador=1
            puesta4=true
        }
    }
}
function ponerFicha5() {
    if (puesta5==false) {
        if (jugadorS() == 1) {
            console.log("pone cruz")
            let ficha = document.getElementById("5").innerHTML = "<div class='arriba'></div>  <div class='abajo'></div>"
            jugador=2
            puesta5=true
        } else {
            console.log("pone circulo")
            let ficha = document.getElementById("5").innerHTML = "<div class='circulo'></div> <div class='circulo2'></div>"
            jugador=1
            puesta5=true
        }
    }
}
function ponerFicha6() {
    if (puesta6==false) {
        if (jugadorS() == 1) {
            console.log("pone cruz")
            let ficha = document.getElementById("6").innerHTML = "<div class='arriba'></div>  <div class='abajo'></div>"
            jugador=2
            puesta6=true
        } else {
            console.log("pone circulo")
            let ficha = document.getElementById("6").innerHTML = "<div class='circulo'></div> <div class='circulo2'></div>"
            jugador=1
            puesta6=true
        }
    }
}
function ponerFicha7() {
    if (puesta7==false) {
        if (jugadorS() == 1) {
            console.log("pone cruz")
            let ficha = document.getElementById("7").innerHTML = "<div class='arriba'></div>  <div class='abajo'></div>"
            jugador=2
            puesta7=true
        } else {
            console.log("pone circulo")
            let ficha = document.getElementById("7").innerHTML = "<div class='circulo'></div> <div class='circulo2'></div>"
            jugador=1
            puesta7=true
        }
    }
}
function ponerFicha8() {
    if (puesta8==false) {
        if (jugadorS() == 1) {
            console.log("pone cruz")
            let ficha = document.getElementById("8").innerHTML = "<div class='arriba'></div>  <div class='abajo'></div>"
            jugador=2
            puesta8=true
        } else {
            console.log("pone circulo")
            let ficha = document.getElementById("8").innerHTML = "<div class='circulo'></div> <div class='circulo2'></div>"
            jugador=1
            puesta8=true
        }
    }
}
function ponerFicha9() {
    if (puesta9==false) {
        if (jugadorS() == 1) {
            console.log("pone cruz")
            let ficha = document.getElementById("9").innerHTML = "<div class='arriba'></div>  <div class='abajo'></div>"
            jugador=2
            puesta9=true
        } else {
            console.log("pone circulo")
            let ficha = document.getElementById("9").innerHTML = "<div class='circulo'></div> <div class='circulo2'></div>"
            jugador=1
            puesta9=true
        }
    }
}
