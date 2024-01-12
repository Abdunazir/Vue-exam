// src/api/api.ts
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.example.com", // Backend manzili
});

export const fetchData = async (endpoint: string) => {
  try {
    const response = await instance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Boshqa serverga so'rovlar uchun kerakli boshqa funksiyalarni ham qo'shing
