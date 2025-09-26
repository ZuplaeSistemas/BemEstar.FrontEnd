class DicaRepositoryApi {
  constructor() {
    this.baseUrl = "https://localhost:7116/api/dica";
  }

  create(dica) {
    fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dica),
    });
  }
  async getAll() {
    let response = await fetch(this.baseUrl);
    let list = await response.json();
    return list;
  }
}

export { DicaRepositoryApi };