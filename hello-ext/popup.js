(()=> {
    const titulo = document.getElementById('titulo');
    const botaoOi = document.getElementById('oi');
    const botaoReset = document.getElementById('reset');

    const mensagemOriginal = titulo?.textContent ||
    "Olá, mundo!"
    let alternado = false;

    function alternarMensagem(){
        if(!titulo) return;
        alternado = !alternado;
        titulo.textoContext = alternado ? 'Olá, do botão!' : mensagemOriginal;
    }

    function resetar(){
        if (!titulo) return;
        alternado = false;
        titulo.textContent = mensagemOriginal;
    }

    botaoOi?.addEventListener('click', alternarMensagem);
    botaoReset?.addEventListener('click', resetar)
    
})();