import { Currency } from "@hooks/types";

const getApiUri = () => {
  return `https://fcsapi.com/api-v3/forex/latest?symbol=EUR/AFN,USD/AFN&access_key=ktN0i6vA3xu0X0ZOq9MQ6`;
};

export const getCurrencies = async () => {
  const res = await fetch(getApiUri());
  const currencies = await res.json();

  return currencies.response.map((item: { [x: string]: any }) => {
    return {
      currentPrice: item.c,
      symbolPair: item.s,
      changeInPrice: item.cp,
    }; // gets current price
  }) as Currency[];
};
