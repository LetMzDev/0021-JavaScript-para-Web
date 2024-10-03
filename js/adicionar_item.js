// Lista de Compras
const item = document.getElementById ( "input-item" );

const lista_De_Compras = document.getElementById ( "lista-de-compras" );



let contador = 0; // Contador para os id do checkbox

// Lista de Itens Comprados
const lista_Comprados = document.getElementById ( "item-comprados" );

export function Adicionar_Item ( evento )
{
	evento.preventDefault();

	const item_Da_Lista = document.createElement ( "li" ); // Criando elemento li
	const container_Item_Lista = document.createElement ( "div" ); // Criando elemento li
	container_Item_Lista.classList.add ( "lista-item-container" ); // Add a class para a div

	const container_Nome_Do_Item =  document.createElement ( "div" );

	// checkbox create
		const container_Checkbox = document.createElement ( "div" );
		container_Checkbox.classList.add ( "container-checkbox" );

		const checkbox_Input = document.createElement ( "input" );
		checkbox_Input.type = "checkbox";
		checkbox_Input.classList.add ( "input-checkbox" );
		checkbox_Input.id = "checkbox-" + contador++;

		const checkbox_Label = document.createElement ( "label" ); // Faz a conexão com  o checkbox
		checkbox_Label.setAttribute ( "for", checkbox_Input.id );

		// Marcar e desmarcar a caixa do Checkbox
		checkbox_Label.addEventListener ( "click", function ( evento ) // Criação de função anonima
		{
			const checkbox_Input = evento.currentTarget.querySelector ( ".input-checkbox" );
			const checkbox_Customizado = evento.currentTarget.querySelector ( ".checkbox-customizado" );
			const item_Titulo = evento.currentTarget.closest ( "li" ).querySelector ( "#item-titulo" );

			if ( checkbox_Input.checked )
			{
				checkbox_Customizado.classList.add ( "checked" );
				item_Titulo.style.textDecoration = "line-through";
				lista_Comprados.appendChild ( item_Da_Lista );
			}

			else
			{
				checkbox_Customizado.classList.remove ( "checked" );
				item_Titulo.style.textDecoration = "none";
				lista_De_Compras.appendChild ( item_Da_Lista );
			}
		})

		const checkbox_Customizado = document.createElement ( "div" );
		checkbox_Customizado.classList.add ( "checkbox-customizado" );

		checkbox_Label.appendChild ( checkbox_Input );
		checkbox_Label.appendChild ( checkbox_Customizado );

		container_Checkbox.appendChild ( checkbox_Label );

		container_Nome_Do_Item.appendChild ( container_Checkbox );

	// Fim checkbox

	const nome_Do_Item = document.createElement ( "p" );
	nome_Do_Item.id = "item-titulo"
	nome_Do_Item.innerText = item.value;	// Recebe o valor do campo de digitação
	container_Nome_Do_Item.appendChild ( nome_Do_Item );

	const container_Botoes = document.createElement ( "div" );
	const botao_Remover = document.createElement ( "button" );	// Criando o botão remover
	botao_Remover.classList.add ( "item-lista-button" );

	const imagem_Remover = document.createElement ( "img" );
	imagem_Remover.src = "./img/delete.svg";
	imagem_Remover.alt = "Remover";

	botao_Remover.appendChild ( imagem_Remover );
	container_Botoes.appendChild (botao_Remover );

	const botao_Editar = document.createElement ( "button" ); // Criando o botão editar
	botao_Editar.classList.add ( "item-lista-button" );

	const imagem_Editar = document.createElement ( "img" );
	imagem_Editar.src = "./img/edit.svg";
	imagem_Editar.alt = "Editar";

	botao_Editar.appendChild ( imagem_Editar );
	container_Botoes.appendChild ( botao_Editar );

	container_Item_Lista.appendChild ( container_Nome_Do_Item );
	container_Item_Lista.appendChild ( container_Botoes );

	// Adicionando Data
		const item_Data = document.createElement ( "p" );
		item_Data.innerText = `${ new Date().toLocaleDateString ( "pt-BR", { weekday: "long" } )} ` +
		`( ${ new Date().toLocaleDateString() }) ` +
		`às ${ new Date().toLocaleTimeString ( "pt-BR", { hour: "numeric", minute: "numeric"}) }`;

		item_Data.classList.add ( "texto-data" );

	item_Da_Lista.appendChild ( container_Item_Lista ); // Coloca a div dentro do li
	item_Da_Lista.appendChild ( item_Data );
	lista_De_Compras.appendChild ( item_Da_Lista );
}