import { Criar_Item_Da_Lista } from "./criar_item_da_lista.js";
import { Verificar_Lista_Vazia } from "./verificar_lista_vazia.js";

// Lista de Compras
const item = document.getElementById ( "input-item" );
const lista_De_Compras = document.getElementById ( "lista-de-compras" );

export function Adicionar_Item ( evento )
{
	evento.preventDefault();

	const item_Da_Lista = Criar_Item_Da_Lista ( item.value );
	lista_De_Compras.appendChild ( item_Da_Lista );

	Verificar_Lista_Vazia ( lista_De_Compras );
}
