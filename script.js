var input = require("fs").readFileSync("ntdin", "utf8").split("\n"); // chamando a variavel input para fazer o requerimento do ("fs")) 
                                                                        //juntamente usando o readFileSync para ler a entrada "ntdin" e pra rodar o "utf8" 
                                                                        // fazendo gambiarra no split("\n") para ler as 2 linhas do codigo

function CALCULO(codigoProduto1, numeroUnidades1, precoUnitario1, codigoProduto2, numeroUnidades2, precoUnitario2) { //criando uma função chamada CALCULO e declarando os 
    var totalPagar = (numeroUnidades1 * precoUnitario1) + (numeroUnidades2 * precoUnitario2);                        //codigos e unidades em seguida ira retornar o total a 
    return totalPagar.toFixed(2);                                                                                    // pagar arredondando ele em 2 casas decimais
}

const [codigoProduto1, numeroUnidades1, precoUnitario1] = input[0].split(" ").map(value => parseFloat(value)); 

const [codigoProduto2, numeroUnidades2, precoUnitario2] = input[1].split(" ").map(value => parseFloat(value));

const Pagamento = CALCULO(codigoProduto1, numeroUnidades1, precoUnitario1, codigoProduto2, numeroUnidades2, precoUnitario2);

console.log("Valor a pagar: R$ " + Pagamento);
