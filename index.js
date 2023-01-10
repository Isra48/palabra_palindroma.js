const form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);






verifica = () =>{
    const phrase = document.getElementsByName("text")[0].value;
    console.log(phrase);

const operador = (text) =>{
    let newArray = text.replace(/[^a-zA-Z 0-9.]+/g,'').replace(/ /g, "").toLowerCase().trim().split("");


return(JSON.stringify(newArray) == JSON.stringify(newArray.reverse()));


}


//console.log(operador(phrase));

let respuesta = operador(phrase);
const p = document.getElementById("respuesta");


if (respuesta == true) {
 
    p.textContent= "Es una palabra palindroma"
    
  } else if (respuesta == false) {
 
    
    p.textContent= "Es mentis"
  } 
    
}