import { currency_access_tokens } from "../keys";

export const currencyFetcher = fetch(
  "https://api.currencyapi.com/v3/latest?apikey=" +
    currency_access_tokens +
    "currencies=USD%2CIRR%2CEUR%2CINR%2CPKR&base_currency=AFN"
)
  .then((res) => res.json())
  .then((data) => data?.data);
