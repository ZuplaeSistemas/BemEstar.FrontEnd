import { DicaRepositoryApi } from "./dica-repository.js";
import { DicaModel } from "./dica-model.js";

class DicaController {
  constructor() {
    this.repository = new DicaRepositoryApi();
  }

  bindForm() {
    let formEl = document.querySelector("form");
    formEl.onsubmit = (event) => {
      event.preventDefault();
      let titulo = event.target.titulo.value;
      let descricao = event.target.descricao.value;
      let categoria = event.target.categoria.value;
      this.createDica(titulo, descricao, categoria);
      this.bindTable();
      event.target.reset();
    };
  }
  createDica(titulo, descricao, categoria) {
    let dica = new DicaModel(titulo, descricao, categoria);
    this.repository.create(dica);
  }
  async bindTable() {
    let table = document.querySelector("table");
    if (table) {
      let tbody = table.querySelector("tbody");
      let list = await this.getAll();
      if (list) {
        tbody.innerHTML = "";
        list.forEach(function (dica) {
          let row = document.createElement("tr");
          row.innerHTML = `
          <td>${dica.id}</td>
        <td>${dica.titulo}</td>
        <td>${dica.descricao}</td>
        <td>${dica.categoria}</td>`;
          tbody.appendChild(row);
        });
      }
    }
  }
  async getAll() {
    return await this.repository.getAll();
  }
}
export { DicaController };