const mensagem_Lista_Vazia = document.getElementById ( "mensagem-lista-vazia" );

export function Verificar_Lista_Vazia ( lista )
{
	if ( lista.childElementCount === 0 )
		mensagem_Lista_Vazia.style.display = "block";

	else
		mensagem_Lista_Vazia.style.display = "none";
}