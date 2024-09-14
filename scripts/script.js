const btgShared = document.getElementById("shared");
const sharedMenu = document.getElementById("sharedMenu");

// Adiciona a classe ao clicar no botão
btgShared.addEventListener("click", function (event) {
  sharedMenu.classList.toggle("sharedVisible");
  event.stopPropagation(); // Evita que o clique no botão seja considerado um clique fora
});
