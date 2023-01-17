import styled from "@emotion/styled";
import { getCurrencies } from "@hooks/thirdpartyApi";
import { Currency } from "@hooks/types";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

interface INavCurrencyWidget {
  isDark: boolean;
}

interface ICurrencyItem {
  isNegative: boolean;
}

const NavCurrencyWidget = ({ isDark }: INavCurrencyWidget) => {
  const [currencies, setCurrencies] = useState<Currency[]>();

  const renderStockCards = () => {
    return currencies?.map((curr, idx) => {
      const isNegative = curr.changeInPrice.startsWith("-");
      return (
        <CurrencyItem key={idx} isNegative={isNegative}>
          <span>{curr.symbolPair}</span>
          <span>{parseFloat(curr.currentPrice).toFixed(2)} </span>
          <span className="cp">{curr.changeInPrice}</span>
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
    <Marquee
      gradientColor={isDark ? [0, 0, 0] : [255, 255, 255]}
      gradientWidth={120}
      speed={40}
      style={{marginRight: "5px"}}
    >
      {renderStockCards()}
    </Marquee>
  );
};

export default NavCurrencyWidget;

const CurrencyItem = styled.div<ICurrencyItem>`
  margin-left: 1rem;

  & > * {
    margin-left: 0.25rem;
  }

  @media only screen and (min-width: 640px) {
    margin-left: 7rem;
  }

  .cp {
    color: ${(props) =>
      props.isNegative ? "var(--failure-color)" : "var(--success-color)"};
  }
`;
