import { createServer } from "miragejs";
import responseData from "./data";
import { StatisticsData } from "./types";

const statsData: StatisticsData = {
  cowsCycled: "95%",
  cowsNotCycled: 16,
};
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
    this.get("/api/cattles/stats", () => {
      return {
        stats: statsData,
      };
    });
  },
});
