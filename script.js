// Array com curiosidades sobre agronegócio e sustentabilidade
const fatos = [
    "A agricultura familiar produz cerca de 70% dos alimentos consumidos diariamente no Brasil.",
    "Drones e sensores inteligentes ajudam grandes fazendas a economizar até 30% de água e defensivos agrícolas.",
    "O Brasil possui uma das legislações ambientais mais rigorosas do mundo, exigindo que propriedades rurais mantenham de 20% a 80% de sua área com vegetação nativa preservada (Reserva Legal).",
    "A Integração Lavoura-Pecuária-Floresta (ILPF) permite produzir grãos, carne e madeira na mesma área, recuperando o solo e capturando carbono.",
    "O uso de bioinsumos (defensivos biológicos feitos a partir de microrganismos) cresce mais de 10% ao ano no combate a pragas."
];

let ultimoIndice = -1;

function mostrarFato() {
    const textoFato = document.getElementById("fact-text");
    let novoIndice;

    // Sorteia um fato diferente do último exibido
    do {
        novoIndice = Math.floor(Math.random() * fatos.length);
    } while (novoIndice === ultimoIndice);

    ultimoIndice = novoIndice;
    
    // Adiciona um efeito simples de troca de texto
    textoFato.style.opacity = 0;
    setTimeout(() => {
        textoFato.innerText = fatos[novoIndice];
        textoFato.style.opacity = 1;
    }, 200);
}

// Função para rolar suavemente até uma seção (usada no botão do Banner)
function scrollToSection(id) {
    const elemento = document.getElementById(id);
    elemento.scrollIntoView({ behavior: 'smooth' });
}
