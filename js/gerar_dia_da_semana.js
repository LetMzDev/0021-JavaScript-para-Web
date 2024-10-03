export function Gerar_Dia_Da_Semana ()
{
	return `${ new Date().toLocaleDateString ( "pt-BR", { weekday: "long" } )} ` +
			`( ${ new Date().toLocaleDateString() }) ` +
			`às ${ new Date().toLocaleTimeString ( "pt-BR", { hour: "numeric", minute: "numeric"}) }`;
}
