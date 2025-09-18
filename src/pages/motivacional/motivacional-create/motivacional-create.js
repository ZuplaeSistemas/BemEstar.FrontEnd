document.querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  const id = crypto.randomUUID();
  const texto = event.target.texto.value;
  const autor = event.target.autor.value;

  const motiva = { id, texto, autor };
  motivacionalList = [];
  const listStorege = localStorage.getItem("motivacionalList");
  if (listStorege) {
    motivacionalList = JSON.parse(listStorege);
  }
  motivacionalList.push(motiva);
  localStorage.setItem("motivacionalList", JSON.stringify(motivacionalList));
  event.target.reset(); //limpar o formulario
};
