import styled from "@emotion/styled";
import { Currency } from "@hooks/types";
import { FC } from "react";
import Marquee from "react-fast-marquee";

interface INavCurrencyWidget {
  currencies?: Currency[];
}

type CurrenyItem = {
  difference: number;
};

const NavCurrencyWidget: FC<INavCurrencyWidget> = ({ currencies }) => {
  const renderStockCards = () => {
    return currencies?.map((curr, idx) => {
      const item = curr["Realtime Currency Exchange Rate"];
      // const difference = item["8. Bid Price"] - item["9. Ask Price"];
      const difference =
        parseInt(item?.["9. Ask Price"]) - parseInt(item?.["8. Bid Price"]);
      return (
        <CurrencyItem key={idx} difference={difference}>
          <span>
            {item?.["1. From_Currency Code"]}
            {"/" + item?.["3. To_Currency Code"]}
          </span>
          <span>{parseInt(item?.["5. Exchange Rate"]).toFixed(2)}</span>
          <span className="difference">{difference}</span>
          <span className="difference">{`(${difference / 100}%)`}</span>
        </CurrencyItem>
      );
    });
  };

  return (
    <Marquee gradientColor={[0, 0, 0]} gradientWidth={120} speed={40}>
      {renderStockCards()}
    </Marquee>
  );
};

export default NavCurrencyWidget;

const CurrencyItem = styled.div<CurrenyItem>`
  margin-left: 1rem;

  & > * {
    margin-left: 0.25rem;
  }

  & .difference {
    color: ${(props) =>
      props.difference === 0
        ? "gray"
        : props.difference < 0
        ? `var(--success-color-alt)`
        : `var(--failure-color-alt)`};
  }

  @media only screen and (min-width: 640px) {
    margin-left: 6rem;
  }
`;
