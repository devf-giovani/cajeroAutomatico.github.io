//  const uno = document.getElementById("numero");

//console.log(uno)

function limpiar(){
    const clean = document.getElementById("clean").value;
    console.log(clean);

    alert(clean + "se elimino");
}



const vistaNumero = document.getElementById("valorPantalla")
const numeroUno = document.querySelector("numero")
vistaNumero.addEventListener('click', () =>{
    console.log("diste click")
    numeroUno.textContent    
})


