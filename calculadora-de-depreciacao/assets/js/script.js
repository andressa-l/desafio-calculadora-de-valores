function calculateDepreciation() {
    var valorEquipamento = parseFloat(
        document.getElementById("equipmentValue").value
    );
    var valorSucata = parseFloat(
        document.getElementById("scrapValue").value
    );
    var vidaUtil = parseFloat(
        document.getElementById("usefulLife").value
    );
    var tempoDeUso = parseFloat(document.getElementById("timeOfUse").value);

    if (
        isNaN(valorEquipamento) ||
        isNaN(valorSucata) ||
        isNaN(vidaUtil) ||
        isNaN(tempoDeUso)
    ) {
        alert("Por favor adicione números válidos.");
        return;
    }

    var vidaTotal = vidaUtil * 12;
    var taxaDepreciacaoAnual = (valorEquipamento - valorSucata) / vidaTotal;
    var depreciacaoTotal = taxaDepreciacaoAnual * tempoDeUso;
    var depreciacaoMensal = taxaDepreciacaoAnual / tempoDeUso;
    var valorContabilFinal = valorEquipamento - valorSucata;
    var resultadoAnual = "Depreciação Total Anual: R$" + depreciacaoTotal.toFixed(2);
    var resultadoMensal = "Depreciação mensal: R$" + depreciacaoMensal.toFixed(2);
    var resultadoContabilfinal = "Valor Contábil Final: R$" + valorContabilFinal.toFixed(2);

    document.getElementById("result").innerHTML = resultadoAnual;
    document.getElementById("result-mensal").innerHTML = resultadoMensal;
    document.getElementById("result-contabil").innerHTML = resultadoContabilfinal;
    
}