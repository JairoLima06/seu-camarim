
const mirrorVideo = document.getElementById('mirror');

async function startMirror() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        mirrorVideo.srcObject = stream;
    } catch (error) {
        alert("Erro ao acessar a câmera. Por favor, permita o acesso à câmera.");
    }
}

/* Iniciar o espelho quando a página for carregada*/
startMirror();
