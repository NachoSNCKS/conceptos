/*------------------------CLASES--------------------------------------*/
//CLASE CLIENTE

class Cliente {
    realizarPedido(mozo:Mozo, pedido: Pedido){
        mozo.recibirPedido(pedido) // <-- Aqui se origina el mensaje del pedido || SEGUNDO EN REALIZARSE
    }         

}

//CLASE MOZO

class Mozo {
    recibirPedido(pedido : Pedido) : void{ //TERCER EN REALIZARSE
        console.log("Se recibio el pedido")        
    }
}


/*----------------------------FIN DE CLASES-----------------------------------*/

/*---------------CLASE MAIN----------------------------*/

let main = () => { //Funcion que no ejecut ningun parametro y siempre se ejecuta
    let cliente = new Cliente()
    let mozo : Mozo = new Mozo()
    let pedido : Pedido = {
        nombre : "Ceviche",
        cantidad:2
    }

    cliente.realizarPedido(mozo,pedido) //Instancia de una funcion || GATILLANTE DEL PROCESO
}

main() //Momento en que se ejecuta MAIN

/*----------------FIN DE CLASE MAIN-----------------------*/


/*---------------------INTERFACES---------------------*/

interface Pedido{  //La iterface solo permite crear una estructura, no permite definir metodos
    nombre : String
    cantidad : number
}