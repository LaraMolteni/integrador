function precioFinal(){
    let valor = 200;

    let cantEnt = document.getElementById("cantidadEntradas").value;
    
    let desc = document.getElementById("descuento").value;
    
    let porcDesc = ((cantEnt*valor)* desc)/100;

    let total = (cantEnt*valor) - porcDesc;

    document.getElementById("total").value = total;
}




