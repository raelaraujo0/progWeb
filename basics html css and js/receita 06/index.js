let canas = [
    {
        name: "Pitu",
        alcohol: "40%",
        from: "Pernambuco",
        ibu: "0"
    },
    {
        name: "Ypioca",
        alcohol: "38%",
        from: "Ceara",
        ibu: "0"
    },
    {
        name: "Carangueijo",
        alcohol: "39%",
        from: "Sergipe",
        ibu: "0"
    }
];
const cdiv = 
(
    cs,
    divId = "cdiv",
    colHeaders = ["Nome", "Álcool", "Estilo", "Amargor"],
    props = ["name", "alcohol", "from", "ibu"]
) => {
    const div = document.getElementById(divId);
    let tableHtml = 
    `<table><thead><tr>${colHeaders.map(header => `<th>${header}</th>`).join('')}</tr></thead><tbody>`;

    tableHtml += cs.map(item =>
        `<tr>${props.map(prop => `<td>${item[prop] || 'N/A'}</td>`).join('')}</tr>`
    ).join('');
    tableHtml += `</tbody></table>`;
    div.innerHTML = tableHtml;
};

let botao = document.getElementById("load");
botao.addEventListener("click", () => cdiv(canas));