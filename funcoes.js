/* exemplo 1 */

function escrevaMeuNome(nome) {
  console.log("Meu nome é " + nome);
}

escrevaMeuNome("Stefany");
escrevaMeuNome("Leonardo");

/* exemplo 2 -  verificacao com if */

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log("Maior");
  } else {
    console.log("Menor");
  }
}

verificarIdade(5);

/* juros com funcoes */

/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

const precoEtiqueta = 100;
const formaDePagamento = 4;

/* if (formaDePagamento === 1) {
  console.log(precoEtiqueta - precoEtiqueta * 0.1);
} else if (formaDePagamento === 2) {
  console.log(precoEtiqueta - precoEtiqueta * 0.15);
} else if (formaDePagamento === 3) {
  console.log(precoEtiqueta);
} else {
  console.log(precoEtiqueta + precoEtiqueta * 0.1);
} */

/* deixando o codigo mais limpo com funcoes */

function aplicarDesconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}
function aplicarJuros(valor, juros) {
    return valor + valor * (juros/100);
}

if (formaDePagamento === 1) {
  console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
  console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
  console.log(precoEtiqueta);
} else {
  console.log(aplicarJuros(precoEtiqueta,10));
}
