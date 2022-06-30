import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useMediaQueries } from "@components/media-queries";
import styled from "@emotion/styled";
import data from "@test-data";

type CurrenyItem = {
  difference: number;
};

const NavCurrencyWidget = () => {
  const { lg, md, sm } = useMediaQueries();
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: lg ? 5 : md ? 4 : sm ? 3 : 1.5,
      spacing: 15,
    },
  });
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
    <Wrapper ref={ref} className="keen-slider">
      {renderStockCards()}
    </Wrapper>
  );
};

export default NavCurrencyWidget;

const Wrapper = styled.div``;
const CurrencyItem = styled.div<CurrenyItem>`
  & > * {
    margin-left: 0.25rem;
  }

  & .difference {
    color: ${(props) =>
      props.difference === 0
        ? "gray"
        : props.difference < 0
        ? `var(--success-color)`
        : `var(--failure-color)`};
  }
`;
