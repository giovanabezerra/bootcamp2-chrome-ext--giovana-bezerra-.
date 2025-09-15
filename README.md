[manifest.json](https://github.com/user-attachments/files/22325292/manifest.json)
{
    "manifest_version": 3,
    "name": "Olá, Mundo 3xt3ns10n",
    "version": "0.2.1",
    "description": "Minha primeira extensão do Google Chrome",
    "action": {
        "default_popuo":"popup.html",
        "default_title": "Diga Olá!", 
        "default_icon": {
            "16": "img/icon.png",
            "48": "img/icon.png",
            "128": "img/icon.png"
        }
    },
    "icons": {
        "16": "img/icon.png",
        "48": "img/icon.png",
        "128": "img/icon.png"[style.css](https://github.com/user-attachments/files/22325295/style.css)
[popup.js](https://github.com/user-attachments/files/22325294/popup.js)
[popup.html](https://github.com/user-attachments/files/22325293/popup.html)

    }
}
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Olá</title>
    <!--Bootstrap-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <!-- CSS próprio -->
    <link rel="stylesheet" href="styele.css">
</head>
<body class="bg-light">
    <div class="container p-3" style="width: 320px">
        <div class="card shadow-sm border-0 rounded-4">
            <div class="card-body">
                <h1 id="titulo" class="h4 fw-bold text-center mb-2">Olá, mundo!</h1>
                <p class="text-muted text-center mb-3">Minha primeira extensão do Chrome</p>
                <div class="d-grid gap-2">
                    <button id="oi" class="btn btn-primary">Diga oi você também!</button>
                    <button id="reset" class="btn btn-outline-secondary">Resetar</button>
                </div>
                <div class="card-footer bg-white">
                    <small class="text-muted">Feito por Giovana para a disciplina de Bootcamp II</small>

                </div>
            </div>
            
        </div>
       
    </div>
    <script src="/hello-ext/popup.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
</body>
</html>
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
