import { HabitoRepositoryApi } from "./habito-repository.js";
import { HabitoModel } from "./habito-model.js";

class HabitoController {
  constructor() {
    this.repository = new HabitoRepositoryApi();
  }

  bindForm() {
    let formEl = document.querySelector("form");
    formEl.onsubmit = (event) => {
      event.preventDefault();
      let nome = event.target.nome.value;
      let frequencia = event.target.frequencia.value;
      let meta = event.target.meta.value;
      this.createHabito(nome, frequencia, meta);
      this.bindTable();
      event.target.reset();
    };
  }
  createHabito(nome, frequencia, meta) {
    let habito = new HabitoModel(nome, frequencia, meta);
    this.repository.create(habito);
  }
  async bindTable() {
    let table = document.querySelector("table");
    if (table) {
      let tbody = table.querySelector("tbody");
      let list = await this.getAll();
      console.log(list);
      if (list) {
        tbody.innerHTML = "";
        list.forEach(function (habito) {
          let row = document.createElement("tr");
          row.innerHTML = `
          <td>${habito.id}</td>
        <td>${habito.nome}</td>
        <td>${habito.frequencia}</td>
        <td>${habito.meta}</td>`;
          tbody.appendChild(row);
        });
      }
    }
  }
  async getAll() {
    return await this.repository.getAll();
  }
}
export { HabitoController };
