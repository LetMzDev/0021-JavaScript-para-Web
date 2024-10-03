const container_Lista_Comprados = document.getElementById ( "container-lista-comprados" );

export function Verificar_Lista_Comprados ( lista )
{
	if ( lista.childElementCount === 0 )
		container_Lista_Comprados.style.display = "none";

	else
		container_Lista_Comprados.style.display = "block";
}
