let table = document.querySelector("table");
if (table) {
  const tbory = table.querySelector("tbody");
  const list = localStorage.getItem("motivacionalList");
  if (list) {
    tbory.innerHTML = "";
    const listmotivacional = JSON.parse(list);
    listmotivacional.forEach(function (motivacional) {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${motivacional.id}</td>
      <td>${motivacional.texto}</td>
      <td>${motivacional.autor}</td>`;
      tbory.appendChild(row);
    });
  }
}
