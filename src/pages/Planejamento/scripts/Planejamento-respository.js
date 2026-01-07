class PlanejamentoRepositoryApi {
  constructor() {
    this.baseUrl = "https://localhost:7116/api/planejamento";
  }

  create(planejamento) {
    fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(planejamento),
    });
  }
  async getAll() {
    let response = await fetch(this.baseUrl);
    let list = await response.json();
    return list;
  }
}

export { PlanejamentoRepositoryApi };
