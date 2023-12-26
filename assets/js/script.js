
document.getElementById("util").addEventListener('change', (e) => {
  const textInput = document.getElementById("usefulLife");
  const select = document.getElementById("selecionarBem");

  if (e.target.checked) {
    textInput.disabled = true;
    select.style.display = "block";
    carregarCategorias();
  } else {
    textInput.disabled = false;
    select.style.display = "none";
  }
});

function carregarCategorias() {
  const select = document.getElementById("selecionarBem");
  select.innerHTML = ""; // Limpa as opções existentes

  taxaDepreciacao.forEach(function (categoria) {
    const opc = document.createElement('option');
    opc.value = categoria.taxa;
    opc.text = categoria.Descricao;
    select.add(opc);
  });
}

function calculateDepreciation() {
  const valorEquipamento = parseFloat(document.getElementById("equipmentValue").value);
  const valorSucata = parseFloat(document.getElementById("scrapValue").value);
  const vidaUtil = parseFloat(document.getElementById("usefulLife").value);
  const tempoDeUso = parseFloat(document.getElementById("timeOfUse").value);

  if (isNaN(valorEquipamento) || isNaN(valorSucata) || isNaN(tempoDeUso)) {
    alert("Por favor adicione números válidos.");
    return;
  }

  const vidaTotal = vidaUtil;
  let taxaDepreciacao = 0;

  if (document.getElementById("util").checked) {
    const selectValue = parseFloat(document.getElementById("selecionarBem").value);
    taxaDepreciacao = (valorEquipamento - valorSucata) * selectValue;
  } else {
    taxaDepreciacao = (valorEquipamento - valorSucata) / vidaTotal;
  }

  const depreciacaoTotal = taxaDepreciacao * tempoDeUso;
  const valorContabilFinal = valorEquipamento - depreciacaoTotal;

  function createResultHTML(label, value) {
    return "<div><span>" + label + ":</span> <span>R$" + value.toFixed(2) + "</span></div>";
  }

  const resultadoDepAnual = createResultHTML("A depreciação total da máquina ou equipamento é de R$", depreciacaoTotal);
  const resultadoContabilFinal = createResultHTML("Valor Contábil Final", valorContabilFinal);

  document.getElementById("result").innerHTML = resultadoDepAnual;
  document.getElementById("result-contabil").innerHTML = resultadoContabilFinal;
}
