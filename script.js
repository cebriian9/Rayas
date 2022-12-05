//cruz
//<div class='arriba'></div>  <div class='abajo'></div>

//circulo
//<div class='circulo'></div> <div class='circulo2'></div>

//determinar el jugador de inicio
let jugador=parseInt(Math.random() * 2 + 1)

//comprobar que lugar esta ocupado
let arrPuesta=[false,false,false,false,false,false,false,false,false]

// 0=ninguna, 1=cruz, 2=circulo
let arrfichas=[]

let ganado=false


function jugadorS() {
    
    //console.log("jugador:"+jugador)
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



function ponerFicha(ficha,lugar) {

    if (arrPuesta[ficha]==false ) {

        if (jugadorS() == 1) {
            console.log("pone cruz")
            document.getElementById(lugar).innerHTML = "<div class='arriba'></div>  <div class='abajo'></div>"
            jugador=2
            
                        
        } else {
            console.log("pone circulo")
            document.getElementById(lugar).innerHTML = "<div class='circulo'></div> <div class='circulo2'></div>"
            jugador=1
            

        }
        arrfichas[ficha]=jugadorS()
    }
    
    arrPuesta[ficha]=true
    decirJugador(jugador)
    
    comprobarWin()
}


function comprobarWin() {
    


}

function reset() {

    console.log("reset")
    for (let index = 0; index < 9; index++) {
        let id=index+""
        console.log(id)
        document.getElementById(id).innerHTML = "<div class='circulo'></div> <div class='circulo2'></div>"

        
    }
    arrPuesta=[false,false,false,false,false,false,false,false,false]
    arrfichas=[]
}
