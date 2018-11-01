

//Zona de variables 

fila1=Array(2,6,5,4,5,5);
fila2=Array(4,6,6,3,2,6);
fila3=Array(3,4,1,2,6,3);
fila4=Array(1,4,2,5,6,1);
fila5=Array(5,5,3,2,2,1);
fila6=Array(4,1,4,3,1,3);

filacolor1=Array("azul","amarillo","rosa","rojo","amarillo","azul");
filacolor2=Array("azul","blanco","rosa","rojo","amarillo","azul");
filacolor3=Array("azul","amarillo","azul","rojo","rojo","rosa");
filacolor4=Array("rosa","blanco","rosa","rojo","verde","rojo");
filacolor5=Array("verde","blanco","verde","verde","blanco","amarillo");
filacolor6=Array("verde","blanco","rosa","blanco","verde","amarillo");

var suma1 = 0;
var suma2 = 0;
var suma3 = 0;
var suma4 = 0;
var suma5 = 0;
var suma6 = 0;


filaycolor1=Array();
filaycolor2 = Array();
filaycolor3 = Array();
filaycolor4 = Array();
filaycolor5 = Array();
filaycolor6 = Array();
x= 0;

k = 0;




//Zona de funciones


function iniciartablero(fila1,fila2,fila3,fila4,fila5,fila6,filacolor1,filacolor2,filacolor3,filacolor4,filacolor5,filacolor6) {


    for (let i = 0; i < fila1.length; i++) {
        suma1 = fila1[i] + filacolor1[i]
        filaycolor1.push(suma1)

    }
    for (let i = 0; i < fila2.length; i++) {
        suma2 = fila2[i] + filacolor2[i]
        filaycolor2.push(suma2)
    }
    for (let i = 0; i < fila3.length; i++) {
        suma3 = fila3[i] + filacolor3[i]
        filaycolor3.push(suma3)
    }
    for (let i = 0; i < fila4.length; i++) {
        suma4 = fila4[i] + filacolor4[i]
        filaycolor4.push(suma4)

    }
    for (let i = 0; i < fila5.length; i++) {
        suma5 = fila5[i] + filacolor5[i]
        filaycolor5.push(suma5)
    }
    for (let i = 0; i < fila6.length; i++) {
        suma6 = fila6[i] + filacolor6[i]
        filaycolor6.push(suma6)
    }
    
}

 

function compruebaTablero(filaycolor1, filaycolor2, filaycolor3, filaycolor4, filaycolor5, filaycolor6) {
    console.log(filaycolor1);
    console.log(filaycolor2);
    console.log(filaycolor3);
    console.log(filaycolor4);
    console.log(filaycolor5);
    console.log(filaycolor6);
  

}



//Inicamos y comprobamos tablero.

    iniciartablero(fila1, fila2, fila3, fila4, fila5, fila6, filacolor1, filacolor2, filacolor3, filacolor4, filacolor5, filacolor6)
    compruebaTablero(filaycolor1, filaycolor2, filaycolor3, filaycolor4, filaycolor5, filaycolor6)
  


