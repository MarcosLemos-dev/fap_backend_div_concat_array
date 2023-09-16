/*
Instruções
Luiza é desenvolvedora e está trabalhando com dois arrays. O primeiro é [23, 9, 4, 45]
e o segundo é [7, 12]. Ela precisa dividir o primeiro em dois arrays e cada array gerado
deve ser concatenado com o segundo array.
1. Qual é o pacote que Luiza precisa utilizar?
2. Se for preciso instalar esse pacote, qual é o comando que deve ser utilizado?
3. Qual é o comando para importar esse pacote?
4. Quais as funções utilizadas neste pacote?
5. Quais serão os arrays resultantes dessa operação?
Realize essa atividade no WORD ou no Bloco de Notas, suba esse arquivo para
algum repositório e compartilhe o link no campo ao lado para que outros
desenvolvedores possam analisá-lo.


*/

let array1 = [23, 9, 4, 45];
let array2 = [7, 12];
/*
Array.prototype.slice()
O método slice() retorna uma cópia de parte de um array a partir 
de um subarray criado entre as posições início e fim (fim não é incluído) de um array original.
 O Array original não é modificado.
*/
var subarray1 = array1.slice(0, 2);
var subarray2 = array1.slice(2,4);
console.log('resultado da primeira metada do array1(subarray1)',subarray1);
 console.log('resultado da segunda metada do array1(subarray2)',subarray2);

/*Array.prototype.concat()
O método concat() é utilizado para mesclar dois ou mais arrays.
 Esse método não altera os arrays existentes, mas, em vez disso, retorna um novo array. 
 */
 

 const array3 = subarray1.concat(array2);
 const array4 = subarray2.concat(array2);
 console.log('resultado da concatenaçao da metade do array1(subarray1) com array2',array3);
 console.log('resultado da concatenaçao da metade do array1(subarray2) com array2',array4);