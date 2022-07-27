const btn1= document.querySelector("#btnOriginal1");
////////EJEMPLO 1//////////

///////////////////////////////////////////
///////////   Código Original  ////////////
///////////////////////////////////////////

btn1.addEventListener("click", () =>{
    EdadMadre=parseInt(prompt("Ingresa la edad de la madre: "));
    EdadHija=parseInt(prompt("Ingresa la edad de la hija:"));

    if(EdadMadre > EdadHija){
        alert("La edad de la hija es "+   EdadHija   +". La edad de la madre es "+  EdadMadre   +". Bienvenidos al programa Madre-Hija.");

    }else{
        alert("La edad de la hija es "+ EdadHija  +", es mayor que a la edad de la madre "+ EdadMadre+". Por favor digite correctamente las edades." );
    }
});










const btn2= document.querySelector("#btnMutante1");
////////////////////////
//Mutación de decision//
////////////////////////


///////////////////////////////////////////
///////////   Código Mutante  /////////////
///////////////////////////////////////////

btn2.addEventListener("click", () =>{

    EdadMadre=parseInt(prompt("Ingresa la edad de la madre: "));
    EdadHija=parseInt(prompt("Ingresa la edad de la hija:"));

    if(EdadMadre < EdadHija){
        alert("La edad de la hija es "+   EdadHija   +". La edad de la madre es "+  EdadMadre   +". Bienvenidos al programa Madre-Hija.");

    }else{
        alert("La edad de la hija es "+ EdadHija  +", es mayor que a la edad de la madre "+ EdadMadre+". Por favor digite correctamente las edades." );
    }



});











const btn3= document.querySelector("#btnOriginal2");
////////EJEMPLO 2//////////


///////////////////////////////////////////
///////////   Código Original  ////////////
///////////////////////////////////////////

btn3.addEventListener("click", ()=>{

let arr=[2,3,4,5]
for (let i = 0; i < arr.length; i++) {
    if(i%2===0){
        alert(i*2);
    }
}

});



const btn4= document.querySelector("#btnMutante2");
///////////////////////////////////////////
///////////   Código Mutante  /////////////
///////////////////////////////////////////



////////////////////////
//  Mutación de valor //
////////////////////////

btn4.addEventListener("click", ()=>{

let arr=[2,3,4,5]
for (let i = 1; i < arr.length; i++) {
    if(i%2===0){
        alert(i*2);
    }
}

});





















////////EJEMPLO 3//////////




///////////////////////////////////////////
///////////   Código Original  ////////////
///////////////////////////////////////////


// let arr=[2,3,4,5]
// for (let i = 0; i < arr.length; i++) {
//     if(i%2===0){
//         console.log(i*2);
//     }
// }

///////////////////////////////////////////
///////////   Código Mutante  /////////////
///////////////////////////////////////////



////////////////////////
//  Mutación de valor //
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
