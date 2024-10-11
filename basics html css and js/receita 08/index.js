let canas = [];
    const loadTable = Canas => {
        const tbody = document.getElementById("canasField");
        const image = document.getElementById("image")
        let tabelaHtml = "";
        
        Canas.forEach(({ id, name, alcohol, yeast, malts }) => {
            tabelaHtml += `
                <tr>
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${alcohol}</td>
                    <td>${yeast}</td>
                    <td>${malts}</td>
                </tr>
            `;
        });
        tbody.innerHTML = tabelaHtml;
    };

    function loadCanas() {
        fetch("https://random-data-api.com/api/v2/beers?size=3")
            .then(res => res.json())
            .then(data => {
                Canas = data;
                loadTable(Canas);
            })
            .catch(err => {
                document.getElementById("canasTable").innerHTML = `Error: ${err} `;
                document.getElementById("errorImage").src = "";
            });
    }

    let botao = document.getElementById("loadButton");
    botao.addEventListener("click", loadCanas);