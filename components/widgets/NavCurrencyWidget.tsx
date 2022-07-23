import styled from "@emotion/styled";
import data from "@test-data";
import Marquee from "react-fast-marquee";
type CurrenyItem = {
  difference: number;
};

const NavCurrencyWidget = () => {
  const renderStockCards = () => {
    return data.widgets.currencies.map((item, idx) => {
      const difference =
        item.difference > 0 ? `+${item.difference}` : item.difference;
      return (
        <CurrencyItem
          key={idx}
          className="keen-slider__slide"
          difference={item.difference}
        >
          <span>
            {item.base}
            {!!item.currency && "/" + item.currency}
          </span>
          <span>{item.value}</span>
          <span className="difference">{difference}</span>
          <span className="difference">{`(${difference}%)`}</span>
        </CurrencyItem>
      );
    });
  };

  return (
    <Marquee gradientColor={[0, 0, 0]} gradientWidth={120}>
      {renderStockCards()}
    </Marquee>
  );
};

export default NavCurrencyWidget;

const CurrencyItem = styled.div<CurrenyItem>`
  margin-left: 2rem;

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
    margin-left: 1rem;
  }
`;
