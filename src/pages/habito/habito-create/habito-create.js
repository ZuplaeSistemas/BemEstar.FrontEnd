document.querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  const id = crypto.randomUUID();
  const nome = event.target.Nome.value;
  const frequencia = event.target.Frequência.value;
  const meta = event.target.Meta.value;

  const habito = { id, nome, frequencia, meta };
  habitoList = [];
  const listStorege = localStorage.getItem("habitoList");
  if (listStorege) {
    habitoList = JSON.parse(listStorege);
  }
  habitoList.push(habito);
  localStorage.setItem("habitoList", JSON.stringify(habitoList));
  event.target.reset(); //limpar o formulario
};
