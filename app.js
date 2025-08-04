// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaramos el array para almacenar los nombres de amigos
let amigos = [];
// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista visible en la página
    actualizarLista();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });

    // Limpiamos también el resultado anterior (si hubiera)
    document.getElementById('resultado').innerHTML = "";
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, añade nombres primero.");
        return;
    }

    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar resultado en el ul de resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // limpiamos el contenido previo

    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSeleccionado}`;
    resultado.appendChild(li);
}