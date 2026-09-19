//Referência aos elementos da interface
const btnEl = document.querySelector (".button");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container")

//eventos
//Gera uma nova senha ao clicar no botão
btnEl.addEventListener("click", ()=>{
    createPassword()
})
//Copia a senha ao clicar no ícone "copiar"
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
//fuções
//Gera um índice aleatório criptograficamente segura e evita viés de módulo
function randomIndex(max) {
    const array = new Uint32Array(1);
    const limit = Math.floor(0x100000000 / max) * max;

    do {
        crypto.getRandomValues(array);
    } while (array[0] >= limit);

    return array[0] % max;
}
/* Função que irá gerar uma senha */
function createPassword() {
    /* todos os caracteres disponíveis para gerar uma senha */
    const chars=
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    /* número de caraceres da senha */
    const passwordLength = 27;
    let password = ""
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = randomIndex(chars.length);
        password += chars.charAt(randomNum);
    }
    inputEl.value = password;
    alertContainerEl.innerText = password + " copied!"
}
//Copia a senha para a área de transferência
function copyPass(){
    inputEl.select();/* Seleciona todo o texto */
    inputEl.setSelectionRange(0, 9999); /* Oferece suporte a dispositivos móveis, para que todo o texto seja selecionado. Ele especifica a posição inicial e final da seleção do texto. */
    navigator.clipboard.writeText(inputEl.value);
}
