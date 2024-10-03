import { Verificar_Lista_Comprados } from "./verificar_comprados.js";
import { Verificar_Lista_Vazia } from "./verificar_lista_vazia.js";

const lista_De_Compras = document.getElementById ( "lista-de-compras" );
const lista_Comprados = document.getElementById ( "item-comprados" );

const excluir_Item = ( elemento ) =>
{
	let confirmacao = confirm ( "Tem certeza que deseja excluir esse item?" );

	if ( confirmacao )
	{
		elemento.remove();
		Verificar_Lista_Vazia ( lista_De_Compras );
		Verificar_Lista_Comprados ( lista_Comprados );
	}
}

export { excluir_Item };
