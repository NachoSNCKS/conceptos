//CLASE CLIENTE
var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    Cliente.prototype.realizarPedido = function (mozo) {
        mozo.recibirPedido(); // <-- Aqui se origina el mensaje del pedido
    };
    return Cliente;
}());
//CLASE MOZO
var Mozo = /** @class */ (function () {
    function Mozo() {
    }
    Mozo.prototype.recibirPedido = function () {
        console.log("Se recibio el pedido");
    };
    return Mozo;
}());
/*---------------CLASE MAIN----------------------------*/
var main = function () {
    var cliente = new Cliente();
    var mozo = new Mozo();
    cliente.realizarPedido(mozo); //Instancia de una funcion
};
main(); //Momento en que se ejecuta MAIN
/*----------------FIN DE CLASE MAIN-----------------------*/ 
