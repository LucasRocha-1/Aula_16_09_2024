// nome = prompt("Informe seu nome: ");

// console.log("Foi digitado " + nome);

function an_su() {
    let num = document.getElementById("numero").value;
    let antecessor=num-1;
    let sucessor=num+1;
    let resultado = "Antecessor: " + antecessor + "\nSucessor: " + sucessor;
    document.getElementById('resultado').textContent = resultado; 
}