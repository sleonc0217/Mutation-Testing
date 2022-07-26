////////EJEMPLO 1//////////

///////////////////////////////////////////
///////////   Codigo Original  ////////////
///////////////////////////////////////////


// const user_info=() =>{
//     EdadMadre=parseInt(prompt("Ingresa la edad de la madre: "));
//     EdadHija=parseInt(prompt("Ingresa la edad de la hija:"));

//     if(EdadMadre > EdadHija){
//         alert("La edad de la hija es "+   EdadHija   +". La edad de la madre es "+  EdadMadre   +". Bienvenidos al programa Madre-Hija.");

//     }else{
//         alert("La edad de la hija es "+ EdadHija  +", es mayor que a la edad de la madre "+ EdadMadre+". Por favor digite correctamente las edades." );
//     }

// }

// user_info();



////////////////////////
//Mutacion de decision//
////////////////////////


///////////////////////////////////////////
///////////   Codigo Mutante  /////////////
///////////////////////////////////////////


// const user_info=() =>{
//     EdadMadre=parseInt(prompt("Ingresa la edad de la madre: "));
//     EdadHija=parseInt(prompt("Ingresa la edad de la hija:"));

//     if(EdadMadre < EdadHija){
//         alert("La edad de la hija es "+   EdadHija   +". La edad de la madre es "+  EdadMadre   +". Bienvenidos al programa Madre-Hija.");

//     }else{
//         alert("La edad de la hija es "+ EdadHija  +", es mayor que a la edad de la madre "+ EdadMadre+". Por favor digite correctamente las edades." );
//     }

// }

// user_info();











////////EJEMPLO 2//////////




///////////////////////////////////////////
///////////   Codigo Original  ////////////
///////////////////////////////////////////


// let arr=[2,3,4,5]
// for (let i = 0; i < arr.length; i++) {
//     if(i%2===0){
//         console.log(i*2);
//     }
// }



///////////////////////////////////////////
///////////   Codigo Mutante  /////////////
///////////////////////////////////////////



////////////////////////
//  Mutacion de valor //
////////////////////////


// let arr=[2,3,4,5]
// for (let i = 1; i < arr.length; i++) {
//     if(i%2===0){
//         console.log(i*2);
//     }
// }















////////EJEMPLO 3//////////




///////////////////////////////////////////
///////////   Codigo Original  ////////////
///////////////////////////////////////////


// let arr=[2,3,4,5]
// for (let i = 0; i < arr.length; i++) {
//     if(i%2===0){
//         console.log(i*2);
//     }
// }

///////////////////////////////////////////
///////////   Codigo Mutante  /////////////
///////////////////////////////////////////



////////////////////////
//  Mutacion de valor //
////////////////////////


// let arr=[2,3,4,5]
// for (let i = 0; i < arr.length; i++) {
//     if(i%2===0){
//         console.log(i*2);
//         console.log(i*2);
//     }
// }







////////EJEMPLO 4//////////

///////////////////////////////////////////
///////////   Codigo Original  ////////////
///////////////////////////////////////////


// const paciente_info=() =>{
//     EdadPaciente=parseInt(prompt("Ingresa la edad del paciente: "));

//     if(EdadPaciente >= 14){
//         alert("El paciente sera referido con un medico general");

//     }else if(EdadPaciente<14 && EdadPaciente>0){
//         alert("El paciente sera referidocon un pediatra" );
//     }else{
//         alert("Por favor digite la edad del paciente correctamente");
//     }

// }

// paciente_info();



////////////////////////
//Mutacion de decision//
////////////////////////


///////////////////////////////////////////
///////////   Codigo Mutante  /////////////
///////////////////////////////////////////


// const paciente_info=() =>{
//     EdadPaciente=parseInt(prompt("Ingresa la edad del paciente: "));

//     if(EdadPaciente = 14){
//         alert("El paciente sera referido con un medico general");

//     }else if(EdadPaciente<14 && EdadPaciente>0){
//         alert("El paciente sera referidocon un pediatra" );
//     }else{
//         alert("Por favor digite la edad del paciente correctamente");
//     }

// }

// paciente_info();
