export default function parsearFecha(fecha:string)
{
    if(fecha===undefined)return 'error'
    const meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Setiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    let fechaNumero = fecha.split("-");
    let fechaParas = meses.find((mes, index) => {
      return index === parseInt(fechaNumero[1]) - 1;
    });
    return fechaParas;
  };