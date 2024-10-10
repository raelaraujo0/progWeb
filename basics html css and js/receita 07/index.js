let canas = [];
        const loadTable = canas => {
            const tbody = document.getElementById("canasField");
            let tabelaHtml = "";
            canas.forEach(({ id, name, alcohol, yeast, malts }) => {
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

        async function carregarCanas() {
            try {
                let res = await fetch("https://random-data-api.com/api/v2/beers?size=3");
                canas = await res.json();
                loadTable(canas);
            } catch (err) {
                document.getElementById("tableCanas").innerHTML = `Error: ${err} `;
                document.getElementById("errorImage").src = "-www.google.com/url?sa=i&url=https%3A%2F%2Fwww.terra.com.br%2Fesportes%2Ffutebol%2Fclubes-e-jogadores-tambem-serao-afetados-pela-supensao-do-xtwitter%2C46924a0442b34fc9aaed9cd488748d1eg2jf0zev.html&psig=AOvVaw2s_finj__d6LyBteIioDcg&ust=1728476348742000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCFhavi_ogDFQAAAAAdAAAAABA.jpg";
            }
        }

        let button = document.getElementById("loadButton");
        button.addEventListener("click", carregarCanas);