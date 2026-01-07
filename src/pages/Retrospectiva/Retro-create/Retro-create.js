const form = document.getElementById("retro-form");
const backBtn = document.getElementById("btn-back");

form.addEventListener("submit", e => {
  e.preventDefault();

  const team = document.getElementById("team").value.trim();
  const sprint = document.getElementById("sprint").value.trim();

  if (!team || !sprint) {
    alert("Preencha todos os campos.");
    return;
  }

  // Recupera retros existentes do localStorage
  let retros = JSON.parse(localStorage.getItem("retros")) || [];

  const newRetro = {
    id: Date.now(), // ID único
    team,
    sprint,
    columns: {
      bom: [],
      parar: [],
      objetivo: []
    }
  };

  retros.push(newRetro);
  localStorage.setItem("retros", JSON.stringify(retros));

  // Redireciona para listar
  window.location.href = "./retro-list.html";
});

backBtn.addEventListener("click", () => {
  window.location.href = "./../index.html";
});
