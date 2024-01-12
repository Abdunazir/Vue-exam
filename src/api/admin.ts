import api from "@/plugins/axios";

const url = import.meta.env.VITE_BASE_URL;

function apifetchBookings() {
  return api.get(url + "/api/booking");
}

export { apifetchBookings };
