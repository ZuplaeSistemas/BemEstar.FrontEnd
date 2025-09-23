import { MotivacionalRepositoryApi } from "./motivacional-respository.js";
import { MotivacionalModel } from "./motivacional-model.js";

class MotivacionalController {
  constructor() {
    this.repository = new MotivacionalRepositoryApi();
  }

  bindForm() {
    let formEl = document.querySelector("form");
    formEl.onsubmit = (event) => {
      event.preventDefault();
      let texto = event.target.texto.value;
      let autor = event.target.autor.value;
      this.createMotivacional(texto, autor);
      this.bindTable();
      event.target.reset();
    };
  }
  createMotivacional(texto, autor) {
    let motiva = new MotivacionalModel(texto, autor);
    this.repository.create(motiva);
  }
  async bindTable() {
    let table = document.querySelector("table");
    if (table) {
      let tbody = table.querySelector("tbody");
      let list = await this.getAll();
      if (list) {
        tbody.innerHTML = "";
        list.forEach(function (motivacional) {
          let row = document.createElement("tr");
          row.innerHTML = `
          <td>${motivacional.id}</td>
        <td>${motivacional.texto}</td>
        <td>${motivacional.autor}</td>`;
          tbody.appendChild(row);
        });
      }
    }
  }
  async getAll() {
    return await this.repository.getAll();
  }
}
export { MotivacionalController };
