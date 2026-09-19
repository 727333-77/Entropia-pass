/*===============================Criando constantes dos eventos================================= */
const btnEl = document.querySelector (".button");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container")

/*===============================Criação de eventos================================= */
/* =/=/=/=/=/=/=/ Ao clicar no botão da classe "button", o evento "createPassword" será ativado /=/=/=/=/=/=/=/=/ */
btnEl.addEventListener("click", ()=>{
    createPassword()
})
/* =/=/=/=/=/=/=/ Copiar a senha ao clicar no ícone de copiar /=/=/=/=/=/=/=/=/ */
copyIconEl.addEventListener("click", ()=>{
    copyPass()
    /* mostra a mensagem copiada por apenas alguns segundos */
    if(inputEl.value){
        alertContainerEl.classList.remove("active");
        setTimeout(()=>{
        alertContainerEl.classList.add("active");
    }, 2000); 
    }

})
/*===============================Funções================================= */
/* =/=/=/=/=/=/=/=/=/ gerador de senha /=/=/=/=/=/=/=/=/=/=/ */
/* Função que irá gerar uma senha */
function createPassword() {
    /* todos os caracteres usados para criar uma senha */
    const chars=
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    /*Combinação de caracteres aleatórios */
    const passwordLength = 27;/* número de caraceres da senha */
    let password = ""
    /* caracteres selecionados aleatoriamente */
    for (let index = 0; index 
        < passwordLength; index++) {
            const randomNum = Math.floor (Math.random() * chars.length)
            password += chars.charAt(randomNum);
         }
    inputEl.value = password;
    alertContainerEl.innerText = password + " copied!"
}
/* =/=/=/=/=/=/=/=/=/ Copiar senha para a área de transferência /=/=/=/=/=/=/=/=/=/=/ */
function copyPass(){
    inputEl.select();/* Seleciona todo o texto */
    inputEl.setSelectionRange(0, 9999); /* Oferece suporte a dispositivos móveis, para que todo o texto seja selecionado. Ele especifica a posição inicial e final da seleção do texto. */
    navigator.clipboard.writeText(inputEl.value);
}