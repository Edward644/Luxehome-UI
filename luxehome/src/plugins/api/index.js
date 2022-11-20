import Service from "./service";

export default {
  install(app, opts) {
    const service = new Service(undefined, opts.http);

    app.config.globalProperties.$api = service;
  },
};
