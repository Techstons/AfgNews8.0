import { Currency } from "@hooks/types";

const getForexApiUri = () => {
  return `https://fcsapi.com/api-v3/forex/latest?symbol=EUR/AFN,USD/AFN&access_key=ktN0i6vA3xu0X0ZOq9MQ6`;
};

const getCryptoApiUri = () => {
  return `https://fcsapi.com/api-v3/crypto/latest?id=78,79,2160,2649,80&access_key=ktN0i6vA3xu0X0ZOq9MQ6`;
};

const apiUris = [
  `https://fcsapi.com/api-v3/forex/latest?symbol=EUR/AFN,USD/AFN&access_key=ktN0i6vA3xu0X0ZOq9MQ6`,
  `https://fcsapi.com/api-v3/crypto/latest?id=78,79,2160,2649,80&access_key=ktN0i6vA3xu0X0ZOq9MQ6`,
];

const currencyNormalize = (currencies: any) => {
  return currencies.response.map((item: { [x: string]: any }) => {
    return {
      currentPrice: item.c,
      symbolPair: item.s,
      changeInPrice: item.cp,
    };
  }) as Currency[];
};

export const getCurrencies = async () => {
  const res = await fetch(getForexApiUri());
  const res2 = await fetch(getCryptoApiUri());
  const currencies = await res.json();
  const currencies2 = await res2.json();

  const forex = currencyNormalize(currencies);

  const crypto = currencyNormalize(currencies2);

  return forex.concat(crypto);
};
