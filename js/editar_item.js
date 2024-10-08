import { Gerar_Dia_Da_Semana } from "./gerar_dia_da_semana.js";

export const editar_Item = ( elemento ) =>
{
	let novo_Item = prompt ( "Digite o novo nome do item:" );

	if ( novo_Item !== null && novo_Item.trim() !== "" )
	{
		const item_Texto_Atualizado = elemento.querySelector ( "#item-titulo" );
		item_Texto_Atualizado.textContent = novo_Item;

		const estava_Comprado = elemento.querySelector ( ".input-checkbox" ).checked;

		if ( estava_Comprado )
		{
			elemento.querySelector ( ".input-checkbox" ).checked = true;
			elemento.querySelector ( ".checkbox-customizado" ).classList.add ( "checked" );
			item_Texto_Atualizado.style.textDecoration = "line-through";
		}

		// Atualiza data de criação para a data em que foi editado
        const data_De_Criacao = elemento.querySelector ( ".texto-data" );
        data_De_Criacao.textContent = Gerar_Dia_Da_Semana();
	}
}
