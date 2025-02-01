// Crear un array para almacenar los nombres
const amigos = [];
const lista = document.getElementById('listaAmigos');

function agregarAmigo() {
    const campoTexto = document.getElementById('amigo');
    const nombreAmigo = campoTexto.value.trim();

    if (nombreAmigo) {
        amigos.push(nombreAmigo);
        actualizarAmigos();
        campoTexto.value = '';
    } else {
        alert('¡Por favor, ingresa el nombre del amigo!');
    }

    campoTexto.focus();
}

function actualizarAmigos() {
    lista.innerHTML = '';

    for (const amigo of amigos) {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    const numeroAmigos = amigos.length;

    if (numeroAmigos === 0) {
        alert('¡Añade al menos un amigo para sortear!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * numeroAmigos);
    const amigoAleatorio = amigos[indiceAleatorio];
    const resultadoElemento = document.getElementById('resultado');

    resultadoElemento.innerHTML = `<li>${amigoAleatorio}</li>`;

    // Deshabilitar botones después de sortear
    document.querySelector(".button-draw").disabled = true;
    document.querySelector(".button-add").disabled = true;
}
