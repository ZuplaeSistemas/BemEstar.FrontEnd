class MotivacionalRepositoryApi {
  constructor() {
    this.baseUrl = "https://localhost:7116/api/motivacional";
  }

  create(motivacional) {
    fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(motivacional),
    });
  }
  async getAll() {
    let response = await fetch(this.baseUrl);
    let list = await response.json();
    return list;
  }
}

export { MotivacionalRepositoryApi };
