let cervejas = ["Guinness", "Desperados", "Becks"];

        function transformar(item) {
            return `<div class="cerveja-div">${item}</div>`;
        }

        function carregarDiv() {
            let div = document.getElementById("meu-amor");
            let cervejasHtml = cervejas.map(transformar);
            div.innerHTML = `${cervejasHtml.join("\n")}`;
        }

        function criarTabela() {
            let div = document.getElementById("meu-amor");
            let tabelaHtml = `
                <table>
                    <thead>
                        <tr>
                            <th>Cervejas</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cervejas.map(cerveja => `<tr><td>${cerveja}</td></tr>`).join('')}
                    </tbody>
                </table>
            `;
            div.innerHTML = tabelaHtml;
        }

        function ordenarCervejas() {
            cervejas.sort();
            criarTabela();
        }

        function embaralharCervejas() {
            cervejas.sort(() => Math.random() - 0.5);
            criarTabela();
        }

        let botaoCarregar = document.getElementById("botaoCarregar");
        botaoCarregar.addEventListener("click", carregarDiv);

        let botaoOrdenar = document.getElementById("botaoOrdenar");
        botaoOrdenar.addEventListener("click", ordenarCervejas);

        let botaoEmbaralhar = document.getElementById("botaoEmbaralhar");
        botaoEmbaralhar.addEventListener("click", embaralharCervejas);