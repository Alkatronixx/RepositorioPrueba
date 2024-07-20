let escena = 1;

function sumarEscena() {
  escena++;
  actualizarEscena();
}

function actualizarEscena() {
  const divPrueba = document.getElementById("prueba");

  if (escena === 1) {
    divPrueba.innerHTML = `
            <img src="https://github.com/Alkatronixx/PrimerRepositorio/blob/main/images/2.png?raw=true" width="100%"/>
            <button id="miBoton">Haz clic en mí</button>
            <audio autoplay loop preload="auto">
                <source src="https://github.com/Alkatronixx/PrimerRepositorio/raw/main/images/Defense.mp3" type="audio/mpeg">
            </audio>
        `;
    document.getElementById("miBoton").addEventListener("click", sumarEscena);
  } else if (escena === 2) {
    divPrueba.innerHTML = `
            <img src="https://github.com/Alkatronixx/PrimerRepositorio/blob/main/images/3.png?raw=true" width="100%"/>
        `;
  }
}

actualizarEscena();
