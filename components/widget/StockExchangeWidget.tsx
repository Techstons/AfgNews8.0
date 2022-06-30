import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useMediaQueries } from "@components/media-queries";
import styled from "@emotion/styled";

// TODO: Improve stock exchange design if Malik approves

const StockExchangeWidget = () => {
  const { lg, md, sm } = useMediaQueries();
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: lg ? 6 : md ? 5 : sm ? 4 : 3,
      spacing: 15,
    },
  });
  const renderStockCards = () => {
    return Array.from({ length: 10 }).map((i, idx) => {
      return (
        <StockCard key={idx} className="keen-slider__slide">
          <div className="label">
            <span>^</span>
            <p>Dow Futures</p>
          </div>

          <div className="prices">
            <div>%22</div>
            <div>-22</div>
            <div>50011</div>
          </div>
        </StockCard>
      );
    });
  };

  return (
    <Wrapper ref={ref} className="keen-slider">
      {renderStockCards()}
    </Wrapper>
  );
};

export default StockExchangeWidget;

const Wrapper = styled.div``;
const StockCard = styled.div`
  border-left: 1px solid var(--primary-light);
  border-right: 1px solid var(--primary-light);
  margin: 0.5rem 0;
  padding: 0 0.5rem;

  & .label {
    display: flex;
  }

  & .prices {
    display: flex;
    justify-content: space-between;
  }
`;
