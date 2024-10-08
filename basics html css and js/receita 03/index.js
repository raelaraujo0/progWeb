let isDisplayed = false;

        function carregarAFuckinDiv(){
            let div = document.getElementById("meine-liebe");
            
            div.classList.add("hidden");

            setTimeout(() => {
                if (isDisplayed) {
                    div.innerHTML = ''
                    isDisplayed = false;
                } else {
                    div.innerHTML = '<h1>Guinness</h1>';
                    isDisplayed = true;
                }
                div.classList.remove("hidden");
            }, 500);
        }

        let botao = document.getElementById("botao");
        botao.addEventListener("click", carregarAFuckinDiv);