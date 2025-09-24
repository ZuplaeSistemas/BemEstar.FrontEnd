class HabitoRepositoryApi {
  constructor() {
    this.baseUrl = "http://localhost:5132/api/habitos";
  }

  create(habito) {
    fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(habito),
    });
  }
  async getAll() {
    let response = await fetch(this.baseUrl);
    let list = await response.json();
    return list;
  }
}

export { HabitoRepositoryApi };
