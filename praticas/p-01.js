/*
	1 - Adicionando funcionalidade ao botão de salvar

		Imagine que você está trabalhando no desenvolvimento de uma aplicação web para uma lista de tarefas. Você já tem o layout pronto e agora precisa fazer a parte funcional do botão de salvar.

		<form>
			<input id = "input_item" class="input-item" type="text" placeholder="Digite a tarefa que deseja adicionar"></input>
			<button id = "salvar_item class="button-item">Salvar tarefa</button>
		</form>

		Quando alguém digita um item no campo de texto e clica em "Salvar", o item deve ser adicionado à lista abaixo do campo de entrada. Vamos criar essa funcionalidade usando JavaScript.

		No arquivo script.js, selecione o campo de entrada e o botão de salvar usando getElementById.
		Adicione um ouvinte de eventos ao botão que, ao ser clicado, chama uma função para adicionar a tarefa à lista.
		Dentro da função, obtenha o valor digitado no campo de entrada e crie um novo elemento HTML para esse item.
		Adicione esse novo item à lista de tarefas na página.
*/

const input = document.getElementById ( 'input_item' );
const Botao_Salvar = document.getElementById ( 'salvar_item' );

Botao_Salvar.addEventListener ( 'click', function()
{
	const item_Value = input.value;
	const novo_Item = document.createElement('li');
	novo_Item.textContent = item_Value;
	document.getElementById ( 'lista-de-tarefas' ).appendChild ( novo_Item );
	input.value = ''; // Clear input field after adding
});
