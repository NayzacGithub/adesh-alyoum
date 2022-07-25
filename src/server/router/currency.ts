import { z } from "zod";
import { createRouter } from "./context";

const API_URL: string = process.env.API_URL || "https://sp-today.com/app_api/cur_damascus.json";

export const currencyRouter = createRouter()
    .query("getAllCurrencyPrices", {

        async resolve() {
            const now = new Date().getTime();
            const response = await fetch(`${API_URL}?${now}`);
            const data = await response.json();
            return data;
        }
    });