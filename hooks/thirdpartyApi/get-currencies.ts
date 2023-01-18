import { Currency } from "@hooks/types";

const timestamp = Date.now();

const getForexApiUri = () => {
  return `https://fcsapi.com/api-v3/forex/latest?symbol=EUR/AFN,USD/AFN,USD/EUR&access_key=ktN0i6vA3xu0X0ZOq9MQ6&timestamp=${timestamp}`;
};

const getCryptoApiUri = () => {
  return `https://fcsapi.com/api-v3/crypto/latest?id=78,79,2160&access_key=ktN0i6vA3xu0X0ZOq9MQ6&timestamp=${timestamp}`;
};

const getStocksApiUri = () => {
  return `https://fcsapi.com/api-v3/stock/latest?id=15,56,112,38&access_key=ktN0i6vA3xu0X0ZOq9MQ6&timestamp=${timestamp}`;
};

const currencyNormalize = (currencies: any, isCrypto: boolean) => {
  return currencies.response.map((item: { [x: string]: any }) => {
    return {
      currentPrice: item.c,
      symbolPair: isCrypto ? item.s.slice(0, 3) : item.s,
      changeInPrice: item.cp,
      isCrypto,
    };
  }) as Currency[];
};

export const getCurrencies = async () => {
  
  const res = await fetch(getForexApiUri());
  const res2 = await fetch(getCryptoApiUri());
  const res3 = await fetch(getStocksApiUri());
  const currencies = await res.json();
  const currencies2 = await res2.json();
  const currencies3 = await res3.json();

  console.log(currencies);
  console.log(currencies2);
  console.log(currencies3);


  const forex = currencyNormalize(currencies, false);

  const crypto = currencyNormalize(currencies2, true);

  const stocks = currencyNormalize(currencies3, false);

  return forex.concat(crypto).concat(stocks);
};
