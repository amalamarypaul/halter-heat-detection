import { createServer } from "miragejs";
import responseData from "./data";

declare global {
  interface Window {
    server?: any;
  }
}

if (window.server) {
  window.server.shutdown();
}

window.server = createServer({
  routes() {
    this.get("/api/cattles", () => {
      return {
        cattles: responseData,
      };
    });
  },
});
