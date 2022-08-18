import { Currency } from "@hooks/types";

// const api = (FROM: string, TO: string) =>
//   `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${FROM}&to_currency=${TO}&apikey=${currency_access_tokens}`;

const getApi = (from: string) => {
  return `https://api.exchangerate.host/convert?from=${from}&to=AFN`;
};

const FROM = ["USD", "EUR", "GBP", "CAD", "BTC", "ADA"];

export const getCurrencies = async () => {
  const results = await Promise.all(
    FROM.map((from) => {
      return fetch(getApi(from));
    })
  );

  return (await Promise.all(results.map((res) => res.json()))) as Currency[];
};
