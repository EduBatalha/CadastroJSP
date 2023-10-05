function preencherOpcoesData() {
    const diaSelect = document.getElementById("dia");
    const mesSelect = document.getElementById("mes");
    const anoSelect = document.getElementById("ano");

    // Preencher opções de dia (1 a 31)
    for (let dia = 1; dia <= 31; dia++) {
        const option = document.createElement("option");
        option.value = dia.toString().padStart(2, "0");
        option.textContent = dia;
        diaSelect.appendChild(option);
    }

    // Preencher opções de mês (Janeiro a Dezembro)
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    for (let i = 0; i < meses.length; i++) {
        const option = document.createElement("option");
        option.value = (i + 1).toString().padStart(2, "0");
        option.textContent = meses[i];
        mesSelect.appendChild(option);
    }

    // Preencher opções de ano (até o ano atual)
    const anoAtual = new Date().getFullYear();
    for (let ano = anoAtual; ano >= 1900; ano--) {
        const option = document.createElement("option");
        option.value = ano;
        option.textContent = ano;
        anoSelect.appendChild(option);
    }

    // Eventos de mudança no ano e mês para ajustar os dias
    anoSelect.addEventListener("change", atualizarDias);
    mesSelect.addEventListener("change", atualizarDias);

    // Chamar a função para preencher as opções de data após a carga da página
    window.onload = preencherOpcoesData;
}

let isAnoSelecionado = false;
let isMesSelecionado = false;

function atualizarDias() {
    const diaSelect = document.getElementById("dia");
    const mesSelect = document.getElementById("mes");
    const anoSelect = document.getElementById("ano");
    const selectedMonth = parseInt(mesSelect.value);
    const selectedYear = parseInt(anoSelect.value);

    // Verificar se ambos ano e mês foram selecionados
    if (selectedYear && selectedMonth) {
        isAnoSelecionado = true;
        isMesSelecionado = true;

        // Obter o último dia do mês selecionado
        const lastDay = new Date(selectedYear, selectedMonth, 0).getDate();

        // Limpar as opções de dia
        diaSelect.innerHTML = "";

        // Preencher opções de dia com base no último dia do mês
        for (let dia = 1; dia <= lastDay; dia++) {
            const option = document.createElement("option");
            option.value = dia.toString().padStart(2, "0");
            option.textContent = dia;
            diaSelect.appendChild(option);
        }
    } else {
        isAnoSelecionado = false;
        isMesSelecionado = false;

        // Redefinir a lista de dias para 31 dias
        diaSelect.innerHTML = "";
        for (let dia = 1; dia <= 31; dia++) {
            const option = document.createElement("option");
            option.value = dia.toString().padStart(2, "0");
            option.textContent = dia;
            diaSelect.appendChild(option);
        }
    }
}

// Chamar a função para preencher as opções de data após a carga da página
window.onload = preencherOpcoesData;
