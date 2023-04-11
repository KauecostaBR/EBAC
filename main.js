const form  = document.getElementById("form-deposito");

function testeNum(numeros){
    const numA = numeros[0];
    const numB = numeros [1];
    const teste = numB > numA;

    return teste === true;

}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const takenumA = document.getElementById('numero-a');
    const takenumB = document.getElementById('numero-b');

    const arrayAB = []

    arrayAB.push(takenumA.value)
    arrayAB.push(takenumB.value)

    if (!testeNum(arrayAB)){
        alert("O valor B não é maior que A")
    } else{
        alert("Os valores estão de acordo com a regra.")
    }
})

console.log(form);