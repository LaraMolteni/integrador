function precioFinal(){
    let valor = 1500;

    let cantEnt = document.getElementById("cantidadEntradas").value;
    
    let desc = document.getElementById("descuento").value;
    console.log(desc);
    let porcDesc = ((cantEnt*valor)* desc)/100;

    let total = (cantEnt*valor) - porcDesc;

    document.getElementById("total").value = total;
}
