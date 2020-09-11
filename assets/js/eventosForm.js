// ELEMENTOS
// INTERNET
let btnInternet30 = document.querySelector(".btn-internet-30")
let btnInternet60 = document.querySelector(".btn-internet-60")
let btnInternet100 = document.querySelector(".btn-internet-100")

// TELEFONIA RESIDENCIAL
let btnBasico = document.querySelector(".btn-basico")
let btnIntermediario = document.querySelector(".btn-intermediario")
let btnAvancado = document.querySelector(".btn-avancado")

// TELEFONIA EMPRESARIAL
let btnEmpresarial = document.querySelector(".btn-corporativo")

let inputAssunto = document.querySelector("input[name=assuntoform]")
let inputMensagem = document.querySelector("textarea[name=mensagemform]")
let allBtn = document.querySelectorAll(".tab-content a")

allBtn.forEach(item => {
    item.addEventListener("click", scrollSmooth)
})

function scrollSmooth(event) {
    event.preventDefault()
    let el = event.target;
    let id = el.getAttribute("href")
    let to = document.querySelector(id).offsetTop

    window.scroll({
        top: to,
        behavior: "smooth"
    })
}

// CONTRATAÇÃO PLANO INTERNET
// PLANO 30MB
btnInternet30.addEventListener("click", () => {
    inputAssunto.value = "Interesse no Plano 30MB"
    inputMensagem.innerHTML = "Olá gostaria de contratar o plano 30MB, com valor R$69,90. \nTelefone pra contato: (xx) xxxxx-xxx \nEndereço de instalação: xxxxxxxx \nCidade: XX \nNúmero: xxxx \nCEP: xxxxx-xxx"
})

// PLANO 60MB
btnInternet60.addEventListener("click", () => {
    inputAssunto.value = "Interesse no Plano 60MB"
    inputMensagem.innerHTML = "Olá gostaria de contratar o plano 60MB, com valor R$79,90. \nTelefone pra contato: (xx) xxxxx-xxx \nEndereço de instalação: xxxxxxxx \nCidade: XX \nNúmero: xxxx \nCEP: xxxxx-xxx"
})

// PLANO 100MB
btnInternet100.addEventListener("click", () => {
    inputAssunto.value = "Interesse no Plano 100MB"
    inputMensagem.innerHTML = "Olá gostaria de contratar o plano 100MB, com valor R$89,90. \nTelefone pra contato: (xx) xxxxx-xxx \nEndereço de instalação: xxxxxxxx \nCidade: XX \nNúmero: xxxx \nCEP: xxxxx-xxx"
})

// CONTRATAÇÃO PLANO TELEFONIA RESIDENCIAL
// PLANO BASICO
btnBasico.addEventListener("click", () => {
    inputAssunto.value = "Interesse no Plano de telefonia Básico"
    inputMensagem.innerHTML = "Olá gostaria de contratar o plano de telefonia Básico, com valor R$14,90. \nTelefone pra contato: (xx) xxxxx-xxx \nEndereço de instalação: xxxxxxxx \nCidade: XX \nNúmero: xxxx \nCEP: xxxxx-xxx"
})

// PLANO INTERMEDIARIO
btnIntermediario.addEventListener("click", () => {
    inputAssunto.value = "Interesse no Plano de telefonia Intermediário"
    inputMensagem.innerHTML = "Olá gostaria de contratar o plano de telefonia Intermediário, com valor R$34,90. \nTelefone pra contato: (xx) xxxxx-xxx \nEndereço de instalação: xxxxxxxx \nCidade: XX \nNúmero: xxxx \nCEP: xxxxx-xxx"
})

// PLANO AVANÇADO
btnAvancado.addEventListener("click", () => {
    inputAssunto.value = "Interesse no Plano de telefonia Avançado"
    inputMensagem.innerHTML = "Olá gostaria de contratar o plano de telefonia Avançado, no valor R$49,90. \nTelefone pra contato: (xx) xxxxx-xxxx \nEndereço de instalação: xxxxxxxx \nCidade: XX \nNúmero: xxxx \nCEP: xxxxx-xxx"
})

// PLANO EMPRESARIAL
btnEmpresarial.addEventListener("click", () => {
    inputAssunto.value = "Interesse no Plano de telefonia Empresarial"
    inputMensagem.innerHTML = "Olá gostaria de contratar o plano de telefonia Empresarial, no valor promocional R$99,90 por 3 meses. \nTelefone pra contato: (xx) xxxxx-xxxx \nEndereço de instalação: xxxxxxxx \nCidade: XX \nNúmero: xxxx \nCEP: xxxxx-xxx"
})

