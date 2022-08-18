import styled from "@emotion/styled";
import { getCurrencies } from "@hooks/thirdpartyApi";
import { Currency } from "@hooks/types";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const NavCurrencyWidget = () => {
  const [currencies, setCurrencies] = useState<Currency[]>();

  const renderStockCards = () => {
    return currencies?.map((curr, idx) => {
      return (
        <CurrencyItem key={idx}>
          <span>
            {curr.query.from} / {curr.query.to}
          </span>
          <span className="value">
            {Math.round(curr.info.rate * 100) / 100}
          </span>
        </CurrencyItem>
      );
    });
  };

  useEffect(() => {
    const fetchCurrencies = async () => {
      setCurrencies(await getCurrencies());
    };

    fetchCurrencies();
  }, []);

  return (
    <Marquee gradientColor={[0, 0, 0]} gradientWidth={120} speed={40}>
      {renderStockCards()}
    </Marquee>
  );
};

export default NavCurrencyWidget;

const CurrencyItem = styled.div`
  margin-left: 1rem;

  & > * {
    margin-left: 0.25rem;
  }

  @media only screen and (min-width: 640px) {
    margin-left: 6.5rem;
  }
`;
