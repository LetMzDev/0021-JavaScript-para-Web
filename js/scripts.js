const item = document.getElementById ( "input-item" );
const botao_Salvar_Item = document.getElementById ( "adicionar-item" );

botao_Salvar_Item.addEventListener ( "click", Adicionar_Item );

function Adicionar_Item ( evento )
{
	evento.preventDefault();
	console.log ("ENTROu NA FUNÇÂO");
}