export default class Service {
  #domain;
  #http;

  constructor(domain, http) {
    this.#domain = domain ?? "http://localhost:8000";
    this.#http = http;
  }

  async getRoutines() {
    const path = "/api/routines";
    const { data } = await this.#http(this.#domain + path);
    return data;
  }

  async getEvents() {
    const path = "/api/events";
    const { data } = await this.#http(this.#domain + path);
    return data;
  }

  async getTasks() {
    const path = "/api/tasks";
    const { data } = await this.#http(this.#domain + path);
    return data;
  }

  async getLogs() {
    const path = "/api/logs";
    const { data } = await this.#http(this.#domain + path);
    return data;
  }
}
