let bike = ["pop 100", "fazer 250", "bross", "bizinha", "cb500x"]

const loadDiv = bikes => {
    const div = document.getElementById("motosDiv")
    const motosHtml = bikes.map(item => `<h1>${item}</h1>`)
    div.innerHTML = `${motosHtml.join("\n")}`
}

const orderItens = () => {
    const ordermotos = [...motos].sort()
    loadDiv(ordermotos)
}

const shuffleItens = () => {
    const shufflemotos = [...motos].sort(() => Math.random() - 0.5)
    loadDiv(shufflemotos)
}

document.getElementById("linkLoad").addEventListener("click", e => {
    e.preventDefault()
    loadDiv(bike)
})

document.getElementById("order").addEventListener("click", e => {
    e.preventDefault()
    orderItens()
})

document.getElementById("shuffle").addEventListener("click", e => {
    e.preventDefault()
    shuffleItens()
})