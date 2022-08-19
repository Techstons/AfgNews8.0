import { Currency } from "@hooks/types";

// const api = (FROM: string, TO: string) =>
//   `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${FROM}&to_currency=${TO}&apikey=${currency_access_tokens}`;

const getApi = (from: string, to: string) => {
  return `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
};

const FOREX = ["USD", "EUR", "GBP", "CAD"];
const CRYPTO = ["BTC", "ADA"];

export const getCurrencies = async () => {
  const currencies = await Promise.all(
    FOREX.map((from) => {
      return fetch(getApi(from, "AFN"));
    })
  );

  const cryptos = await Promise.all(
    CRYPTO.map((from) => {
      return fetch(getApi(from, "USD"));
    })
  );

  return (await Promise.all(currencies.map((res) => res.json()))).concat(
    await Promise.all(cryptos.map((res) => res.json()))
  ) as Currency[];
};
