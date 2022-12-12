//cruz
//<div class='arriba'></div>  <div class='abajo'></div>

//circulo
//<div class='circulo'></div> <div class='circulo2'></div>

//determinar el jugador de inicio
let jugador=parseInt(Math.random() * 2 + 1)

//comprobar que lugar esta ocupado
let arrPuesta=[false,false,false,false,false,false,false,false,false]

// 0=ninguna, 1=cruz, 2=circulo
let arrFichas=[0,0,0,0,0,0,0,0,0]

let ganado=false


function jugadorS() {
    //console.log("jugador:"+jugador)
    decirJugador(jugador)
    return jugador
}

function decirJugador() {
    if (jugador == 1) {
        document.getElementById("turno").innerHTML = "Jugado 1"
    } else {
        document.getElementById("turno").innerHTML = "Jugado 2"
    }
}


function ponerFicha(casilla,lugar) {

    //comprueba que la casilla esta vacia
    if (arrPuesta[casilla]==false ) {

        //comprueba el jugador
        if (jugadorS() == 1) {
            document.getElementById(lugar).innerHTML = "<div class='arriba'></div>  <div class='abajo'></div>"
            //pone que jugador/casilla esta en esa casilla
            arrFichas[casilla]=jugadorS()
            jugador=2//cambia juagador
               
        } else {
            document.getElementById(lugar).innerHTML = "<div class='circulo'></div> <div class='circulo2'></div>"
            //pone que jugador/casilla esta en esa casilla
            arrFichas[casilla]=jugadorS()
            jugador=1//cambia juagador
            
        }
    }
    arrPuesta[casilla]=true
    decirJugador(jugador)
    comprobarWin()
}


function comprobarWin() {
    
    for (let index = 0; index < 3; index++) {
        if (arrFichas[index]==1 && arrFichas[index+1]==1 && arrFichas[index+2]==1) {
            document.getElementById("turno").innerHTML = "Gana el jugador Jugado 1"
            ganar2()
        }else if(arrFichas[index]==2 && arrFichas[index+1]==2 && arrFichas[index+2]==2){
            document.getElementById("turno").innerHTML = "Gana el jugador Jugado 2"
            ganar2()
        }
    
        if (arrFichas[index]==1 && arrFichas[index+3]==1 && arrFichas[index+6]==1) {
            document.getElementById("turno").innerHTML = "Gana el jugador Jugado 1"
            ganar2()
        }else if(arrFichas[index]==2 && arrFichas[index+3]==2 && arrFichas[index+6]==2){
            document.getElementById("turno").innerHTML = "Gana el jugador Jugado 2"
            ganar2()
        }
        
    }

    if (arrFichas[0]==1 && arrFichas[4]==1 && arrFichas[8]==1) {
        document.getElementById("turno").innerHTML = "Gana el jugador Jugado 1"
        ganar2()
    }else if(arrFichas[0]==2 && arrFichas[4]==2 && arrFichas[8]==2){
        document.getElementById("turno").innerHTML = "Gana el jugador Jugado 2"
        ganar2()
    }

    if (arrFichas[2]==1 && arrFichas[4]==1 && arrFichas[6]==1) {
        document.getElementById("turno").innerHTML = "Gana el jugador Jugado 1"
        ganar2()
    }else if(arrFichas[2]==2 && arrFichas[4]==2 && arrFichas[6]==2){
        document.getElementById("turno").innerHTML = "Gana el jugador Jugado 2"
        ganar2()
    }

    


}

function ganar2() {
    arrPuesta=[true,true,true,true,true,true,true,true,true]
}

function reset() {

    
    for (let index = 1; index <= 9; index++) {
        document.getElementById(index).innerHTML = ""
    }

    arrPuesta=[false,false,false,false,false,false,false,false,false]
    arrFichas=[0,0,0,0,0,0,0,0,0]

    if (jugadorS() == 1) {
        jugador=2
    } else {
        jugador=1
    }
    jugadorS()
}
