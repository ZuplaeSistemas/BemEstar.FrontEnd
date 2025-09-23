let table = document.querySelector("table");
if (table) {
  const tbory = table.querySelector("tbody");
  const list = localStorage.getItem("motivacionalList");
  if (list) {
    tbory.innerHTML = "";
    const listhabito = JSON.parse(list);
    listhabito.forEach(function (habito) {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${habito.id}</td>
      <td>${habito.nome}</td>
      <td>${habito.frequencia}</td>
      <td>${habito.meta}</td>`;
      tbory.appendChild(row);
    });
  }
}
