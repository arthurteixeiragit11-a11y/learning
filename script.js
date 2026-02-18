
//função que irá importar os números inseridos nos campos
function inputNum(){

    //guardando as referencias dos elementos html, apartir daqui posso usar essas variaveis para acessar qualquer atributo
    const inptNum1 = document.getElementById("inptNum1");
    const inptNum2 = document.getElementById("inptNum2");

    //acessando o atributo value dos elementos e guardando e mais 2 variaveis
    const num1 = parseFloat(inptNum1.value);
    const num2 = parseFloat(inptNum2.value);

    //console.log de teste para ver se os números estavam sendo guardados
    console.log(num1, num2);

    //chamando a função para calcular passando os 2 números para a outra função
    calcNum(num1,num2);
};

//função que irá calcular os números
function calcNum(num1,num2) {
    
    //referenciando os elementos html e trocando seu conteudo para os cálculos
    document.getElementById("sum").innerHTML = ` <style="color:red;">${num1} + ${num2} = ${num1 + num2}`;
    document.getElementById("sub").innerHTML = `${num1} - ${num2} = ${num1 - num2}`;
    document.getElementById("multi").innerHTML = `${num1} * ${num2} = ${num1 * num2}`;
    document.getElementById("divis").innerHTML = `${num1} / ${num2} = ${num1 / num2}`;
    document.getElementById("mod").innerHTML = `${num1} % ${num2} = ${num1 % num2}`;

};

const btcal = document.getElementById("btcal");
btcal.addEventListener("click", inputNum);
