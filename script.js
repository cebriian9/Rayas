//cruz
//<div class='arriba'></div>  <div class='abajo'></div>

//circulo
//<div class='circulo'></div> <div class='circulo2'></div>

let jugador=parseInt(Math.random() * 2 + 1)
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

//Tablero [9][9]=new Array()


/*let puesta1=false
let puesta2=false
let puesta3=false
let puesta4=false
let puesta5=false
let puesta6=false
let puesta7=false
let puesta8=false
let puesta9=false*/
//----------------poner fichas--------

const  puesta=[]
puesta[0]=false
puesta[1]=false


function ponerFicha(ficha,lugar) {
    console.log("poniendo... "+puesta[ficha])

    

    if (puesta[ficha]==false) {
        console.log("poniendo...")

        if (jugadorS() == 1) {
            console.log("pone cruz")
            let ficha = document.getElementById(lugar).innerHTML = "<div class='arriba'></div>  <div class='abajo'></div>"
            jugador=2
            puesta[ficha]=true

            console.log("pusa "+puesta[ficha])
            
        } else {
            console.log("pone circulo")
            let ficha = document.getElementById(lugar).innerHTML = "<div class='circulo'></div> <div class='circulo2'></div>"
            jugador=1
            puesta[ficha]=true
            
            console.log("pusa "+puesta[ficha])
        }
        console.log("pusa "+puesta[ficha])
    }

    console.log("pusa2 "+puesta[ficha])
    decirJugador(jugador)
    console.log("----------------------------")
}


function ficha1() {
    console.log("ficha1")
   ponerFicha(0,"1")
}
function ficha2() {
    console.log("ficha2")
    ponerFicha(1,"2")
}
function ficha3() {
   
}
function ficha4() {
    
}
function ficha5() {
    
}
function ficha6() {
    
}
function ficha7() {
    
}
function ficha8() {
    
}
function ficha9() {
    
}
