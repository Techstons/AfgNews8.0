import { Currency } from "@hooks/types";
import { currency_access_tokens } from "../keys";

const api = (FROM: string, TO: string) =>
  `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${FROM}&to_currency=${TO}&apikey=${currency_access_tokens}`;

const TO = "AFN";
const FROM = ["USD", "EUR"];

export const getCurrency = async () => {
  const results = await Promise.all(
    FROM.map((from) => {
      return fetch(api(from, TO));
    })
  );

  const data = (await Promise.all(
    results.map((res) => res.json())
  )) as Currency[];

  return data;
};
